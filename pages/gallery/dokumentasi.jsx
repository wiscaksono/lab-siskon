export default function Dokumentasi() {
  return (
    <div className="flex gap-[40px] flex-wrap">
      <Image src="img1.jpg" />
      <div className="w-[403px] h-[327px] bg-clip-padding">
        <img
          src="/gallery/dokumentasi/img1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[403px] h-[327px] bg-clip-padding">
        <img
          src="/gallery/dokumentasi/img2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

const Image = ({ src }) => (
  <div className="w-[403px] h-[327px] bg-clip-padding">
    <img
      src="/gallery/dokumentasi/${src}"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
);
