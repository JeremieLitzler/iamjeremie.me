import { Helmet } from 'react-helmet';
import Contents from './Contents';
import Footer from './Footer';
import Header from './Header';

export default function Layout({
  children,
  pageTitle,
  description,
  showHero = false,
  ...props
}) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#055c9c' />
        <meta name='description' content={description}></meta>
        <title>{pageTitle}</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://cdn.substack.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&family=RocknRoll+One&family=Sacramento&display=swap'
          rel='stylesheet'
        />
        {/* <link rel='stylesheet' href='/static/style.css' /> */}
      </Helmet>
      <Header />
      <Contents children={children} />
      <Footer />
      {/* <script src='/static/menu-scroll.js'></script> */}
    </>
  );
}
