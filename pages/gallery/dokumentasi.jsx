/* eslint-disable */
export default function Dokumentasi() {
  return (
    <div className="grid lg:grid-cols-2 gap-[40px] grid-cols-1">
      <Image src="img1.jpg" />
      <Image src="img2.jpg" />
      <Image src="img3.jpg" />
      <Image src="img1.jpg" />
      <Image src="img2.jpg" />
      <Image src="img3.jpg" />
    </div>
  );
}

const Image = ({ src }) => (
  <div className="lg:w-[403px] lg:h-[327px] bg-clip-padding w-[320px] h-[260px]">
    <img
      src={`/gallery/dokumentasi/${src}`}
      className="w-full h-full object-cover"
    />
  </div>
);
