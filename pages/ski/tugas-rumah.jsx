import Link from "next/link";
export default function TugasRumah() {
  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <Link href="https://drive.google.com/u/0/uc?id=1NFz9h6mJtvzzTAvnsQsl_Hf2ghkv5sVQ&export=download">
        <button className="text1 text-white capitalize py-[12px] px-[32px] block bg-red rounded-[5px] border border-none mx-auto lg:mx-0 my-[20px] lg:my-0">
          Download
        </button>
      </Link>

      <iframe
        className="w-full h-[440px] lg:h-[800px] px-[20px] lg:px-0"
        src="https://drive.google.com/file/d/1NFz9h6mJtvzzTAvnsQsl_Hf2ghkv5sVQ/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
