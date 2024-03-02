"use client";

import DisclosureItems from "../../../components/Disclosure";
import CarouselItems from "../../../components/Carousel";
import Footers from "../../../components/Footer";
import Background from "../../../assets/background.mp4";
import AOS from "aos";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const CarouselImages = [
    "https://img.antaranews.com/cache/1200x800/2023/07/26/IMG_20230725_232910.jpg.webp",
    "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/gallerybiro/2023/07/big/img_64c22997026ce0-49642292-15475447.jpeg",
    "https://cdn-u1-gnfi.imgix.net/post/large-39a65-img-20180807-wa0006-dfe3a47ba9af08ccea62a1f9ffa96e30.jpg?fit=crop&crop=faces%2Centropy&lossless=true&auto=compress%2Cformat&w=730&h=486",
  ];
  
  const Disclosure = [
    {
      title: "What is your refund policy?",
      content: "haloo",
    },
    {
      title: "What is your refund policy?",
      content: "haloo",
    },
    {
      title: "What is your refund policy?",
      content: "haloo",
    },
  ];

  return (
    <div className="bg-blue-800">
      <video className="h-full w-full rounded-lg" autoPlay muted loop>
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute h-full w-full top-80 text-white">
        <div className="flex justify-center p-4 font-bold">
          <h1 className="text-5xl uppercase">
            {" "}
            Selamat Datang{" "}
          </h1>
        </div>
        <div className="flex justify-center p-4 font-bold">
          <h1 className="flex items-center text-3xl font-extrabold">
            Gita Dian Nuswa
            <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              Official Website
            </span>
          </h1>
        </div>

        <div className="flex justify-center p-4 font-bold">
          <a
            href="https://www.youtube.com/@GitaDianNuswa"
            class="hover:animate-fast-waving me-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Youtube Channel
          </a>
          <a
            href="#"
            class="hover:animate-fast-waving inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Learn more
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
      <div className="p-6 m-12 bg-white">
        <h1 data-aos="zoom-in-up" className="uppercase text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Gita
          <mark className="px-2 py-0 bg-transparent text-blue-600">Dian</mark>
          Nuswa
          <mark class="text-xl ms-1 align-top px-2 py-0 mt-auto text-white bg-blue-600 rounded dark:bg-blue-500">
            Official Website
          </mark>
        </h1>

        <blockquote data-aos="zoom-in-up" class="text-xl italic flex justify-center font-semibold text-center text-black">
          <p className="w-8/12">
            "Selamat datang di website official kami, tempat di mana setiap klik
            adalah petualangan baru. disini, kami mengundang Anda untuk
            menemukan dunia yang penuh warna dan pengetahuan yang tak terbatas.
            mari kita menjalin ikatan yang kuat dalam komunitas yang berbagi
            semangat dan visi. Terima kasih telah bergabung, mari kita mulai
            menjelajahi bersama!"
          </p>
        </blockquote>

        <div class="inline-flex items-center justify-center w-full" data-aos="zoom-in-up">
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

        <div data-aos="zoom-in-up">
          <CarouselItems images={CarouselImages}/>
        </div>
        
        <div className="w-full px-4 py-16">
          <div className="grid grid-flow-col justify-stretch w-full max-w bg-white p-2">
            <DisclosureItems items={Disclosure} />
            <DisclosureItems items={Disclosure} />
            <DisclosureItems items={Disclosure} />
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
