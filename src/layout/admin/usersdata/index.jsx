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
import Alert from "../../../components/Alert";
import ModalConfirm from "../../../components/ModalConfirm";
import ItemNotFound from "../../../components/ItemNotFound";

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

  const [isAlert, setIsAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const openAlert = (variant, message) => {
    setIsAlert(true);
    setVariant(variant);
    setMessage(message);
    setTimeout(closeAlert, 2500);
  };
  const closeAlert = () => {
    setIsAlert(false);
    setVariant("");
    setMessage("");
  };

  const [deleteModalId, setDeleteModalId] = useState(null);
  const [deleteModalName, setDeleteModalName] = useState(null);

  const openDeleteModal = (id, name) => {
    setDeleteModalId(id);
    setDeleteModalName(name);
  };

  const closeDeleteModal = () => {
    setDeleteModalId(null);
    setDeleteModalName(null);
  };

  const handleDelete = async (idx) => {
    await DeleteUsers({
      variables: {
        id: idx,
      },
    });
    openAlert("success", "User Berhasil Dihapus");
    closeDeleteModal();
  };

  return (
    <div>
      {isAlert && (
        <Alert variant={variant} message={message} onClose={closeAlert} />
      )}
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

        <Link
          to="./adduser"
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl lg:text-sm md:text-sm text-xs p-2 px-4 lg:w-80 md:w-4/12 w-fit text-center flex items-center container justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tambahkan Anggota
          <PlusIcon className="lg:h-6 h-4 lg:w-6 w-4 ml-1" />
        </Link>
      </div>
      {loading && LoadingDelete ? (
        <Loading />
      ) : data?.users.filter(
          (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) &&
            user.name.toLowerCase() != "admin"
        ).length > 0 ? (
        <div>
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
                      <td className="border px-4 py-2 md:min-w-[250px]">
                        {user.name}
                      </td>
                      <td className="border px-4 py-2 md:min-w-[250px]">
                        {user.email}
                      </td>
                      <td className="border px-4 py-2 md:min-w-[120px]">
                        {user.voice_type}
                      </td>
                      <td className="border px-4 py-2 md:min-w-[180px]">
                        {user.position}
                      </td>
                      <td className="border px-4 py-2 md:min-w-[100px] text-center">
                        {user.angkatan}
                      </td>
                      <td className="border px-4 py-2 md:min-w-[150px]">
                        <div className="flex justify-center">
                          <Link
                            type="button"
                            className="text-green-700 border-1 border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500"
                            to={"./edituser/" + user.id}
                          >
                            <PencilIcon className="w-4 h-4" />
                            <span className="sr-only">Edit</span>
                          </Link>
                          <button
                            type="button"
                            className="text-red-700 border-1 border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ml-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
                            onClick={() => openDeleteModal(user.id, user.name)}
                          >
                            <TrashIcon className="w-4 h-4" />
                            <span className="sr-only">Delete</span>
                          </button>
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
      ) : (
        <ItemNotFound />
      )}

      {deleteModalId && (
        <ModalConfirm
          title="Hapus produk yang dipilih?"
          description={`User dengan nama ${deleteModalName} yang dipilih akan dihapus secara permanen`}
          labelCancel="Batal"
          labelConfirm="Hapus"
          variant="danger"
          onCancel={closeDeleteModal}
          onConfirm={() => handleDelete(deleteModalId)}
        />
      )}
    </div>
  );
}
