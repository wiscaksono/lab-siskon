/* eslint-disable */
export default function Dokumentasi() {
  return (
    <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-2">
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
  <div className="h-[260px] w-[320px] bg-clip-padding lg:h-[327px] lg:w-[403px]">
    <img
      src={`/gallery/dokumentasi/${src}`}
      className="h-full w-full object-cover"
    />
  </div>
);
