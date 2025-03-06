import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { logo, menu, close } from "../assets";
import { useState } from "react";
import { Footer } from "../components";

const linkStyle: string =
  "[&.active]:font-bold [&.active]:text-white hover:text-white text-gray-300 md:text-[16px] sm:text-[14px] ";

export const Route = createRootRoute({
  component: () => {
    const [toggle, setToggle] = useState(false);

    return (
      <>
        <div className="w-full fixed top-0 z-20 bg-primary px-4">
          <div className="max-w-7xl mx-auto justify-between items-center flex">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 object-contain"
              />
              <p className="text-secondary  font-bold cursor-pointer lg:hidden">&gt; OGP</p>
              <p className="text-secondary font-bold cursor-pointer hidden lg:block">&gt; Open-Genome Project</p>
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-4">
              <li>
                <Link
                  to="/"
                  className={linkStyle}
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
                  className={linkStyle}
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
                  className={linkStyle}
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
                  className={linkStyle}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className={linkStyle}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={linkStyle}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${!toggle ? "hidden" : "flex"} p-4 bg-gradient-to-r from-[#427799]/50 to-black absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                <ul className="w-full list-none flex justify-end items-center flex-col gap-2">
                  <li>
                    <Link
                      to="/"
                      className={`${linkStyle} text-sm`}
                      onClick={() => {
                        setToggle(!toggle);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/database"
                      className={`${linkStyle} text-sm`}
                      onClick={() => {
                        setToggle(!toggle);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Database
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/toolkit"
                      className={`${linkStyle} text-sm`}
                      onClick={() => {
                        setToggle(!toggle);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Toolkit
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contribute"
                      className={`${linkStyle} text-sm`}
                      onClick={() => {
                        setToggle(!toggle);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Contribute
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/learn"
                      className={linkStyle}
                      onClick={() => {
                        setToggle(!toggle);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className={linkStyle}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-[60px]">
          <Outlet />
        </div>

        <Footer />

        {/* <TanStackRouterDevtools /> */}
      </>
    );
  },
});
