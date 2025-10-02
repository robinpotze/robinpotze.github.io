import "./TopNav.css";

export default function TopNav() {
    return (
        <nav className='top-nav' id='top-nav'>
            <a href='/' className='logo-home-link'><img src="/img/logo/logo64.png" alt='robin potze logo' className='logo-header' id='rp-logo' /></a>
            <div className='nav-links' id='nav-links'>
                <a href='/work' className='nav-link' id='nav-link-work'>WORK</a>
                <p className='nav-link-divider tech-small' id='nav-link-separator'>///</p>
                <a href='/info' className='nav-link' id='nav-link-about'>INFO</a>
                <p className='nav-link-divider tech-small' id='nav-link-separator'>///</p>
                <a href='/contact' className='nav-link' id='nav-link-contact'>CNTCT</a>
            </div>
        </nav>
    );
}