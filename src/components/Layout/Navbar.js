import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  console.log("fff", session);

  return (
    <div className="bg-slate-200 sticky top-0">
      <div className="max-w-7xl mx-auto text-green-800">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-link lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Category</a>
                  <ul className="p-2">
                    <li>
                      <a className="font-semibold">Processor</a>
                    </li>
                    <li>
                      <a className="font-semibold">Motherboard</a>
                    </li>
                    <li>
                      <a className="font-semibold">Monitor</a>
                    </li>
                    <li>
                      <a className="font-semibold">RAM</a>
                    </li>
                    <li>
                      <a className="font-semibold">Power Supply</a>
                    </li>
                    <li>
                      <a className="font-semibold">Others</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                {/* <li>
                    <a>Item 2</a>
                  </li> */}
              </ul>
            </div>

            <Link
              className="font-semibold normal-case FONT text-2xl"
              href={`/`}
            >
              NEXT TECH
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <details>
                  <summary className="font-semibold uppercase">
                    Category
                  </summary>
                  <ul className="p-2 w-60 rounded-md">
                    <li>
                      <a className="font-semibold">
                        <Link href={"/category/processor"}>Processor</Link>
                      </a>
                    </li>
                    <li>
                      <a className="font-semibold">
                        {" "}
                        <Link href={"/category/monitor"}>Monitor</Link>
                      </a>
                    </li>
                    <li>
                      <a className="font-semibold">
                        {" "}
                        <Link href={"/category/motherboard"}>Motherboard</Link>
                      </a>
                    </li>
                    <li>
                      <a className="font-semibold">
                        {" "}
                        <Link href={"/category/ram"}>RAM</Link>
                      </a>
                    </li>
                    <li>
                      <a className="font-semibold">
                        {" "}
                        <Link href={"/category/powerSupply"}>powerSupply</Link>
                      </a>
                    </li>
                    <li>
                      <a className="font-semibold">
                        {" "}
                        <Link href={"/category/others"}>Others</Link>
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              {/* <li className="uppercase font-semibold">
                  <a>Item 1</a>
                </li> */}
            </ul>
            <Link href={`/pcBuilder`}>
              {" "}
              <button className="btn text-white bg-gradient-to-r from-teal-500 to-purple-700">
                {" "}
                PC Builder
              </button>
            </Link>
          </div>
          <div className="navbar-end">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="btn btn-sm mr-2 rounded-md bg-purple-200 text-green-800 border-none hover:bg-purple-300"
              >
                Log Out
              </button>
            ) : (
              <Link
                href={"/login"}
                className="btn btn-sm mr-2 rounded-md bg-purple-200 text-green-800 border-none hover:bg-purple-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
