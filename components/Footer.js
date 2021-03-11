import Link from 'next/link';

const labels = {
  facebookLinkText: 'Visit my Facebook page',
  twitterLinkText: 'Follow me on Twitter',
  linkedInLinkText: 'Review my LinkedIn profile',
  mediumLinkText: 'Support me on Medium',
};

export default function Footer() {
  return (
    <>
      <footer className='layout'>
        <section>
          <div className='social-links'>
            <a
              className='social-link'
              href='https://facebook.com/MadeByJeremie'
              rel='noopener noreferrer'
              target='_blank'
              title={labels.facebookLinkText}
              aria-label={labels.facebookLinkText}
            >
              {labels.facebookLinkText}
            </a>
            <a
              className='social-link'
              href='https://twitter.com/puzzlout'
              rel='noopener noreferrer'
              title={labels.twitterLinkText}
              aria-label={labels.twitterLinkText}
            >
              {labels.twitterLinkText}
            </a>
            <a
              className='social-link'
              href='https://jeremie-litzler.medium.com/'
              rel='noopener noreferrer'
              title={labels.mediumLinkText}
              aria-label={labels.mediumLinkText}
            >
              {labels.mediumLinkText}
            </a>
            <a
              className='social-link'
              href='https://www.linkedin.com/in/jeremielitzler'
              rel='noopener noreferrer'
              title={labels.linkedInLinkText}
              aria-label={labels.linkedInLinkText}
            >
              {labels.linkedInLinkText}
            </a>
          </div>
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
    </>
  );
}
