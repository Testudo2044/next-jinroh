import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a className="m-5">Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Header
