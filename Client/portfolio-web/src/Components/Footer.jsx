import React from 'react';

const Footer = () => {
 
    return (
        <div>
            <footer className="footer footer-center bg-gray-600 p-4 text-gray-300">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;