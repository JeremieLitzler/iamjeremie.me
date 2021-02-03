import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='header'>
        <nav className='nav' role='navigation' aria-label='main navigation'>
          <Link href='/about'>
            <a className='nav-link'>Who am I</a>
          </Link>
          <Link href='/'>
            <a className='nav-link'>Articles</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
