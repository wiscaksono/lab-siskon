export default function Modul() {
  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <button className="text1 text-white capitalize py-[12px] px-[32px] block bg-red rounded-[5px] border border-none mx-auto lg:mx-0 my-[20px] lg:my-0">
        Download
      </button>

      <iframe
        className="w-full h-[440px] lg:h-[800px] px-[20px] lg:px-0"
        src="https://drive.google.com/file/d/1bioK9unQ4jjeQTTmAnMp4SKrl8SNjrVr/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
