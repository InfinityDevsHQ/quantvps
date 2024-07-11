import Image from "next/image"
import React from "react"

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-center py-2">
        <p className="text-sm font-medium">
          Deploy a NinjaTrader VPS Today and Get 50% OFF First Month!{" "}
          <span>Code: Quant50</span>
        </p>
      </div>
      <nav className="bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-black rounded-xl shadow-md">
                <Image
                  src="/header/header-logo.svg"
                  alt="Trading Servers"
                  className="h-7 w-7"
                  width={24}
                  height={24}
                />
              </span>
              <div className="flex flex-col">
                <span className="text-gray-800 text-sm font-bold">
                  Trading Servers
                </span>
                <span className="text-gray-500 font-semibold text-xs">
                  By QuantVPS.com
                </span>
              </div>
              <div className="flex items-center ml-5 gap-3 text-sm">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium p-1"
                >
                  Brokers
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium p-1"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium p-1"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium p-1"
                >
                  Examples
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium p-1"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:scale-105"
                >
                  <Image
                    src="/header/header-github.svg"
                    alt="footerlogo"
                    width={16}
                    height={16}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:scale-105"
                >
                  <Image
                    src="/header/header-x.svg"
                    alt="footerlogo"
                    width={16}
                    height={16}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium p-1"
                >
                  login
                </a>
                <div className="flex items-center gap-2 border border-gray-300 rounded-md py-1 px-2 ">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 hover:font-medium p-1"
                  >
                    start trading
                  </a>
                  <button className="bg-black text-white px-4 py-0.5 rounded-lg hover:bg-gray-800 inline-flex items-center gap-1">
                    <Image
                      src="/header/header-logo.svg"
                      alt="Trading Servers"
                      className="h-5 w-5"
                      width={12}
                      height={12}
                    />
                    deploy server
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
