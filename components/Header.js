import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='header'>
        <nav className='nav' role='navigation' aria-label='main navigation'>
          <Link href='/about'>
            <a>Who am I</a>
          </Link>
          <Link href='/'>
            <a>Articles</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
