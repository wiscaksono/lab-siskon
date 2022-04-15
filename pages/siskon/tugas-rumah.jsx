import Link from "next/link";
export default function TugasRumah() {
  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <Link
        href="https://drive.google.com/u/0/uc?id=1IVShmvuaZcxzRRwMEjcjOvwdIEOpQxDB&export=download"
        passHref
      >
        <button className="text1 text-white mx-auto my-[20px] block rounded-[5px] border border-none bg-red py-[12px] px-[32px] capitalize lg:mx-0 lg:my-0">
          Download
        </button>
      </Link>

      <iframe
        className="h-[440px] w-full px-[20px] lg:h-[800px] lg:px-0"
        src="https://drive.google.com/file/d/1IVShmvuaZcxzRRwMEjcjOvwdIEOpQxDB/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
