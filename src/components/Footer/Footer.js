function Footer() {
  return (
    <footer className="p-4 bg-gray-500 rounded-lg flex items-center justify-between w-screen fixed bottom-0 h-14 mb-0">
      <span className="text-lg text-gray-300">World Bank</span>
      <ul className="flex text-sm text-gray-300">
        <li>
          <a href="https://github.com/dan-michell/world-bank-frontend" className="mr-6 hover:underline">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.kaggle.com/datasets/kaggle/world-development-indicators"
            className="mr-6 hover:underline"
          >
            Data
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
