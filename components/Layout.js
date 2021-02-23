import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='Description' content={description}></meta>
        <title>{pageTitle}</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
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
          <section className='newsletter'>
            <h3>Want to read more or never miss an article ?</h3>
            <iframe src='https://jeremiel.substack.com/embed'></iframe>
          </section>
        </main>
        <Footer />
      </section>
      {/* <script src='/static/menu-scroll.js'></script> */}
    </>
  );
}
