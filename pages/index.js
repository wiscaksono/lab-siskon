import Link from "next/link";

import Wrapper from "../components/Wrapper";

export default function Index() {
  return (
    <Wrapper>
      <section className="mt-[122px] mb-[50px] lg:mb-[212px]">
        <div className="wrapper flex gap-[20px] lg:gap-[97px] items-center justify-between flex-col lg:flex-row  ">
          <div className="text-center lg:text-left">
            <h3 className="text-red mb-[40px] hidden lg:block">
              Selamat Datang
            </h3>
            <h4 className="block lg:hidden px-[92px] text-red font-semibold mb-[25px]">
              Selamat Datang
            </h4>
            <p className="text1 text-black-400 mb-[20px] px-[20px] lg:py-0 lg:px-0">
              <span className="pl-6">Halo</span> Halo Praktikan! Selamat datang
              di situs web Laboratorium Sistem Kontrol Institut
              Teknologi-Perusahaan Listrik Negara (IT-PLN). Situs web ini
              didedikasikan untuk memudahkan praktikan-praktikan dalam
              mempersiapkan materi, bahan ajar, dan prosedur dalam melakukan
              praktikum.
            </p>
            <p className="text1 text-black-400 px-[20px] lg:py-0 lg:px-0">
              <span className="pl-6">Laboratorium</span> ini mengembangkan
              bidang keilmuan sistem kontrol, dimana secara reguler melayani
              praktikum mahasiswa untuk program studi Teknik Elektro (S1), dan
              Teknik Elektro (D3).
            </p>
          </div>
          <div className="lg:w-[483px] lg:h-[469px] flex-none">
            <img src="hero-image.svg" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="mb-[162px]" id="praktikum">
        <div className="wrapper">
          <h3 className="text-red text-center mb-[40px] hidden lg:block">
            Pilih Praktikum
          </h3>
          <h4 className="block lg:hidden px-[92px] text-red font-semibold mb-[25px] text-center">
            Pilih Praktikum
          </h4>
          <div className="flex justify-between flex-col lg:flex-row gap-[37px] lg:gap-[40px]">
            <Link href="/ski">
              <button className="lg:subhead1 lg:py-[26px] lg:px-[144px] text-white bg-ski-btn bg-no-repeat bg-cover rounded-[20px] shadow-xl py-[19px] px-[85px] subhead4 mx-[20px] lg:mx-0">
                <p className="lg:mb-3.5 mb-0">Sistem Kontrol</p>
                <p>Industri</p>
              </button>
            </Link>
            <Link href="/ski">
              <button className="lg:subhead1 lg:py-[26px] lg:px-[144px] text-white bg-siskon-btn bg-no-repeat bg-cover rounded-[20px] shadow-xl py-[32px] px-[85px] subhead4 mx-[20px] lg:mx-0">
                <p>Sistem Kontrol</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
