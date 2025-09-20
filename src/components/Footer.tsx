import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              CryptoTrader Pro
            </h3>
            <p className="text-gray-600 text-sm">
              AI-powered crypto portfolio management platform designed for both
              beginners and professional traders.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Community
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-500">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
