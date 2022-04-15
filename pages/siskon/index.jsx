import Link from "next/link";
import { useState } from "react";

import Wrapper from "../../components/Wrapper";
import TugasRumah from "./tugas-rumah";
import MateriPendukung from "./materi-pendukung";
import JadwalPraktikum from "./jadwal-praktikum";
import TemplateJournal from "./template-journal";
import Modul from "./modul";
import DataPengamatan from "./data-pengamatan";
import SourceCode from "./source-code";

export default function Index() {
  // state
  const [active, activeState] = useState("tugas rumah");
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
      case "data pengamatan":
        return <DataPengamatan />;
      case "source code":
        return <SourceCode />;
      default:
        return "Halaman Tidak Ditemukan";
    }
  }

  // ubah component menjadi menggunakan state
  const SideBtn = ({ name }) => (
    <button
      className={
        name === active
          ? "text1 text-white block rounded-[5px] border border-none bg-red py-[12px] px-[32px] capitalize"
          : "text1 block rounded-[5px] border border-black-400 py-[12px] px-[32px] capitalize text-black-400"
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
          <h4 className="mb-[20px] text-center text-red lg:text-left">
            Sistem Kontrol
          </h4>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-[60px] flex flex-col items-center gap-[8px] lg:mb-0 lg:w-3/12 lg:items-start lg:gap-[12px]">
              <SideBtn name="modul" />
              <SideBtn name="tugas rumah" />
              <SideBtn name="template journal" />
              <SideBtn name="materi pendukung" />
              <SideBtn name="jadwal praktikum" />
              <SideBtn name="data pengamatan" />
              <SideBtn name="source code" />
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
