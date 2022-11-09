import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../images/logos/logo-flat.png';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <nav>
        {!menuActive && <HiMenuAlt4 className="menu-icon" onClick={() => setMenuActive(true)} />}
        {menuActive && <HiX className="menu-icon" onClick={() => setMenuActive(false)} />}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="My property asia | thailand" />
          </Link>
        </div>
        {menuActive && (
          <div className="menubar">
            <ul className="mobileActive">
              <li>
                <Link to="/buy">Buy</Link>
              </li>
              <li>
                <Link to="/rent">Rent</Link>
              </li>
              <li>
                <Link to="/condos">Condos</Link>
              </li>
              <li>
                <Link to="/commercial">Commercial</Link>
              </li>
              <li>
                <Link to="/agents">Find Agent</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/advertise">Advertise</Link>
              </li>
            </ul>
            <div className="auth">
              <div className="login">
                <Link to="/auth">Login</Link>
              </div>
            </div>
          </div>
        )}
        <div className="menubar hideOnMobile">
          <ul>
            <li>
              <Link to="/buy">Buy</Link>
            </li>
            <li>
              <Link to="/rent">Rent</Link>
            </li>
            <li>
              <Link to="/condos">Condos</Link>
            </li>
            <li>
              <Link to="/commercial">Commercial</Link>
            </li>
            <li>
              <Link to="/agents">Find Agent</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/advertise">Advertise</Link>
            </li>
          </ul>
          <div className="auth">
            <div className="login">
              <Link to="/auth">Login</Link>
            </div>
            <div className="signup">
              <Link to="/auth">Join</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
