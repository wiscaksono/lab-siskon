import Link from "next/link";

import Wrapper from "../components/Wrapper";

export default function Index() {
  return (
    <Wrapper>
      <section className="mt-[122px] mb-[50px] lg:mb-[212px]">
        <div className="wrapper flex flex-col items-center justify-between gap-[20px] lg:flex-row lg:gap-[97px]  ">
          <div className="text-center lg:text-left">
            <h3 className="mb-[40px] hidden text-red lg:block">
              Selamat Datang
            </h3>
            <h4 className="mb-[25px] block px-[92px] font-semibold text-red lg:hidden">
              Selamat Datang
            </h4>
            <p className="text1 mb-[20px] px-[20px] text-black-400 lg:py-0 lg:px-0">
              <span className="pl-6">Halo</span> Halo Praktikan! Selamat datang
              di situs web Laboratorium Sistem Kontrol Institut
              Teknologi-Perusahaan Listrik Negara (IT-PLN). Situs web ini
              didedikasikan untuk memudahkan praktikan-praktikan dalam
              mempersiapkan materi, bahan ajar, dan prosedur dalam melakukan
              praktikum.
            </p>
            <p className="text1 px-[20px] text-black-400 lg:py-0 lg:px-0">
              <span className="pl-6">Laboratorium</span> ini mengembangkan
              bidang keilmuan sistem kontrol, dimana secara reguler melayani
              praktikum mahasiswa untuk program studi Teknik Elektro (S1), dan
              Teknik Elektro (D3).
            </p>
          </div>
          <div className="flex-none lg:h-[469px] lg:w-[483px]">
            <img src="hero-image.svg" alt="" className="h-full w-full" />
          </div>
        </div>
      </section>
      <section className="mb-[162px]" id="praktikum">
        <div className="wrapper">
          <h3 className="mb-[40px] hidden text-center text-red lg:block">
            Pilih Praktikum
          </h3>
          <h4 className="mb-[25px] block px-[92px] text-center font-semibold text-red lg:hidden">
            Pilih Praktikum
          </h4>
          <div className="flex flex-col justify-between gap-[37px] lg:flex-row lg:gap-[40px]">
            <Link href="/ski">
              <button className="lg:subhead1 text-white subhead4 mx-[20px] rounded-[20px] bg-ski-btn bg-cover bg-no-repeat py-[19px] px-[85px] hover:shadow-xl transition-shadow lg:mx-0 lg:py-[26px] lg:px-[144px]">
                <p className="mb-0 lg:mb-3.5">Sistem Kontrol</p>
                <p>Industri</p>
              </button>
            </Link>
            <Link href="/ski">
              <button className="lg:subhead1 text-white subhead4 mx-[20px] rounded-[20px] bg-siskon-btn bg-cover bg-no-repeat py-[32px] px-[85px] hover:shadow-xl transition-shadow lg:mx-0 lg:py-[26px] lg:px-[144px]">
                <p>Sistem Kontrol</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
