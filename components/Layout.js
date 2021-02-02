import Head from 'next/head';

import Header from './Header';

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
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
      </Head>
      <section className='layout'>
        <Header />
        <main role='main' className='content'>
          {children}
        </main>
        <footer>
          <section>
            <p className='fine-print'>
              You can look at the repository for this project{' '}
              <a href='https://github.com/cassidoo/next-netlify-blog-starter'>
                here
              </a>
              , and a tutorial on how to build it {` `}
              <a href='https://url.netlify.com/ByVW0bCF8'>here</a>.
            </p>
            <p className='fine-print'>
              This site is built with Next, and is easily deployable on{' '}
              <a href='https://url.netlify.com/r1j6ybSYU'>Netlify</a>.
            </p>
            <p className='fine-print'>
              Built with and served by{' '}
              <img src='/netliheart.svg' alt='Netlify Heart' />
            </p>
          </section>
        </footer>
      </section>
      <script src='/static/menu-scroll.js'></script>
    </>
  );
}
