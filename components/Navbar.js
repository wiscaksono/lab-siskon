import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  const router = useRouter();
  const Item = ({ path, name }) => (
    <Link href={path}>
      <a
        className={
          router.pathname == path
            ? // checkPath(router.pathname) == path
              "text1 text-white my-[7px] rounded-full bg-red py-[5px] px-[15px] capitalize transition-colors"
            : "text1 my-[7px] rounded-full bg-none py-[3px] px-[23px] capitalize text-black-500 transition-colors"
        }
        onClick={() =>
          setTimeout(() => {
            setOpen(!open);
          }, 100)
        }
      >
        {name}
      </a>
    </Link>
  );
  return (
    <div
      className={`bg-white absolute top-0 left-0 h-screen w-screen transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } drop-shadow-md filter transition-transform duration-300 ease-in-out `}
    >
      <div className="bg-white flex h-20 items-center justify-between drop-shadow-md filter">
        <Link href="/" className="w-[20px]">
          <p className="text1 ml-6 font-bold">
            Laboratorium Sistem <span className="text-red">Kontrol</span>
          </p>
        </Link>
      </div>
      <div className="mx-4 flex flex-col ">
        <Item path="/" name="home" />
        <Item path="/contact" name="contact" />
        <Item path="/gallery" name="Gallery" />
        <Item path="/siskon" name="sitem kontrol" />
        <Item path="/ski" name="sitem kontrol industri" />
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const Item = ({ path, name }) => (
    <Link href={path}>
      <a
        className={
          router.pathname == path
            ? // checkPath(router.pathname) == path
              "text1 text-white rounded-full bg-red py-[3px] px-[23px] capitalize transition-colors"
            : "text1 rounded-full bg-none py-[3px] px-[23px] capitalize text-black-500 transition-colors"
        }
      >
        {name}
      </a>
    </Link>
  );

  return (
    <div className="border-b border-black-200">
      <nav className="bg-white wrapper  flex h-20 items-center px-4 py-4 filter">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="flex w-3/12 items-center">
          <Link href="/" className="w-[80px]">
            <img src="logo.svg" alt="" className="w-[80px]" />
          </Link>
        </div>
        <div className="flex w-9/12 items-center justify-end">
          <div
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full transform rounded-lg bg-black-400 transition duration-300 ease-in-out ${
                open ? "translate-y-3.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-1 w-full rounded-lg bg-black-400 transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full transform rounded-lg bg-black-400 transition duration-300 ease-in-out ${
                open ? "-translate-y-3.5 -rotate-45" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex">
            <Item path="/" name="home" />
            <Item path="/contact" name="contact" />
            <Item path="/gallery" name="Gallery" />
            {/* <Item path="/siskon" name="sitem kontrol" />
            <Item path="/ski" name="sitem kontrol industri" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
