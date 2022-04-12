import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Alat() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className="mt-[112px] mb-[161px]">
        <div className="wrapper">
          <h4 className="text-red mb-[20px]">Gallery</h4>
          <div className="flex">
            <div className="w-2/12">
              <div className="mb-[15px]">
                <Link href="/Gallery" passHref>
                  <button>
                    <a
                      className={
                        router.pathname == "/Gallery"
                          ? "active:text1 text-white py-[12px] px-[32px] block bg-red rounded-[5px]"
                          : "text1 text-black-400 py-[12px] px-[32px] block border border-black-400 rounded-[5px]"
                      }
                    >
                      Dokumentasi
                    </a>
                  </button>
                </Link>
              </div>
              <Link href="/Gallery/Alat" passHref>
                <button>
                  <a
                    className={
                      router.pathname == "/Alat"
                        ? "active:text1 text-white py-[12px] px-[32px] block bg-red rounded-[5px]"
                        : "text1 text-black-400 py-[12px] px-[32px] block border border-black-400 rounded-[5px]"
                    }
                  >
                    Alat
                  </a>
                </button>
              </Link>
            </div>
            <div className="w-1/12" />
            <div className="w-9/12">
              <div className="flex gap-[40px] flex-wrap">
                <div className="w-[403px] h-[327px] bg-black-500" />
                <div className="flex gap-[40px]">
                  <div className="w-[403px] h-[327px] bg-black-500" />
                </div>
                <div className="flex gap-[40px]">
                  <div className="w-[403px] h-[327px] bg-black-500" />
                </div>
                <div className="flex gap-[40px]">
                  <div className="w-[403px] h-[327px] bg-black-500" />
                </div>
                <div className="flex gap-[40px]">
                  <div className="w-[403px] h-[327px] bg-black-500" />
                </div>
                <div className="flex gap-[40px]">
                  <div className="w-[403px] h-[327px] bg-black-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
