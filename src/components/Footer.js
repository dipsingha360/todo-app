const Footer = () => {
  return (
    <footer className="footer bg-gray-900 container mx-auto text-center p-10 text-sm text-teal-600 rounded-br-lg rounded-bl-lg border-t border-dashed border-teal-900">
      <p>&copy; {new Date().getUTCFullYear()} Todo app. All rights reserved</p>
    </footer>
  );
};

export default Footer;
