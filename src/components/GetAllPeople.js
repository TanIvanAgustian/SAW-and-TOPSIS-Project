import { GraphQlUsers } from "../graphql/GraphQlUsers";

export function GetAllPeopleByPosition() {
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
    (element) =>
      element.position == "Koordinator Humas" && element.status == true
  );
  const humasinternal = data?.users.filter(
    (element) => element.position == "Humas Internal" && element.status == true
  );
  const humaseksternal = data?.users.filter(
    (element) => element.position == "Humas Eksternal" && element.status == true
  );

  const koorpelatihan = data?.users.filter(
    (element) =>
      element.position == "Koordinator Kepelatihan" && element.status == true
  );
  const kepelatihan = data?.users.filter(
    (element) => element.position == "Kepelatihan" && element.status == true
  );

  const koordanus = data?.users.filter(
    (element) =>
      element.position == "Koordinator Dana Usaha" && element.status == true
  );
  const danus = data?.users.filter(
    (element) => element.position == "Dana Usaha" && element.status == true
  );

  const koorinventaris = data?.users.filter(
    (element) =>
      element.position == "Koordinator Inventaris" && element.status == true
  );
  const perkab = data?.users.filter(
    (element) => element.position == "Perkab" && element.status == true
  );
  const estetika = data?.users.filter(
    (element) => element.position == "Estetika" && element.status == true
  );

  const koorpublikasi = data?.users.filter(
    (element) =>
      element.position == "Koordinator Publikasi" && element.status == true
  );
  const kreatif = data?.users.filter(
    (element) => element.position == "Kreatif" && element.status == true
  );
  const publikasi = data?.users.filter(
    (element) => element.position == "Publikasi" && element.status == true
  );

  return {
    ketua,
    wakil,
    bendahara1,
    bendahara2,
    sekretaris1,
    sekretaris2,
    koorhumas,
    humasinternal,
    humaseksternal,
    koorpelatihan,
    kepelatihan,
    koordanus,
    danus,
    koorinventaris,
    perkab,
    estetika,
    koorpublikasi,
    publikasi,
    kreatif,
    loading,
    error,
  };
}
