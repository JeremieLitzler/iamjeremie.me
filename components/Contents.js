import loadable from '@loadable/component';
const NewsletterSignup = loadable(() => import('./NewsletterSignup'));

export default function Contents({ children }) {
  return (
    <>
      <main role='main' className='content layout'>
        {children}
        <NewsletterSignup />
      </main>
    </>
  );
}
