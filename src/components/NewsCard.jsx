import React from "react";
import { Link } from "react-router-dom";
import CHA from "../assets/CHA.png";
import dayjs from "dayjs";
import AOS from "aos";

export default function NewsCard({ data }) {
  AOS.init({ duration: 1000 });

  return (
    <div className="lg:p-3 md:p-6 p-6 grid lg:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-3 justify-center">
      {data.map((item) => (
        <div
          className="w-full lg:max-w-full lg:flex shadow-lg border-gray-400 border rounded-b-xl"
          data-aos="zoom-in-up"
        >
          <img
            className="h-48 lg:h-64 lg:w-80 w-full flex-none object-cover object-center rounded-t mx-auto lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src={item.image}
            alt="Gagal Load"
          />
          <div className="w-full bg-white px-4 pt-4 pb-12 flex flex-col justify-between leading-normal">
            <div className="mb-3">
              <p className="text-sm text-gray-600 flex items-center">
                {dayjs(item.created_at).format("MMM D, YYYY")}
              </p>
              <div className="text-gray-900 font-bold lg:text-2xl md:text-xl text-lg mb-2">
                {item.title}
              </div>
              <p
                className="text-gray-700 text-sm max-h-16 text-ellipsis overflow-hidden break-words"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
            <div className="flex absolute bottom-4 right-4 group">
              <Link to={"/news/" + item.id}>
                <a className="inline-flex items-center justify-center px-4 py-2 lg:text-sm text-xs font-medium text-center text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Read More
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180 group-hover:animate-bounce-right"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
