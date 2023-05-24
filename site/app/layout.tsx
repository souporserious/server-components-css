import { Stack } from 'design-system'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Stack>{children}</Stack>
      </body>
    </html>
  )
}
