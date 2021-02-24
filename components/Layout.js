import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

import loadable from '@loadable/component';
const NewsletterSignup = loadable(() => import('./NewsletterSignup'));

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#055c9c' />
        <meta name='Description' content={description}></meta>
        <title>{pageTitle}</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://cdn.substack.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&family=Open+Sans:wght@400;700&family=Sacramento&display=swap'
          rel='stylesheet'
        />
        {/* <link rel='stylesheet' href='/static/style.css' /> */}
      </Helmet>
      <section className='layout'>
        <Header />
        <main role='main' className='content'>
          {children}
          <NewsletterSignup />
        </main>
        <Footer />
      </section>
      {/* <script src='/static/menu-scroll.js'></script> */}
    </>
  );
}
