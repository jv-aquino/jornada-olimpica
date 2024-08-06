import './Navbar.css'
import MainNav from './MainNav/MainNav';
import Link from 'next/link';

function Navbar() {
  return ( 
    <nav className="Navbar">
      <Link href='/'><h1>Logo</h1></Link>

      <MainNav />
    </nav>
   );
}

export default Navbar;