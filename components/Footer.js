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
              <div className="flex items-center gap-[18px]">
                <div className="w-[19.04px] h-[19.04px]">
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

          <div className="w-[550px] h-[270px] ">
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
