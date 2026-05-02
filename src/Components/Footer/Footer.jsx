import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  const handleSocialClick = (platform) => {
    console.log(`Opening ${platform}`);
    // Add actual links here
    // window.open(`https://${platform}.com/shopper`, '_blank');
  };

  const handleLinkClick = (link) => {
    console.log(`Navigating to ${link}`);
    // Add navigation logic here
  };

  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Shopper Logo"/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li onClick={() => handleLinkClick('company')}>Company</li>
            <li onClick={() => handleLinkClick('products')}>Products</li>
            <li onClick={() => handleLinkClick('offices')}>Offices</li>
            <li onClick={() => handleLinkClick('about')}>About</li>
            <li onClick={() => handleLinkClick('contact')}>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container" onClick={() => handleSocialClick('instagram')}>
                <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className="footer-icons-container" onClick={() => handleSocialClick('pinterest')}>
                <img src={pintester_icon} alt="Pinterest" />
            </div>
            <div className="footer-icons-container" onClick={() => handleSocialClick('whatsapp')}>
                <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2026 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer