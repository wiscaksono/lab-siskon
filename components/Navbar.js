import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const Item = ({ path, name }) => (
    <Link href={path}>
      <a
        className={
          router.pathname == path
            ? "text1 capitalize py-[3px] px-[23px] bg-red rounded-full transition-colors text-white"
            : "text1 py-[3px] capitalize px-[23px] bg-none rounded-full transition-colors text-black-500"
        }
      >
        {name}
      </a>
    </Link>
  );

  console.log(router.pathname);
  console.log(router.asPath);

  return (
    <nav className="border border-b-black-200">
      <div className="wrapper flex justify-between items-center py-[23px]">
        <Link href="/" passHref>
          <img src="logo.png" alt="" className="cursor-pointer" />
        </Link>
        <div className="flex items-center gap-[32px]">
          <Item path="/" name="home" />
          <Item path="/contact" name="contact" />
          <Item path="/praktikum" name="praktikum" />
        </div>
      </div>
    </nav>
  );
}
