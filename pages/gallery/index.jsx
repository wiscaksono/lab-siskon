import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Dokumentasi from "./dokumentasi";
import Alat from "./alat";
import Wrapper from "../../components/Wrapper";

export default function Gallery() {
  const [active, activeState] = useState("dokumentasi");
  function render(value) {
    switch (value) {
      case "dokumentasi":
        return <Dokumentasi />;
      case "alat":
        return <Alat />;
      default:
        return "Halaman Tidak Ditemukan";
    }
  }

  const router = useRouter();
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
          <h4 className="text-red mb-[20px] text-center lg:text-left">
            Gallery
          </h4>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/12 flex lg:gap-[12px] gap-[8px] flex-col lg:items-start items-center mb-[60px] lg:mb-0">
              <SideBtn name="dokumentasi" />
              <SideBtn name="alat" />
            </div>
            <div className="w-9/12">{render(active)}</div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
