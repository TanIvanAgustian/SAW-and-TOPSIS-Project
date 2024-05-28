import { useEffect, useState } from "react";
import Search from "../../../components/Search";
import Pagination from "../../../components/Pagination";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";
import { GraphQlRank } from "../../../graphql/GraphQlRank";
import { GraphQlCompetition } from "../../../graphql/GraphQlCompetition";
import ItemNotFound from "../../../components/ItemNotFound";

export default function RankData() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState(1);
  const [voice, setVoice] = useState("");

  const handleTabClick = (tabNumber, tabVoice) => {
    setActiveTab(tabNumber);
    setVoice(tabVoice);
  };

  const { dataRank, loadingRank, errorRank } = GraphQlRank();
  const datas = dataRank?.rank.filter((element) => element.nilai != null);
  const { CompetitionData, CompetitionLoading, CompetitionError } =
    GraphQlCompetition();

  const [competitionId, setCompetitionId] = useState("");

  useEffect(() => {
    if (
      !CompetitionLoading &&
      CompetitionData &&
      CompetitionData.competition.length > 0
    ) {
      setCompetitionId(CompetitionData.competition[0].id);
    }
  }, [CompetitionLoading, CompetitionData]);

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCompetitionId = (e) => {
    setCompetitionId(e.target.value);
    handleTabClick(1,"")
  };

  return (
    <div>
      <h2 class="lg:text-4xl md:text-3xl text-2xl font-bold dark:text-white text-center mb-6">
        List Anggota
      </h2>
      <div className="lg:flex flex-1 w-full justify-center items-center mb-3">
        <Search
          id="search-input"
          placeholder="Cari nama anggota"
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          value={search}
        />
        <div>
        <Link
          to={"./addrank/" + competitionId}
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl lg:text-sm md:text-sm text-xs p-2 px-4 lg:w-80 md:w-4/12 w-fit text-center flex items-center container justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Beri Nilai
          <PlusIcon className="lg:h-6 h-4 lg:w-6 w-4 ml-1" />
        </Link>
        <Link
          to={"./editkategori"}
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl lg:text-sm md:text-sm text-xs p-2 px-4 lg:w-80 md:w-4/12 w-fit text-center flex items-center container justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit Kategori
          <PencilIcon className="lg:h-6 h-4 lg:w-6 w-4 ml-1" />
        </Link>
        </div>
      </div>

      <div>
        <label
          for="default"
          className="block mb-2 ms-2 text-sm font-medium text-green-700 dark:text-green-500"
        >
          Kompetisi
        </label>
        <select
          id="voice_type"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleCompetitionId}
          value={competitionId}
        >
          {CompetitionData?.competition.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>

      {loadingRank ? (
        <Loading />
      ) : (
        <div>
          <div className="w-full">
            <div className="bg-white">
              <nav className="flex flex-col sm:flex-row">
                <button
                  className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                    activeTab === 1
                      ? "text-blue-500 border-b-2 font-medium border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick(1, "")}
                >
                  All
                </button>
                <button
                  className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                    activeTab === 2
                      ? "text-blue-500 border-b-2 font-medium border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick(2, "Sopran")}
                >
                  Sopran
                </button>
                <button
                  className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                    activeTab === 3
                      ? "text-blue-500 border-b-2 font-medium border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick(3, "Alto")}
                >
                  Alto
                </button>
                <button
                  className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                    activeTab === 4
                      ? "text-blue-500 border-b-2 font-medium border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick(4, "Tenor")}
                >
                  Tenor
                </button>
                <button
                  className={`text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                    activeTab === 5
                      ? "text-blue-500 border-b-2 font-medium border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick(5, "Bass")}
                >
                  Bass
                </button>
              </nav>
            </div>
          </div>
          {datas?.filter(
            (element) =>
              element.name.toLowerCase().includes(search.toLowerCase()) &&
              element.competitionId == competitionId &&
              element.voice_Type.toLowerCase().includes(voice.toLowerCase())
          ).length > 0 ? (
            <div>
              <div className="overflow-x-auto my-6">
                <table className="table-auto w-full border-collapse overflow-hidden border border-blue-800">
                  <thead className="text-center bg-blue-800 text-white">
                    <tr>
                      <th className="px-4 py-2">Peringkat</th>
                      <th className="px-4 py-2">Nama</th>
                      <th className="px-4 py-2">Suara</th>
                      <th className="px-4 py-2">Support</th>
                      <th className="px-4 py-2">Placement</th>
                      <th className="px-4 py-2">Ruangan</th>
                      <th className="px-4 py-2">Keaktifan</th>
                      <th className="px-4 py-2">Nilai</th>
                      <th className="px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {datas
                      .filter(
                        (element) =>
                          element.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) &&
                          element.competitionId == competitionId &&
                          element.voice_Type.toLowerCase().includes(voice.toLowerCase())
                      )
                      .slice(indexOfFirstItem, indexOfLastItem)
                      .map((element, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
                          }
                        >
                          <td className="border px-4 py-2 min-w-fit text-center">
                            {index + indexOfFirstItem + 1}
                          </td>
                          <td className="border px-4 py-2 min-w-[100px]">
                            {element.name}
                          </td>
                          <td className="border px-4 py-2 min-w-[10px] text-center">
                            {element.voice_Type}
                          </td>
                          <td className="border px-4 py-2 min-w-[10px] text-center">
                            {element.support}
                          </td>
                          <td className="border px-4 py-2 min-w-[10px] text-center">
                            {element.placement}
                          </td>
                          <td className="border px-4 py-2 min-w-[10px] text-center">
                            {element.ruangan}
                          </td>
                          <td className="border px-4 py-2 min-w-[10px] text-center">
                            {element.keaktifan}
                          </td>
                          <td className="border px-4 py-2 font-black min-w-[10px] text-center">
                            {element.nilai.toFixed(2)}
                          </td>
                          <td className="border px-4 py-2 min-w-[50px]">
                            <div className="flex w-full justify-around">
                              <Link
                                type="button"
                                class="text-green-700 border-1 border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500"
                                to={"./editrank/" + element.id}
                              >
                                <PencilIcon className="w-4 h-4" />
                                <span class="sr-only">Edit</span>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex lg:flex-1 md:flex-1 sm:items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700 hidden md:block lg:block">
                      Showing{" "}
                      <span className="font-medium">{indexOfFirstItem}</span> to{" "}
                      <span className="font-medium">
                        {Math.ceil(
                          datas?.filter(
                            (element) =>
                              element.name
                                .toLowerCase()
                                .includes(search.toLowerCase()) &&
                              element.competitionId == competitionId &&
                              element.voice_Type.toLowerCase().includes(voice.toLowerCase())
                          ).length / itemsPerPage
                        ) == currentPage
                          ? datas?.filter(
                              (element) =>
                                element.name
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) &&
                                element.competitionId == competitionId &&
                                element.voice_Type.toLowerCase().includes(voice.toLowerCase())
                            ).length
                          : indexOfLastItem}
                      </span>{" "}
                      of{" "}
                      <span className="font-medium">
                        {datas?.filter(
                          (element) =>
                            element.name
                              .toLowerCase()
                              .includes(search.toLowerCase()) &&
                            element.competitionId == competitionId &&
                            element.voice_Type.toLowerCase().includes(voice.toLowerCase())
                        ).length + " "}
                      </span>
                      results
                    </p>
                  </div>
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={
                      datas?.filter(
                        (element) =>
                          element.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) &&
                          element.competitionId == competitionId &&
                          element.voice_Type.toLowerCase().includes(voice.toLowerCase())
                      ).length
                    }
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
          ) : (
            <ItemNotFound />
          )}
        </div>
      )}
    </div>
  );
}
