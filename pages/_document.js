import { Html, Head, Main, NextScript } from 'next/document'

export default function DocumentPage(props) {

  return (
    <Html lang='ko'>
      <Head>
      {/* IE 접속시 안내창 띄우고, Edge 브라우저로 오픈 */}
      <script dangerouslySetInnerHTML={{__html: `
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = '/browser/notice.html';
        }, 1);
      }
      `}}/>

      </Head>
      <body id="body" className='lg:text-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}