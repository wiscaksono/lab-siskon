import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="mt-[122px] mb-[212px]">
        <div className="wrapper flex gap-[97px] items-center justify-between">
          <div>
            <h3 className="text-red mb-[40px]">Selamat Datang</h3>
            <p className="text1 text-black-400 mb-[20px]">
              Halo Praktikan! Selamat datang di situs web Laboratorium Sistem
              Kontrol Institut Teknologi-Perusahaan Listrik Negara (IT-PLN).
              Situs web ini didedikasikan untuk memudahkan praktikan-praktikan
              dalam mempersiapkan materi, bahan ajar, dan prosedur dalam
              melakukan praktikum.
            </p>
            <p className="text1 text-black-400">
              Laboratorium ini mengembangkan bidang keilmuan sistem kontrol,
              dimana secara reguler melayani praktikum mahasiswa untuk program
              studi Teknik Elektro (S1), dan Teknik Elektro (D3).
            </p>
          </div>
          <div className="w-[483px] h-[469px] flex-none">
            <img src="hero-image.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="mb-[162px]" id="praktikum">
        <div className="wrapper">
          <h3 className="text-red text-center mb-[40px]">Pilih Praktikum</h3>
          <div className="flex justify-between">
            <Link href="Siskon">
              <button className="bg-ski-btn px-[144px] py-[26px] rounded-[20px] hover:shadow-red hover:shadow-2xl transition-colors">
                <p className="subhead1 w-[262px] text-white">
                  Sistem Kontrol Industri
                </p>
              </button>
            </Link>
            <div className="">
              <div className="bg-siskon-btn rounded-[20px]">
                <Link href="Ski">
                  <button className="px-[144px] py-[53px]">
                    <p className="subhead1 w-[262px] text-white">
                      Sistem Kontrol
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
