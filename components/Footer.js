import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-black-800">
      <footer className="bg-footer bg-no-repeat">
        <div className="wrapper pt-[78px] pb-[95px] flex justify-between items-center flex-col lg:flex-row">
          <div className="lg:w-[454px] flex flex-col justify-between lg:gap-[122px] gap-[27px]">
            <div className=" flex flex-col gap-[17px]">
              <div className="flex gap-[18px] items-center flex-col lg:flex-row">
                <div>
                  <img src="instagram.svg" alt="" />
                </div>
                <Link href="https://www.facebook.com">
                  <a className="lg:text1 text2 text-white">
                    labsiskon_fket.itpln
                  </a>
                </Link>
              </div>
              <div className="flex items-center gap-[18px] flex-col lg:flex-row">
                <div className="w-[19.04px] h-[19.04px]">
                  <img src="location.svg" alt="" className="w-full h-full" />
                </div>
                <p className="lg:text1 text2 text-white flex-1 text-center lg:text-left">
                  Menara PLN, Jl. Lkr. Luar Barat, RT.01/RW.03, Duri Kosambi,
                  Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus
                  Ibukota Jakarta 11750
                </p>
              </div>
            </div>

            <p className="text2 text-black-300 lg:text-1 text-center lg:text-left px-[77px] lg:px-0">
              © 2022 Laboratorium Sistem Kontrol - Institut Teknologi PLN
            </p>
          </div>

          <div className="w-[550px] h-[270px] hidden lg:block">
            <iframe
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?q=ITPLN&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              className="w-full h-full rounded-[24px]"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
