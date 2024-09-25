import Script from 'next/script'
import './globals.css'

const applyDarkMode = `
  try {
    document.documentElement.classList.add('dark')
  } catch (_) {}
`

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* This works */}
        {/* <script dangerouslySetInnerHTML={{ __html: applyDarkMode }} /> */}
      </head>
      <body>
        {/* This will cause a flash of unstyled content (throttle to fast 4G to see it)*/}
        <Script strategy='beforeInteractive' dangerouslySetInnerHTML={{ __html: applyDarkMode }} />
        {children}
      </body>
    </html>
  )
}
