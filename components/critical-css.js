import { join } from 'path'
import { readFileSync } from 'fs'
import { Head } from 'next/document'

const InlineStyle = ({ assetPrefix, file, nonce }) => {
  const cssPath = join(process.cwd(), '.next', file)
  const cssSource = readFileSync(cssPath, 'utf-8')
  const html = { __html: cssSource }
  const id = `${assetPrefix}/_next/${file}`
  return <style dangerouslySetInnerHTML={html} data-href={id} nonce={nonce} />
}

export class CriticalCSS extends Head {
  getCssLinks() {
    return this.__getInlineStyles()
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps
    const { nonce } = this.props
    const isCss = (file) => /\.css$/.test(file)
    const renderCss = (file) => <InlineStyle key={file} file={file} nonce={nonce} assetPrefix={assetPrefix} />
    return files && files.length > 0 ? files.filter(isCss).map(renderCss) : null
  }
}
