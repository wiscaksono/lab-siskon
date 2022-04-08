import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Siskon() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className="mt-[112px] mb-[161px]">
        <div className="wrapper">
          <h4 className="text-red mb-[20px]">Sistem Kontrol</h4>
          <div className="flex">
            <div className="w-2/12 flex gap-[15px] flex-col">
              <div>
                <Link href="/Siskon">
                  <button>
                    <a
                      className={
                        router.pathname == "/Siskon"
                          ? "active:text1 text-white py-[12px] px-[32px] block bg-red rounded-[5px] border border-none"
                          : "text1 text-black-400 py-[12px] px-[32px] block"
                      }
                    >
                      Tugas Rumah
                    </a>
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/Alat">
                  <button>
                    <a
                      className={
                        router.pathname == "/Alat"
                          ? "active:text1 text-white py-[12px] px-[32px] bg-red rounded-[5px]"
                          : "text1 text-black-400 py-[12px] px-[32px] border border-black-400 rounded-[5px]"
                      }
                    >
                      Materi
                    </a>
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/Alat">
                  <button>
                    <a
                      className={
                        router.pathname == "/Alat"
                          ? "active:text1 text-white py-[12px] px-[32px] bg-red rounded-[5px]"
                          : "text1 text-black-400 py-[12px] px-[32px] border border-black-400 rounded-[5px]"
                      }
                    >
                      Materi
                    </a>
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/12" />
            <div className="w-9/12">
              <Link href="https://doc-00-6c-docs.googleusercontent.com/docs/securesc/np308d2fl5jv3ml71o2ieor6g4f5df9g/j8e08s18d9vkckqj7142lk0dh3b8m0ec/1649440875000/10531573768503561392/09478328483851097678/1IVShmvuaZcxzRRwMEjcjOvwdIEOpQxDB?e=download&ax=ACxEAsbfG4YX4BLM0V1-aimRpSqcrfZPV26tn9Aro5sXhOVBIdWs9U_jTThuYNZfbo6npEQGyMmFaqkXpXz1JWwTpGY7zKg9JONcNTvvAGyQZZq3fwfQkYDyCDbX7jnWjHB-L3UVzjRmCuWoLh_L7tlkdvgzNyax28hQ-ny27UxqWwA-NUpM143gbpt-XpLbaAwlR1BKOwnCzUBsR-ejLeTWE7mnyiDahKjQ4qc2UNf36GMH0Q6ZsF6_-nGlIWPM00pRrz2lp7_1RIDnRmFds56m04WioSwM2xvWEYlSprLqn-TjS-jfB1yuAWcaDef5tnDRGcPu6_jPv1XUpLUMW-Bft974jKRQWJCTLPN5Gn3UXPeJlgG8hGNxyKd6iAAKevCn5ra6wqweRHgydp9crK19mPojANnMmvKOIlWJITYTDpTg_lO-1FeTPtnyhIQAX0QZUaA9kYBvdwbvqAs7BS8Ih3rZlC4g_-NgQZ8tBMPt1YqJUtplvtivPUQmGoZgBusrpc_TFPdEAeZm3wkkgoKl01Ugn-ApmqQcVlWt4lBqPIHvTi-A1xl-WfhakPLe3TsvziAObkXOwk6i_c-gGidv7rnw7Z1FxphCTeG7rzRmqbVLf0KzmfHomZ84egJZ7-2ARhSzk0wSBDdP_CXtkQJZatIJIZHam1ugGMS1jz_rK7T7az77vzwBsC-NWD6NiklBGJzj9r9rCps&authuser=0&nonce=08ljik725o9ta&user=09478328483851097678&hash=aftokrjtablm9posgft46cg04v42lpco">
                <button className="mb-[37px]">
                  <a
                    href="#"
                    target="_blank"
                    className="text1 text-white py-[12px] px-[32px] block bg-red rounded-[5px]"
                  >
                    Download
                  </a>
                </button>
              </Link>
              <iframe
                src="https://drive.google.com/file/d/1IVShmvuaZcxzRRwMEjcjOvwdIEOpQxDB/preview"
                className="w-full h-[1120px]"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
