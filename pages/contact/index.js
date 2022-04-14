import Link from "next/link";
import Wrapper from "../../components/Wrapper";

export default function Index() {
  return (
    <Wrapper>
      <section className="mt-[112px] mb-[161px]">
        <div className="wrapper">
          <h4 className="text-red lg:mb-[20px] mb-[25px] text-center px-[98px] lg:px-0">
            Contact Person
          </h4>
          <div className="grid lg:grid-cols-4 gap-[40px] grid-cols-1 mx-[50px]">
            <Cards
              img="contact-person/wisnu.png"
              nama="Wisnu Wicaksono"
              nim="201811184"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/rizki.png"
              nama="Rizki Irfan Suwardi"
              nim="201811123"
              email="mailto:arfianrizki09@gmail.com"
              instagram="https://www.instagram.com/arfiann_rizki/"
              line="http://line.me/ti/p/~arfian_rizki"
              whatsapp="https://wa.me/+6282372435898"
            />
            <Cards
              img="contact-person/cepin.png"
              nama="Syelvine M"
              nim="201811188"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/anisa.png"
              nama="Anisah Meliza H"
              nim="201811190"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/ivan.png"
              nama="Ivan Maulana"
              nim="201911151"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/nanda.png"
              nama="Inggiarta Mulya N"
              nim="201811184"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/rebeca.png"
              nama="Rebeca Carliana"
              nim="201911255"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/indah.png"
              nama="Indah Khoirunisa"
              nim="201911032"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/puspita.png"
              nama="Puspita Damayanti"
              nim="201911038"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
            <Cards
              img="contact-person/nurul.png"
              nama="Nurul Fadillah P"
              nim="201911021"
              email="mailto:wwicaksono96@gmail.com"
              instagram="https://www.instagram.com/amachoker/"
              line="https://line.me/ti/p/~@wisnu96"
              whatsapp="http://wa.me/6287885002327"
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Cards = ({ img, nama, nim, email, instagram, line, whatsapp }) => {
  return (
    <div className="flex flex-col items-center gap-[28px] py-[47px] px-[35px] shadow-lg rounded-[20px]">
      <img src={img} alt="" />
      <p className="subhead4 text-center">
        {nama} <span>{nim}</span>
      </p>
      <div className="flex items-center justify-center gap-[15px]">
        <Link href={email}>
          <a className="w-[28px] h-[28px]" target="_blank">
            <img src="email-icon.svg" alt="" className="w-full h-full" />
          </a>
        </Link>

        <Link href={instagram}>
          <a className="w-[28px] h-[28px]" target="_blank">
            <img src="instagram-icon.svg" alt="" className="w-full h-full" />
          </a>
        </Link>

        <Link href={line}>
          <a className="w-[28px] h-[28px]" target="_blank">
            <img src="line-icon.svg" alt="" className="w-full h-full" />
          </a>
        </Link>

        <Link href={whatsapp}>
          <a className="w-[28px] h-[28px]" target="_blank">
            <img src="whatsapp-icon.svg" alt="" className="w-full h-full" />
          </a>
        </Link>
      </div>
    </div>
  );
};
