import Link from "next/link";
import { useRouter } from "next/router";

export default function Gallery() {
  const router = useRouter();

  const SideBtn = ({ name }) => (
    <button
      className={
        name === active
          ? "text1 capitalize py-[3px] px-[23px] bg-red rounded-full transition-colors text-white"
          : "text1 py-[3px] capitalize px-[23px] bg-none rounded-full transition-colors text-black-500"
      }
      onClick={() => setActive(name)}
    >
      {name}
    </button>
  );

  return (
    <section>
      <div className="wrapper">
        <h4>Gallery</h4>
      </div>
    </section>

    // <section className="mt-[112px] mb-[161px]">
    //   <div className="wrapper">
    //     <h4 className="text-red mb-[20px]">Gallery</h4>
    //     <div className="flex">
    //       <div className="w-2/12">
    //         <div className="mb-[15px]">
    //           <Link href="/Gallery">
    //             <button>
    //               <a
    //                 className={
    //                   router.pathname == "/Gallery"
    //                     ? "active:text1 text-white py-[12px] px-[32px] block bg-red rounded-[5px]"
    //                     : "text1 text-black-400 py-[12px] px-[32px] block"
    //                 }
    //               >
    //                 Dokumentasi
    //               </a>
    //             </button>
    //           </Link>
    //         </div>
    //         <Link href="/Alat">
    //           <button>
    //             <a
    //               className={
    //                 router.pathname == "/Alat"
    //                   ? "active:text1 text-white py-[12px] px-[32px] block bg-red rounded-[5px]"
    //                   : "text1 text-black-400 py-[12px] px-[32px] block border border-black-400 rounded-[5px]"
    //               }
    //             >
    //               Alat
    //             </a>
    //           </button>
    //         </Link>
    //       </div>
    //       <div className="w-1/12" />
    //       <div className="w-9/12">
    //         <div className="flex gap-[40px] flex-wrap">
    //           <div className="w-[403px] h-[327px] bg-black-400" />
    //           <div className="flex gap-[40px]">
    //             <div className="w-[403px] h-[327px] bg-black-400" />
    //           </div>
    //           <div className="flex gap-[40px]">
    //             <div className="w-[403px] h-[327px] bg-black-400" />
    //           </div>
    //           <div className="flex gap-[40px]">
    //             <div className="w-[403px] h-[327px] bg-black-400" />
    //           </div>
    //           <div className="flex gap-[40px]">
    //             <div className="w-[403px] h-[327px] bg-black-400" />
    //           </div>
    //           <div className="flex gap-[40px]">
    //             <div className="w-[403px] h-[327px] bg-black-400" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
