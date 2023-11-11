const Footer = () => {
  return (
    <footer className="h-24 transition duration-300 bg-light dark:bg-dark w-full">
      <div className="h-full container mx-auto flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
