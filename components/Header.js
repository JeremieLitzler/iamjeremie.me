import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='header layout'>
        <nav className='nav' role='navigation' aria-label='main navigation'>
          <Link href='/about'>
            <a className='nav-link'>My story</a>
          </Link>
          <Link href='/'>
            <a className='nav-link'>My articles</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
