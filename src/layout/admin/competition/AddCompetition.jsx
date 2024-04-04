import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GraphQlInputCompetition } from "../../../graphql/GraphQlCompetition";
import Alert from "../../../components/Alert";
import dayjs from "dayjs";

export default function AddCompetition() {
  const [isAlert, setIsAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const {AddCompetition,loading,error} = GraphQlInputCompetition()

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

  const formik = useFormik({
    initialValues: {
      name:"",
      date:"",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Tolong Masukkan Nama Kompetisi!!"),
      date: Yup.string().required("Tolong Masukkan Tanggal Kompetisi Berlangsung!!"),
    }),
    onSubmit: async () => {
      await AddCompetition({
        variables: {
          object: {
            name: formik.values.name,
            date: dayjs(formik.values.date),
          },
        },
      });
      openAlert("success", "Data Baru Berhasil Ditambahkan!!!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="relative">
        <div className="w-full">
          <div className="my-6">
            <label
              for="success"
              className="block mb-2 ms-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Nama Kompetisi
            </label>
            <input
              type="text"
              id="name"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="Nama Kompetisi"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500 text-sm ms-2 mt-2">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className="my-6">
            <label
              for="success"
              className="block mb-2 ms-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Waktu Pengadaan Kompetisi
            </label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
            {formik.errors.date && formik.touched.date && (
              <div className="text-red-500 text-sm ms-2 mt-2">
                {formik.errors.date}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full mt-6 justify-end ">
        {/*Submit button*/}
        <div className="text-center">
          {loading ? (
            <button
              id="btn_add_product"
              className="text-p3 ms-3 mb-3 w-fit px-6 inline-block bg-blue-700 rounded-full py-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] disabled:bg-blue-400"
              type="submit"
              data-te-ripple-init=""
              disabled={!formik.dirty}
            >
              Simpan
            </button>
          ) : (
            <a
              disabled
              type="button"
              className="text-p3 ms-3 mb-3 w-fit px-6 inline-block bg-blue-700 rounded-full py-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] disabled:opacity-75"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </a>
          )}
        </div>
      </div>
      {isAlert && (
        <Alert variant={variant} message={message} onClose={closeAlert} />
      )}
    </form>
  );
}
