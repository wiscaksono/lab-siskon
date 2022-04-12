export default function MateriPendukung() {
  return (
    <div>
      <Video
        title="Root Locus"
        secondTitle="1. Pengenalan Root Locus"
        link="https://www.youtube.com/embed/TjeVwk7YQ0Y"
      />
      <Video
        secondTitle="2. Dasar Membuat Sketsa Root Locus"
        link="https://www.youtube.com/embed/xPVnBF1_a5M"
      />
      <Video
        secondTitle="3. Kriteria Kestabilan Dengan Routh-Hurwitz"
        link="https://www.youtube.com/embed/Iqa4AX-zas0"
      />
      <Video
        title="Bode Plot"
        secondTitle="1. Memahami Bode Plot"
        link="https://www.youtube.com/embed/a1pVjeKBhEg"
      />
      <Video
        secondTitle="2. Sketsa Bode Plot"
        link="https://www.youtube.com/embed/wTjzSMg8SEo"
      />
      <Video
        secondTitle="3. Sketsa Bode Plot"
        link="https://www.youtube.com/embed/jUs9uacmHG0"
      />
      <Video
        title="PID Controller"
        secondTitle="1. Memahami PID Controller"
        link="https://www.youtube.com/embed/aaMA-v509QQ"
      />
      <Video
        secondTitle="2. PID Tuning Dengan Ziegler-Nichols"
        link="https://www.youtube.com/embed/ULeueObnqp4"
      />
    </div>
  );
}

const Video = ({ title, secondTitle, link }) => {
  return (
    <div className="mb-[30px]">
      <h4 className="text-center">{title}</h4>
      <p className="mb-[20px] font-bold text-[20px]">{secondTitle}</p>
      <div className="aspect-video">
        <iframe className="w-full h-full" src={link}></iframe>
      </div>
    </div>
  );
};
