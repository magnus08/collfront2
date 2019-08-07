import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/sensor">
      <a style={linkStyle}>Sensor</a>
    </Link>
  </div>
);

export default Header;
