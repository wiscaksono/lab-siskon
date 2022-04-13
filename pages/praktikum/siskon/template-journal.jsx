import Link from "next/link";
export default function TemplateJournal() {
  return (
    <div>
      <Link
        href="https://drive.google.com/u/0/uc?id=1GPz427pNl2poN3OgrELitq5HxR-NetwC&export=download"
        passHref
      >
        <button className="text1 text-white capitalize py-[12px] px-[32px] block bg-red rounded-[5px] border border-none mb-[37px]">
          Download
        </button>
      </Link>

      <iframe
        className="w-full h-[800px]"
        src="https://drive.google.com/file/d/1GPz427pNl2poN3OgrELitq5HxR-NetwC/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
