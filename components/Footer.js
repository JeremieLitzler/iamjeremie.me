import Link from 'next/link';

export default function Header() {
  return (
    <>
      <footer>
        <section>
          <p className='fine-print'>
            You can look at the repository for this project{' '}
            <a
              href='https://github.com/cassidoo/next-netlify-blog-starter'
              title="Link to Cassidy's repository"
            >
              here
            </a>
            , and a tutorial on how to build it {` `}
            <a href='https://url.netlify.com/ByVW0bCF8'>here</a>.
          </p>
          <p className='fine-print'>
            This site is built with Next, and is easily deployable on{' '}
            <a
              href='https://url.netlify.com/r1j6ybSYU'
              title='Link to the template on Netlify'
            >
              Netlify
            </a>
            .
          </p>
          <p className='fine-print'>
            Built with and served by{' '}
            <a
              className='netlify-heart'
              href='http://netlify.com'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/netliheart.svg' alt='Netlify Heart' />
            </a>
          </p>
        </section>
      </footer>
    </>
  );
}
