import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper"></div>
      <div className="footer__social">
        <Link to="/" className="footer__social-link">
          <FaFacebookF />
        </Link>
        <Link to="/" className="footer__social-link">
          <FaTwitter />
        </Link>
        <Link className="footer__social-link" to="/">
          <FaYoutube />
        </Link>
        <Link className="footer__social-link" to="/">
          <FaLinkedinIn />
        </Link>
        <Link className="footer__social-link" to="/">
          <FaPinterestP />
        </Link>
        <Link className="footer__social-link" to="/">
          <FaInstagram />
        </Link>
      </div>
      <div className="footer__about">
        <div className="footer__about-wrapper">
          <div className="footer__about-company">
            <div className="footer__about-about">
              <div className="heading">About</div>
              <div className="links">
                <div className="link">About Us</div>
                <div className="link">Our Products</div>
                <div className="link">Careers</div>
              </div>
            </div>
            <div className="footer__about-learn">
              <div className="heading">Learn More</div>
              <div className="links">
                <div className="link">Privacy Policy</div>
                <div className="link">Terms and Conditions</div>
              </div>
            </div>
          </div>
          <div className="footer__about-newsletter">
            <div className="heading">Newsletter</div>
            <div className="email-holder">
              <input type="search" name="email" id="email-holder" placeholder="Enter your email" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__hassuu">
        <div className="intro">
          <span className="created">Created By</span>
          <a href="https://hasnatsajid.com" target="new" className="hassuu">
            <span>Hassuu</span>
            <FiExternalLink />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
