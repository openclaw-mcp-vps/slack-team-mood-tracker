import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Team Mood Tracker — Track Team Sentiment from Slack',
  description: 'Analyzes Slack messages for sentiment trends, identifies team stress patterns, and generates mood reports for managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2bbefead-bbe3-47ca-9c7d-db34485c0f0b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
