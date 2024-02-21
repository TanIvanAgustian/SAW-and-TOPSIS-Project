import BreadCrumb from "../../../components/Breadcrumb";
import { GraphQlUsers } from "../../../graphql/GraphQlUsers";
import Loading from "../../../components/Loading";
import Footers from "../../../components/Footer";
import CardList from "../../../components/CardList";

export default function ListAnggota() {
  const { data, loading, error } = GraphQlUsers();

  const ketua = data?.users.filter(
    (element) => element.position == "Ketua" && element.status == true
  );
  const wakil = data?.users.filter(
    (element) => element.position == "Wakil Ketua" && element.status == true
  );
  const sekretaris1 = data?.users.filter(
    (element) => element.position == "Sekretaris 1" && element.status == true
  );
  const sekretaris2 = data?.users.filter(
    (element) => element.position == "Sekretaris 2" && element.status == true
  );
  const bendahara1 = data?.users.filter(
    (element) => element.position == "Bendahara 1" && element.status == true
  );
  const bendahara2 = data?.users.filter(
    (element) => element.position == "Bendahara 2" && element.status == true
  );

  const koorhumas = data?.users.filter(
    (element) => element.position == "Koordinator Humas" && element.status == true
  );
  const humasinternal = data?.users.filter(
    (element) => element.position == "Humas Internal" && element.status == true
  );
  const humaseksternal = data?.users.filter(
    (element) => element.position == "Humas Eksternal" && element.status == true
  );

  const koorpelatihan = data?.users.filter(
    (element) => element.position == "Koordinator Kepelatihan" && element.status == true
  );
  const kepelatihan = data?.users.filter(
    (element) => element.position == "Kepelatihan" && element.status == true
  );

  const koordanus = data?.users.filter(
    (element) => element.position == "Koordinator Dana Usaha" && element.status == true
  );
  const danus = data?.users.filter(
    (element) => element.position == "Dana Usaha" && element.status == true
  );

  const koorinventaris = data?.users.filter(
    (element) => element.position == "Koordinator Inventaris" && element.status == true
  );
  const perkab = data?.users.filter(
    (element) => element.position == "Perkab" && element.status == true
  );
  const estetika = data?.users.filter(
    (element) => element.position == "Estetika" && element.status == true
  );

  const koorpublikasi = data?.users.filter(
    (element) => element.position == "Koordinator Publikasi" && element.status == true
  );
  const kreatif = data?.users.filter(
    (element) => element.position == "Kreatif" && element.status == true
  );
  const publikasi = data?.users.filter(
    (element) => element.position == "Publikasi" && element.status == true
  );

  return (
    <div className="bg-blue-800">
      <div className="absolute h-[400px] w-full text-white bg-kaken bg-no-repeat bg-cover bg-scroll">
        <div className="bg-blue-600/40 h-full">
          <div className="flex justify-center p-2 font-bold">
            <h1 className="text-4xl uppercase font-black mt-44 font-serif">
              {" "}
              About US{" "}
            </h1>
          </div>
          <div className="flex justify-center font-bold">
            <BreadCrumb items={["about us", "anggota"]} />
          </div>
        </div>
      </div>
      <div className="bg-blue-700 relative top-[400px] pt-16">
        <div className=" bg-white rounded mx-16 p-8 mb-16 ">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <CardList
                Title="Badan Pengurus Harian"
                koor={[...ketua, ...wakil]}
                member={[
                  ...sekretaris1,
                  ...sekretaris2,
                  ...bendahara1,
                  ...bendahara2,
                ]}
              />
              <div className="w-full border-t border-blue-600 my-8"></div>
              <CardList
                Title="Devisi Hubungan Masyarakat"
                koor={koorhumas}
                member={[
                  ...humasinternal,
                  ...humaseksternal,
                ]}
              />
              <div className="w-full border-t border-blue-600 my-8"></div>
              <CardList
                Title="Devisi Kepelatihan"
                koor={koorpelatihan}
                member={kepelatihan}
              />
              <div className="w-full border-t border-blue-600 my-8"></div>
              <CardList
                Title="Devisi Dana Usaha"
                koor={koordanus}
                member={danus}
              />
              <div className="w-full border-t border-blue-600 my-8"></div>
              <CardList
                Title="Devisi Inventaris"
                koor={koorinventaris}
                member={[
                  ...perkab,
                  ...estetika,
                ]}
              />
              <div className="w-full border-t border-blue-600 my-8"></div>
              <CardList
                Title="Devisi Publikasi"
                koor={koorpublikasi}
                member={[
                  ...kreatif,
                  ...publikasi,
                ]}
              />
            </div>
          )}
        </div>
        <Footers />
      </div>
    </div>
  );
}
