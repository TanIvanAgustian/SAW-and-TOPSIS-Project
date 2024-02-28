import { useEffect, useState } from "react";
import Search from "../../../components/Search";
import {
  GraphQlDeleteUsersById,
  GraphQlUsers,
} from "../../../graphql/GraphQlUsers";
import Pagination from "../../../components/Pagination";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";

export default function UsersData() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const { data, loading, error } = GraphQlUsers();
  const { DeleteUsers, LoadingDelete, ErrorDelete } = GraphQlDeleteUsersById();

  const [search, setSearch] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const TableHeader = ["No", "Nama", "Email", "Suara", "Devisi", "Angkatan", "Aksi"]

  const handleDelete = (idx) => {
    console.log(idx);
    DeleteUsers({
      variables: {
        id: idx,
      },
    });
  };

  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white mb-6 ms-6">List Anggota</h2>
      {loading && LoadingDelete ? (
        <Loading />
      ) : (
        <div>
          <div className="flex w-full justify-between items-center">
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
              to="./adduser"
              className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm p-2 w-80 text-center flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambahkan Anggota
              <PlusIcon className="h-6 w-6 ml-1" />
            </Link>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="table-auto w-full border-collapse overflow-hidden border border-blue-800">
              <thead className="text-center bg-blue-800 text-white">
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Suara</th>
                  <th className="px-4 py-2">Devisi</th>
                  <th className="px-4 py-2">Angkatan</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {data?.users
                  .filter(
                    (user) =>
                      user.name.toLowerCase().includes(search.toLowerCase()) &&
                      user.name.toLowerCase() != "admin"
                  )
                  .slice(indexOfFirstItem, indexOfLastItem)
                  .map((user, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
                      }
                    >
                      <td className="border px-4 py-2 min-w-fit text-center">
                        {index + indexOfFirstItem + 1}
                      </td>
                      <td className="border px-4 py-2 min-w-[250px]">
                        {user.name}
                      </td>
                      <td className="border px-4 py-2 min-w-[250px]">
                        {user.email}
                      </td>
                      <td className="border px-4 py-2 min-w-[120px]">
                        {user.voice_type}
                      </td>
                      <td className="border px-4 py-2 min-w-[180px]">
                        {user.position}
                      </td>
                      <td className="border px-4 py-2 min-w-[100px] text-center">
                        {user.angkatan}
                      </td>
                      <td className="border px-4 py-2 min-w-[150px]">
                        <div className="flex w-full justify-around">
                          <Link
                            type="button"
                            class="text-green-700 border-1 border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500"
                            to={"./edituser/"+user.id}
                          >
                            <PencilIcon className="w-4 h-4" />
                            <span class="sr-only">Edit</span>
                          </Link>
                          <button
                            type="button"
                            class="text-red-700 border-1 border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
                            onClick={() => handleDelete(user.id)}
                          >
                            <TrashIcon className="w-4 h-4" />
                            <span class="sr-only">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{indexOfFirstItem}</span> to{" "}
                  <span className="font-medium">
                    {Math.ceil(
                      data?.users.filter(
                        (user) =>
                          user.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) &&
                          user.name.toLowerCase() != "admin"
                      ).length / itemsPerPage
                    ) == currentPage
                      ? data?.users.filter(
                          (user) =>
                            user.name
                              .toLowerCase()
                              .includes(search.toLowerCase()) &&
                            user.name.toLowerCase() != "admin"
                        ).length
                      : indexOfLastItem}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {data?.users.filter(
                      (user) =>
                        user.name
                          .toLowerCase()
                          .includes(search.toLowerCase()) &&
                        user.name.toLowerCase() != "admin"
                    ).length + " "}
                  </span>
                  results
                </p>
              </div>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={
                  data?.users.filter(
                    (user) =>
                      user.name.toLowerCase().includes(search.toLowerCase()) &&
                      user.name.toLowerCase() != "admin"
                  ).length
                }
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
