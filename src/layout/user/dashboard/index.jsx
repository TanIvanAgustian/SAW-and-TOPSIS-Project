"use client";

import CarouselItems from "../../../components/Carousel";
import Footers from "../../../components/Footer";
import Background from "../../../assets/background.mp4";
import AOS from "aos";
import { useEffect } from "react";
import ProgramsCards from "../../../components/ProgramsCard";
import GTS from "../../../assets/GTS.png";
import CHA from "../../../assets/CHA.png";
import Competition from "../../../assets/competition.png";
import Concert from "../../../assets/Concert.png";
import NCC from "../../../assets/NCC.png";
import NewsCard from "../../../components/NewsCard";
import { GraphQlNews } from "../../../graphql/GrpahQlNews";
import Loading from "../../../components/Loading";

export default function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const { NewsData, loadingNews, errorNews } = GraphQlNews();

  const programs = [
    {
      id: 1,
      title: "Concert",
      content: "Sample content for news 1...",
      imageUrl: Concert,
      link: "concert",
    },
    {
      id: 2,
      title: "Choir Humanity Action",
      content: "Sample content for news 2...",
      imageUrl: CHA,
      link: "choir humanity action",
    },
    {
      id: 3,
      title: "Newcomers Concert",
      content: "Sample content for news 2...",
      imageUrl: NCC,
      link: "newcomers concert",
    },
    {
      id: 4,
      title: "Goes To School",
      content: "Sample content for news 2...",
      imageUrl: GTS,
      link: "goes to school",
    },
    {
      id: 5,
      title: "Competition",
      content: "Sample content for news 2...",
      imageUrl: Competition,
      link: "competition",
    },
  ];

  const CarouselImages = [
    "https://img.antaranews.com/cache/1200x800/2023/07/26/IMG_20230725_232910.jpg.webp",
    "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/gallerybiro/2023/07/big/img_64c22997026ce0-49642292-15475447.jpeg",
    "https://cdn-u1-gnfi.imgix.net/post/large-39a65-img-20180807-wa0006-dfe3a47ba9af08ccea62a1f9ffa96e30.jpg?fit=crop&crop=faces%2Centropy&lossless=true&auto=compress%2Cformat&w=730&h=486",
  ];

  return (
    <div className="bg-blue-800">
      <video
        className="md:max-lg:h-full min-h-[25rem] object-cover w-full rounded-lg aspect-w-16 aspect-h-9"
        autoPlay
        muted
        loop
      >
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 lg:h-[50rem] md:h-[35rem] h-[25rem]  flex flex-col justify-center items-center text-white">
        <div className="flex justify-center font-bold p-2">
          <h1 className="md:text-4xl lg:text-5xl text-2xl uppercase">
            {" "}
            Selamat Datang{" "}
          </h1>
        </div>
        <div className="flex justify-center lg:p-6 md:p-2 font-bold">
          <h1 className="flex items-center lg:text-3xl md:text-xl sm:text-lg text-base font-extrabold">
            Gita Dian Nuswa
            <span className="bg-blue-100 text-blue-800 lg:text-xl md:text-sm sm:text-xs text-xs font-semibold ms-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Official Website
            </span>
          </h1>
        </div>

        <div className="flex justify-center p-2  font-bold">
          <a
            href="https://www.youtube.com/@GitaDianNuswa"
            class="hover:animate-fast-waving me-3 inline-flex items-center justify-center lg:px-12 lg:py-6 px-6 py-3 lg:text-base sm:text-sm text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Youtube Channel
          </a>

          <a
            href="/about us"
            class="group inline-flex items-center justify-center lg:px-12 lg:py-6 px-6 py-3 lg:text-base sm:text-sm text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            About Us
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180 group-hover:animate-bounce-right"
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
          </a>
        </div>
      </div>

      <div className="m-3">
        <div className="lg:p-6 md:p-4 lg:m-9 md:m-5  bg-white rounded-lg">
          <h1
            data-aos="zoom-in-up"
            className="uppercase text-center mb-4 pt-4 lg:mx-2 md:mx-2 mx-8 lg:text-5xl md:text-3xl text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
          >
            Gita
            <mark className="px-2 py-0 bg-transparent text-blue-700">Dian</mark>
            Nuswa{" "}
            <mark class="lg:text-xl md:text-base text-sm ms-1 align-super px-2 py-0 text-white bg-blue-700 rounded dark:bg-blue-500">
              Official Website
            </mark>
          </h1>

          <blockquote
            data-aos="zoom-in-up"
            class="lg:text-xl text-base italic flex justify-center font-semibold text-center text-black"
          >
            <p className="lg:w-8/12 md:w-10/12 w-11/12">
              "Selamat datang di website official kami, tempat di mana setiap
              klik adalah petualangan baru. disini, kami mengundang Anda untuk
              menemukan dunia yang penuh warna dan pengetahuan yang tak
              terbatas. mari kita menjalin ikatan yang kuat dalam komunitas yang
              berbagi semangat dan visi. Terima kasih telah bergabung, mari kita
              mulai menjelajahi bersama!"
            </p>
          </blockquote>

          <div
            class="inline-flex items-center justify-center w-full"
            data-aos="zoom-in-up"
          >
            <hr class="w-64 h-1 lg:my-16 my-8 bg-gray-900 border-0 rounded dark:bg-gray-700" />
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

          <div data-aos="zoom-in-up">
            <CarouselItems images={CarouselImages} />
          </div>

          <div
            class="inline-flex items-center justify-center w-full"
            data-aos="zoom-in-up"
          >
            <hr class="w-64 h-1 lg:my-16 my-8 bg-gray-900 border-0 rounded dark:bg-gray-700" />
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

          <h1
            className="font-extrabold lg:text-3xl text-3xl ms-3 capitalize mb-3"
            data-aos="fade-up"
          >
            Our Program :
          </h1>
          <div className="w-full flex flex-wrap justify-center items-stretch">
            {programs.map((item) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3 flex justify-center items-center"
                key={item.id}
              >
                <ProgramsCards {...item} />
              </div>
            ))}
          </div>

          <div
            class="inline-flex items-center justify-center w-full"
            data-aos="zoom-in-up"
          >
            <hr class="w-64 h-1 lg:my-16 my-10 bg-gray-900 border-0 rounded dark:bg-gray-700" />
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

          <h1
            className="font-extrabold text-3xl ms-3 capitalize"
            data-aos="zoom-in-up"
          >
            Recent News :
          </h1>
          <div className="w-full">
            {loadingNews ? (
              <Loading />
            ) : (
              <NewsCard data={NewsData?.news.slice(0, 4)} />
            )}
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
