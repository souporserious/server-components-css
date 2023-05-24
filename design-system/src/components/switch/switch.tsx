import * as React from 'react'
import { Stack } from '../stack'
import styles from './switch.module.css'

export function Switch({ children }: { children: React.ReactNode }) {
  return <Stack className={styles.Switch}>{children}</Stack>
}
