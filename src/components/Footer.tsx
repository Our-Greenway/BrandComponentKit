const Footer = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      <footer>
      <div  className="space-y-2 pt-5 lg:pr-100 md:pr-50 pr-0">
        <div className="w-full h-px bg-gray-400"></div>
        
        <p className="text-gray-500 pt-3" style={{ color: '#898989' }}>
          Website, brand, and components by <a href="https://www.linkedin.com/in/dereksong/">Derek Song</a>
        </p>
        <div className="flex gap-4">
          <a href="https://www.ourgreenway.ca/" className="transition-transform duration-200 hover:scale-110">
            <img src="FooterLogo.svg" className="w-8 h-8" />
          </a>
          <a href="mailto:info@ourgreenway.ca" className="transition-transform duration-200 hover:scale-110 text-3xl" style={{ color: '#898989' }} >
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href="https://github.com/Our-Greenway" className="transition-transform duration-200 hover:scale-110 text-3xl" style={{ color: '#898989' }} >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/ourgreenway" className="transition-transform duration-200 hover:scale-110 text-3xl" style={{ color: '#898989' }} >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/ourgreenway.ca/" className="transition-transform duration-200 hover:scale-110 text-3xl" style={{ color: '#898989' }} >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/ourgreenway/" className="transition-transform duration-200 hover:scale-110 text-3xl" style={{ color: '#898989' }} >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;