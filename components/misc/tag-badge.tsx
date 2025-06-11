import Link from 'next/link'

interface TagBadgeProps {
  tag: string
  clickable?: boolean
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md'
}

export default function TagBadge({ 
  tag, 
  clickable = false, 
  variant = 'default',
  size = 'sm' 
}: TagBadgeProps) {
  const baseClasses = `inline-flex items-center rounded-full font-medium transition-colors ${
    size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
  }`
  
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    outline: 'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300'
  }
  
  const hoverClasses = clickable 
    ? 'hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer' 
    : ''
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses}`
  
  if (clickable) {
    return (
      <Link href={`/tags/${encodeURIComponent(tag)}`} className={classes}>
        #{tag}
      </Link>
    )
  }
  
  return (
    <span className={classes}>
      #{tag}
    </span>
  )
}

// Component for rendering multiple tags
export function TagList({ tags, clickable = false }: { tags: string[], clickable?: boolean }) {
  if (!tags || tags.length === 0) return null
  
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <TagBadge key={tag} tag={tag} clickable={clickable} />
      ))}
    </div>
  )
} 