import Link from "next/link";
import { useState } from "react";

import Wrapper from "../../components/Wrapper";
import TugasRumah from "./tugas-rumah";
import MateriPendukung from "./materi-pendukung";
import JadwalPraktikum from "./jadwal-praktikum";
import TemplateJournal from "./template-journal";
import Modul from "./modul";
import DataPengamatan from "./data-pengamatan";

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
      case "materi pendukung":
        return <MateriPendukung />;
      case "jadwal praktikum":
        return <JadwalPraktikum />;
      case "template journal":
        return <TemplateJournal />;
      case "video materi":
        return <VideoMateri />;
      case "data pengamatan":
        return <DataPengamatan />;
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
      <section className="mt-[112px] mb-[161px]">
        <div className="wrapper">
          <h4 className="text-red mb-[20px]">Sistem Kontrol Industri</h4>
          <div className="flex">
            <div className="w-3/12 flex gap-[12px] flex-col items-start">
              <SideBtn name="modul" />
              <SideBtn name="tugas rumah" />
              <SideBtn name="jadwal praktikum" />
              <SideBtn name="software" />
            </div>
            <div className="w-9/12">
              {/* jalanin render func */}
              {render(active)}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
