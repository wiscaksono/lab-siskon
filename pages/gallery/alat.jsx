/* eslint-disable */
export default function Alat() {
  return (
    <div className="flex gap-[40px] flex-wrap">
      <Image src="img1.jpg" desc={`test`} />
    </div>
  );
}

const Image = ({ src, desc }) => (
  <div className="w-[403px] h-[327px] bg-clip-padding">
    <img
      src={`/gallery/dokumentasi/${src}`}
      className="w-full h-full object-cover"
    />
  </div>
);
