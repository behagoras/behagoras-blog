import { format, parseISO } from 'date-fns'

// Date formatting utilities
export function formatDate(dateString: string): string {
  try {
    const date = typeof dateString === 'string' ? parseISO(dateString) : new Date(dateString)
    return format(date, 'MMMM d, yyyy')
  } catch (error) {
    console.warn('Invalid date format:', dateString)
    return dateString
  }
}

export function formatDateShort(dateString: string): string {
  try {
    const date = typeof dateString === 'string' ? parseISO(dateString) : new Date(dateString)
    return format(date, 'MMM d, yyyy')
  } catch (error) {
    console.warn('Invalid date format:', dateString)
    return dateString
  }
}

// Slug utilities
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function unslugify(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

// Array utilities
export function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

// String utilities
export function truncate(str: string, length: number = 100, suffix: string = '...'): string {
  if (str.length <= length) return str
  return str.substring(0, length).trim() + suffix
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Validation utilities
export function isValidUrl(string: string): boolean {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
} 