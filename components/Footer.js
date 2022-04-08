import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-black-800">
      <footer className="bg-footer bg-no-repeat">
        <div className="wrapper pt-[78px] pb-[95px] flex justify-between items-center">
          <div className="w-[454px] flex flex-col justify-between gap-[122px]">
            <div className=" flex flex-col gap-[17px]">
              <div className="flex gap-[18px] items-center">
                <div>
                  <img src="instagram.svg" alt="" />
                </div>
                <Link href="https://www.facebook.com">
                  <a className="text1 text-white">labsiskon_fket.itpln</a>
                </Link>
              </div>

              <div className="flex items-start gap-[18px]">
                <div className="w-[16.34px] h-[19.04px]">
                  <img src="location.svg" alt="" className="w-full h-full" />
                </div>
                <p className="text1 text-white flex-1">
                  Menara PLN, Jl. Lkr. Luar Barat, RT.01/RW.03, Duri Kosambi,
                  Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus
                  Ibukota Jakarta 11750
                </p>
              </div>
            </div>

            <p className="text1 text-black-300">
              © 2022 Laboratorium Sistem Kontrol - Institut Teknologi PLN
            </p>
          </div>

          <div className="w-[550px] h-[251px] bg-black-200"></div>
        </div>
      </footer>
    </div>
  );
}
