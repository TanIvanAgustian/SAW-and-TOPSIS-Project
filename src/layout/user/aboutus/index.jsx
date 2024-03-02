import BreadCrumb from "../../../components/Breadcrumb";
import { GraphQlUsers } from "../../../graphql/GraphQlUsers";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";
import { GetAllPeopleByPosition } from "../../../components/GetAllPeople";
import Footers from "../../../components/Footer";

export default function AboutUs() {
  const {ketua,loading,error} = GetAllPeopleByPosition()
  const achievement = [
    "Peraih Juara III Lomba Paduan Suara Konsumen Cerdas Disperindag Jawa Tengah",
    "Peraih Gold Medal di 1st Taipei International Choral Competition kategori “Folklore” tahun 2018",
    "Peraih Gold Medal di 1st Taipei International Choral Competition kategori “Youth” tahun 2018",
    "Peraih Best Performance untuk lagu Taiwan di 1st Taipei International Choral Competition tahun 2018",
    "Peraih Silver B Medal di 8th Satya Dharma Gita Choir kategori “Mixed” tahun 2021",
    "Peraih Silver A Medal di 10 International Brawijaya Choir Festival kategori “Folklore” tahun 2022",
    "Peraih Silver Medal di Pesta Paduan Suara Gerejawi Mahasiswa tahun 2022",
    "Peraih Silver Medal di 7th Singapore International Choral Festival kategori “Folklore” tahun 2023",
    "Peraih Silver Medal di 7th Singapore International Choral Festival kategori “Mixed” tahun 2023",
    "Peraih Gold Medal di 4th Karangturi International Choir Competition kategori “Mixed Voice” tahun 2023",
  ];

  return (
    <div className="bg-blue-800">
      <div className="absolute h-[400px] w-full text-white bg-kaken bg-no-repeat bg-cover bg-scroll">
        <div className="bg-blue-600/40 h-full">
          <div className="flex justify-center p-2 font-bold">
            <h1 className="text-4xl uppercase font-black mt-44 font-serif"> About US </h1>
          </div>
          <div className="flex justify-center font-bold">
            <BreadCrumb items={["about us"]} />
          </div>
        </div>
      </div>
      <div className="bg-blue-700 relative top-[400px] pt-16">
        <div className=" bg-white rounded mx-16 p-8 mb-16">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <h1 className="font-black text-3xl text-center capitalize mb-3">
                {ketua[0].position}
              </h1>
              <h1 className="font-extrabold text-xl text-center capitalize">
                {ketua[0].name}
              </h1>
              <div className="flex my-6 justify-around">
                <img
                  className="w-3/12 h-full rounded-full place-self-center"
                  src={ketua[0].image}
                  alt="new"
                />
                <div className="w-8/12">
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-2">Visi:</h4>
                    <p>
                      Menjadikan Paduan Suara Gita Dian Nuswa sebagai wadah
                      inspirasi dan mengelola potensi di bidang paduan suara,
                      menginspirasi keluarga Gita Dinus untuk terus berkarya
                      dengan semangat untuk menjadi penggerak kegiatan seni di
                      lingkungan kampus dan eksternal.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Misi:</h4>
                    <ul className="list-disc pl-6 ">
                      <li>
                        Menciptakan lingkungan berdasarkan rasa kekeluargaan
                        dalam PSM GDN.
                      </li>
                      <li>
                        Meningkatkan keterlibatan anggota dalam kegiatan PSM
                        GDN.
                      </li>
                      <li>
                        Membangun budaya latihan yang lebih disiplin dan efektif
                      </li>
                    </ul>
                    <Link
                      to="/about us/anggota"
                      className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Kabinet Kepengurusan
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-900 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <svg
                    class="w-4 h-4 text-gray-700 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
              </div>

              <h1 className="font-extrabold text-xl capitalize">
                Sejarah Gita Dian Nuswa
              </h1>
              <p className="my-3 text-justify">
                Paduan Suara Mahasiswa Universitas Dian Nuswantoro berdiri pada
                tanggal 1 Desember 1995. Pembina pertama UKM Paduan Suara
                Mahasiswa Udinus adalah DR Yohan Wismantoro SE, MM, yang
                sekaligus menjadi pencipta lagu Hymne dan Mars Universitas Dian
                Nuswantoro. Selanjutnya dibawah naungan Yuventius Tyas Catur
                Pramudi, S.Si, M.Kom, selaku Pembina kedua, dicetuskanlah "GITA
                DIAN NUSWA" sebagai nama resmi UKM Paduan Suara Mahasiswa
                Udinus. Pembina untuk periode 2013 - 2022 adalah Bambang Minarso
                S.E., M.Si., Ak. Pembina untuk periode 2022-sekarang adalah
                Lenni Yovita S.E., M.Si
              </p>

              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-900 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <svg
                    class="w-4 h-4 text-gray-700 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
              </div>

              <h1 className="font-extrabold text-xl capitalize mt-3">
                Prestasi Gita Dian Nuswa
              </h1>
              <ol class="list-decimal my-3 list-inside">
                {achievement.map((prestasi) => (
                  <li className="mb-1">{prestasi}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
        <Footers/>
      </div>
    </div>
  );
}
