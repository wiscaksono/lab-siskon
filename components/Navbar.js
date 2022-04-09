import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="border border-b-black-200">
      <div className="wrapper flex justify-between items-center py-[23px]">
        <Link href="/">
          <img src="logo.png" alt="" className="cursor-pointer" />
        </Link>
        <div className="flex items-center gap-[32px]">
          <Link href="/">
            <a
              className={
                router.pathname == "/"
                  ? "active: text1 py-[3px] px-[23px] bg-red rounded-full transition-colors text-white"
                  : "text1 py-[3px] px-[23px] bg-none rounded-full transition-colors text-black-500"
              }
            >
              Home
            </a>
          </Link>
          <Link href="Contact">
            <a
              className={
                router.pathname == "/Contact"
                  ? "active: text1 py-[3px] px-[23px] bg-red rounded-full transition-colors text-white"
                  : "text1 py-[3px] px-[23px] bg-none rounded-full transition-colors text-black-500"
              }
            >
              Contact
            </a>
          </Link>
          <Link href="Gallery">
            <a
              className={
                router.pathname == ("/Gallery" || "/Alat")
                  ? "active: text1 py-[3px] px-[23px] bg-red rounded-full transition-colors text-white"
                  : "text1 py-[3px] px-[23px] bg-none rounded-full transition-colors text-black-500"
              }
            >
              Gallery
            </a>
          </Link>
          <Link href="//#praktikum">
            <a
              className={
                router.pathname == ("/Siskon" || "Ski")
                  ? "active: text1 py-[3px] px-[23px] bg-red rounded-full transition-colors text-white"
                  : "text1 py-[3px] px-[23px] bg-none rounded-full transition-colors text-black-500"
              }
            >
              Praktikum
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
