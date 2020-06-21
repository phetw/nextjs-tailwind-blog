import Document, { Main, NextScript } from 'next/document'
import { CriticalCSS } from 'components/critical-css'

class ExtendedNextDocument extends Document {
  render() {
    return (
      <html>
        <CriticalCSS />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default ExtendedNextDocument
