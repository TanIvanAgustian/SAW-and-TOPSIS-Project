import { useEffect, useState } from "react";
import Search from "../../../components/Search";
import Pagination from "../../../components/Pagination";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";
import { GraphQlRank } from "../../../graphql/GraphQlRank";
import ItemNotFound from "../../../components/itemNotFound";

export default function RankData() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const { data, loading, error } = GraphQlRank();
  const datas = data?.rank.filter((element) => element.nilai != null);

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

  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white mb-6 ms-6">List Anggota</h2>
      <div className="flex w-full justify-between items-center mb-3">
        <Search
          id="search-input"
          placeholder="Cari nama anggota"
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          value={search}
        />
        <Link
          to={"./addrank"}
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm p-2 w-80 text-center flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Beri Nilai
          <PlusIcon className="h-6 w-6 ml-1" />
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : datas?.filter((element) =>
          element.name.toLowerCase().includes(search.toLowerCase())
        ).length > 0 ? (
        <div>
          <div className="overflow-x-auto my-6">
            <table className="table-auto w-full border-collapse overflow-hidden border border-blue-800">
              <thead className="text-center bg-blue-800 text-white">
                <tr>
                  <th className="px-4 py-2">Peringkat</th>
                  <th className="px-4 py-2">Nama</th>
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
                  .filter((element) =>
                    element.name.toLowerCase().includes(search.toLowerCase())
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
        </div>
      ) : (
        <ItemNotFound />
      )}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{indexOfFirstItem}</span> to{" "}
              <span className="font-medium">
                {Math.ceil(
                  datas?.filter((element) =>
                    element.name.toLowerCase().includes(search.toLowerCase())
                  ).length / itemsPerPage
                ) == currentPage
                  ? datas?.filter((element) =>
                      element.name.toLowerCase().includes(search.toLowerCase())
                    ).length
                  : indexOfLastItem}
              </span>{" "}
              of{" "}
              <span className="font-medium">
                {datas?.filter((element) =>
                  element.name.toLowerCase().includes(search.toLowerCase())
                ).length + " "}
              </span>
              results
            </p>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={
              datas?.filter((element) =>
                element.name.toLowerCase().includes(search.toLowerCase())
              ).length
            }
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}
