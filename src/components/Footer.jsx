"use client";
import { useEffect } from "react";
import Logo from "../assets/logo_PSM.png";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import AOS from "aos";

export default function Footers() {
  useEffect(() => {
    AOS.init({ duration: 400 });
  });

  return (
    <footer className="bg-indigo-900 lg:grid lg:grid-cols-3">
      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p data-aos="fade-right" data-aos-delay="100">
              <span className="  tracking-wide text-xl font-medium text-white">
                {" "}
                Hubungi Kami{" "}
              </span>
            </p>

            <p
              className="flex m-2 text-white mb-3 lg:text-base md:text-base text-sm"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <MapPinIcon className="h-auto w-6 me-2" />
              <span className="w-11/12">
                {" "}
                JL. Sadewa No.67, pendrikan Kidul, Kecamatan Semarang Tengah,
                Kota Semarang
              </span>
            </p>
            <p
              className="flex m-2 text-white mb-3 lg:text-base md:text-base text-sm"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <PhoneIcon className="h-6 w-6 me-2" />
              <span> 08979986887</span>
            </p>
            <p
              className="flex m-2 text-white mb-3 lg:text-base md:text-base text-sm"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <EnvelopeIcon className="h-6 w-6 me-2" />
              <span> gitadiannuswaudinus@gmail.com</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p
                className="font-medium text-white text-xl"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Link
              </p>

              <ul
                className="mt-6 space-y-4 text-sm"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <li>
                  <a href="/" className="text-white hover:opacity-75">
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a href="/news" className="text-white hover:opacity-75">
                    {" "}
                    News{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/organization"
                    className="text-white hover:opacity-75"
                  >
                    {" "}
                    Organization{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className="font-medium text-white text-xl"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {" "}
                Tentang Kami{" "}
              </p>

              <ul
                className="mt-6 space-y-4 text-sm"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <li>
                  <a href="/about us" className="text-white hover:opacity-75">
                    {" "}
                    Ketua{" "}
                  </a>
                </li>

                <li>
                  <a href="/about us" className="text-white hover:opacity-75">
                    {" "}
                    Visi Misi Organisasi{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/organization"
                    className="text-white hover:opacity-75"
                  >
                    {" "}
                    Struktur Organisasi{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-12 border-t border-blue-100 pt-4"
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex gap-6">
              <li>
                <a
                  href="https://www.facebook.com/psmudinus"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/psmudinus/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/psmudinus"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@psmudinus"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Tiktok</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://linktr.ee/psmgdn"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Linktree</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-white sm:mt-0">
              &copy; 2024. Gita Dian Nuswa Choir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
