const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>{`© ${year} Radi Rusadi. All Rights Reserved`}</div>
      </div>
    </footer>
  );
};

export default Footer;
