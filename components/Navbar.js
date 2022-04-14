import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
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
    <nav className="hidden lg:block">
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
        <div className="flex items-center gap-[10px]">
          <Item path="/" name="home" />
          <Item path="/contact" name="contact" />
          <Item path="/gallery" name="Gallery" />
          <Item path="/siskon" name="sitem kontrol" />
          <Item path="/ski" name="sitem kontrol industri" />
        </div>
      </div>
    </nav>
  );
}
