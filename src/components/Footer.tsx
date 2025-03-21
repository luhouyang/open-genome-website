import { Link } from "@tanstack/react-router";

import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="relative bg-primary w-full py-8 px-4 mt-16 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link
              to="/"
              className="items-center gap-2 mb-4"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="Open-Genome Project Logo"
                className="w-10 h-10 object-contain"
              />
              <p className="text-secondary font-bold">Open-Genome Project</p>
            </Link>
            <p className="grey-1 text-sm">
              The Open-Genome Project aims to democratize AI genome research through open source, collaborative tools, and
              accessible education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-secondary font-bold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white text-sm"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/database"
                  className="text-gray-300 hover:text-white text-sm"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Database
                </Link>
              </li>
              <li>
                <Link
                  to="/toolkit"
                  className="text-gray-300 hover:text-white text-sm"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Toolkit
                </Link>
              </li>
              <li>
                <Link
                  to="/contribute"
                  className="text-gray-300 hover:text-white text-sm"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="text-gray-300 hover:text-white text-sm"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white text-sm"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-secondary font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://opengenome.readthedocs.io/en/latest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Documentation & API
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@user-qu7sp3wn4n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/luhouyang/open-genome-project.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/luhouyang/open-genome-project.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h3 className="text-secondary font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:luhouyang@open-genome-project.org"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  luhouyang@open-genome-project.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <a
                  href="https://github.com/luhouyang/open-genome-project.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Community Discord
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-300 text-sm">Mon-Fri: 9am-5pm EST</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/luhouyang/open-genome-project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://github.com/luhouyang/open-genome-project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-400/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-gray-300 text-sm">© 2025 Open-Genome Project.</p>
              <p className="text-gray-300 text-sm">All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/luhouyang/open-genome-project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="https://github.com/luhouyang/open-genome-project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm"
              >
                Terms of Service
              </a>
              <a
                href="https://github.com/luhouyang/open-genome-project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
