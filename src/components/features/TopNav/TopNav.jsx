import "./TopNav.css";
import { Link } from 'react-router-dom';

export default function TopNav() {
    return (
        <nav className='top-nav' id='top-nav'>
            <Link to='/' className='logo-home-link'><img src="/img/logo/logo64.png" alt='robin potze logo' className='logo-header' id='rp-logo' /></Link>
            <div className='nav-links' id='nav-links'>
                <Link to='/work' className='nav-link' id='nav-link-work'>WORK</Link>
                <p className='nav-link-divider tech-small' id='nav-link-separator'>///</p>
                <Link to='/info' className='nav-link' id='nav-link-about'>INFO</Link>
                <p className='nav-link-divider tech-small' id='nav-link-separator'>///</p>
                <Link to='/contact' className='nav-link' id='nav-link-contact'>CNTCT</Link>
            </div>
        </nav>
    );
}