
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' className='transition-all'>
        <Head />
        <body className="bg-pearl dark:bg-onyx">
          <Main />
          <NextScript />
        </body>
      </Html>  
    )
  }
}

export default MyDocument