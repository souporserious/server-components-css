import * as React from 'react'
import { clsx } from 'clsx'
import styles from './stack.module.css'

export function Stack({
  children,
  className,
  padding,
}: {
  children: React.ReactNode
  className?: string
  padding?: 'small' | 'medium' | 'large'
}) {
  return (
    <div
      className={clsx(
        styles.Stack,
        padding === 'small' && styles['padding-sm'],
        padding === 'medium' && styles['padding-md'],
        padding === 'large' && styles['padding-lg'],
        className
      )}
    >
      {children}
    </div>
  )
}
