import { Helmet } from 'react-helmet';
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
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&family=Open+Sans:wght@400;700&family=Sacramento&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='/static/style.css' />
      </Helmet>
      <section className='layout'>
        <Header />
        <main role='main' className='content'>
          {children}
        </main>
        <footer>
          <section>
            <p className='fine-print'>
              This site is built {''}
              <a
                href='https://url.netlify.com/ByVW0bCF8'
                target='_blank'
                rel='noreferrer'
              >
                from my GitHub repository
              </a>
              {''} with Next, and is easily{' '}
              <a
                href='https://url.netlify.com/r1j6ybSYU'
                target='_blank'
                rel='noreferrer'
              >
                deployable on Netlify
              </a>
              .
            </p>
            <p className='fine-print'>
              You can look at{' '}
              <a
                href='https://github.com/cassidoo/next-netlify-blog-starter'
                title="Link to Cassidy's repository"
              >
                the original project of Cassidy Williams on GitHub
              </a>
              , and {''}
              <a
                href='https://url.netlify.com/ByVW0bCF8'
                target='_blank'
                rel='noreferrer'
              >
                her Netlify blog post
              </a>{' '}
              on how to build it.
            </p>
            <p className='fine-print'>
              Built with and served by{' '}
              <a
                className='netlify-heart'
                href='http://netlify.com'
                target='_blank'
                rel='noreferrer'
              >
                <img src='/netliheart.svg' alt='A Netlify Heart' />
              </a>
            </p>
          </section>
        </footer>
      </section>
      {/* <script src='/static/menu-scroll.js'></script> */}
    </>
  );
}
