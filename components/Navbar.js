import Link from "next/link";
import { useRouter } from "next/router";

// export default function Navbar() {

//   return (
//     <nav className="hidden lg:block lg:border lg:border-b-black-200">
//       <div className="wrapper flex justify-between items-center py-[23px]">
//         <Link href="/" passHref>
//           <div className="w-[80px]">
//             <img
//               src="logo.svg"
//               alt=""
//               className="cursor-pointer w-full h-full"
//             />
//           </div>
//         </Link>
//         <div className="flex items-center gap-[10px]">
//           <Item path="/" name="home" />
//         </div>
//       </div>
//     </nav>
//   );
// }
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
              "text1 capitalize py-[5px] px-[15px] my-[7px] bg-red rounded-full transition-colors text-white"
            : "text1 py-[3px] capitalize px-[23px] my-[7px] bg-none rounded-full transition-colors text-black-500"
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
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        <Link href="/" className="w-[80px]">
          <img src="logo.svg" alt="" className="w-full h-full" />
        </Link>
      </div>
      <div className="flex flex-col mx-4 ">
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
              "text1 capitalize py-[3px] px-[23px] bg-red rounded-full transition-colors text-white"
            : "text1 py-[3px] capitalize px-[23px] bg-none rounded-full transition-colors text-black-500"
        }
      >
        {name}
      </a>
    </Link>
  );

  return (
    <div className="border-b border-black-200">
      <nav className="flex filter  bg-white px-4 py-4 h-20 items-center wrapper">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-3/12 flex items-center">
          <Link href="/" className="w-[80px]">
            <img src="logo.svg" alt="" className="w-full h-full" />
          </Link>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black-400 rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black-400 rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black-400 rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex">
            <Item path="/" name="home" />
            <Item path="/contact" name="contact" />
            <Item path="/gallery" name="Gallery" />
            <Item path="/siskon" name="sitem kontrol" />
            <Item path="/ski" name="sitem kontrol industri" />
          </div>
        </div>
      </nav>
    </div>
  );
}
