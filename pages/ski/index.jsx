import Link from "next/link";
import { useState } from "react";

import Wrapper from "../../components/Wrapper";
import TugasRumah from "./tugas-rumah";
import Modul from "./modul";
import Software from "./software";
import JadwalPraktikum from "./jadwal-praktikum";

export default function Index() {
  // state
  const [active, activeState] = useState("modul");
  // function render
  function render(value) {
    switch (value) {
      case "tugas rumah":
        return <TugasRumah />;
      case "modul":
        return <Modul />;
      case "software":
        return <Software />;
      case "jadwal praktikum":
        return <JadwalPraktikum />;
      default:
        return "Halaman Tidak Ditemukan";
    }
  }

  // ubah component menjadi menggunakan state
  const SideBtn = ({ name }) => (
    <button
      className={
        name === active
          ? "text1 text-white capitalize py-[12px] px-[32px] block bg-red rounded-[5px] border border-none"
          : "text1 text-black-400 capitalize py-[12px] px-[32px] block border border-black-400 rounded-[5px]"
      }
      onClick={() => activeState(name)}
    >
      {name}
    </button>
  );

  return (
    <Wrapper>
      <section className="mt-[112px] lg:mb-[161px]">
        <div className="wrapper">
          <h4 className="text-red mb-[20px] text-center lg:text-left">
            Sistem Kontrol Industri
          </h4>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/12 flex lg:gap-[12px] gap-[8px] flex-col lg:items-start items-center mb-[60px] lg:mb-0">
              <SideBtn name="modul" />
              <SideBtn name="tugas rumah" />
              <SideBtn name="jadwal praktikum" />
              <SideBtn name="software" />
            </div>
            <div className="lg:w-9/12">
              {/* jalanin render func */}
              {render(active)}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
