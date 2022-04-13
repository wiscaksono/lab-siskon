import Link from "next/link";
export default function DataPengamatan() {
  return (
    <div>
      <div className="flex gap-[15px]">
        <Link href="#modul-4">
          <button className="text1 text-white capitalize py-[12px] px-[32px] block bg-red rounded-[5px] border border-none mb-[37px]">
            Modul 4
          </button>
        </Link>
        <Link href="#modul-5">
          <button className="text1 text-white capitalize py-[12px] px-[32px] block bg-red rounded-[5px] border border-none mb-[37px]">
            Modul 5
          </button>
        </Link>
        <Link href="#modul-6">
          <button className="text1 text-white capitalize py-[12px] px-[32px] block bg-red rounded-[5px] border border-none mb-[37px]">
            Modul 6
          </button>
        </Link>
      </div>

      <div>
        <div id="modul-4">
          <Cards
            title="Modul 4"
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
          <Cards
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
          <Cards
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
        </div>
        <div id="modul-5" className="mt-[70px]">
          <Cards
            title="Modul 5"
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
          <Cards
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
          <Cards
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
        </div>
        <div id="modul-6" className="mt-[70px]">
          <Cards
            title="Modul 6"
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
          <Cards
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
          <Cards
            secondTitle="Set Point 2V, Proporsional (Resisjtor 10K)"
            img="/data-pengamatan/set-point-2v-proporsional-resistor-10k.jpg"
          />
        </div>
      </div>
    </div>
  );
}

const Cards = ({ title, secondTitle, img }) => {
  return (
    <div className="mb-[30px]">
      <h4 className="text-center mb-[20px]">{title}</h4>
      <p className="mb-[20px] font-bold text-[20px]">{secondTitle}</p>
      <div className="aspect-video">
        <img src={img} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
