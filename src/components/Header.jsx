import { Link } from "react-router-dom";

export default function Header({ cart }) {
  const cartCount = cart?.total || 0;

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          MYSHOP
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">HOME</Link>
          <Link to="/about" className="header-nav-link">ABOUT</Link>
          <Link to="/favorites" className="header-nav-link">FAVORITES</Link>
        </nav>
        <Link to="/cart" className="header-cart-btn" aria-label="カート">
          <svg className="header-cart-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          {cartCount > 0 && <span className="header-cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}
