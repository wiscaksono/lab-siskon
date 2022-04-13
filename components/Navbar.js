import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Example from "./Dropdown";

export default function Navbar() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  // function checkPath(path) {
  //   var str = path;
  //   var rest = str.substring(0, str.lastIndexOf("/"));
  //   var last = str.substring(str.lastIndexOf("/") + 1, str.length);
  //   console.log(rest);
  //   console.log(last);
  // }

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

  // console.log(router.pathname);
  // /praktikum/siskon
  // ['/', 'praktikum', '/', 'siskon']
  // praktikum ==
  // console.log(router.asPath);
  // console.log(router.basePath);

  return (
    <nav className="border border-b-black-200">
      <div className="wrapper flex justify-between items-center py-[23px]">
        <Link href="/" passHref>
          <div className="w-[80px]">
            <img
              src="logo.svg"
              alt=""
              className="cursor-pointer w-full h-full"
            />
          </div>
        </Link>
        <div className="flex items-center gap-[32px]">
          <Item path="/" name="home" />
          <Item path="/contact" name="contact" />
          <Item path="/gallery" name="Gallery" />
          <div className="relative">
            <div className=" text1 capitalize py-[3px] px-[23px] bg-red rounded-full transition-colors text-white">
              <button onClick={() => setOpen(!open)}>Praktikum</button>
            </div>
            {open && (
              <div className="absolute top-10 bg-red-500 z-20 w-[200px] rtl text-right right-0 bg-white border border-black-200 rounded-[25px]">
                <p>Sistem Kontrol</p>
                <p>Sistem Kontrol Industri</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
