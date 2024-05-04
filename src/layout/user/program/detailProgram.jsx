import { useParams } from "react-router-dom";
import { GraphQlEvents } from "../../../graphql/GraphQlEvents";
import { GraphQlNews } from "../../../graphql/GrpahQlNews";
import BreadCrumb from "../../../components/Breadcrumb";
import Loading from "../../../components/Loading";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Footers from "../../../components/Footer";

export default function DetailPrograms() {
  const { id } = useParams();

  const { NewsData, loadingNews, errorNews } = GraphQlNews();
  const { data, loading, error } = GraphQlEvents();

  const detailPrograms = data?.events.find((element) => element.id == id);
  const otherPrograms = data?.events.filter((element) => element.id != id);

  console.log(detailPrograms);

  return (
    <div className="bg-blue-800">
      <div className="absolute h-[400px] w-full text-white bg-headerProgram bg-no-repeat bg-cover bg-scroll">
        <div className="bg-blue-600/40 h-full">
          <div className="flex justify-center p-2 font-bold">
            <h1 className="md:text-4xl lg:text-4xl text-2xl uppercase font-black mt-44">
              {" "}
              Program{" "}
            </h1>
          </div>
          <div className="flex justify-center font-bold">
            <BreadCrumb items={["program"]} />
          </div>
        </div>
      </div>
      <div className="bg-blue-700 relative top-[400px] lg:pt-9 md:pt-5">
        <div className="p-3">
          <div className=" bg-white rounded lg:mx-9 lg:mb-9 md:mx-5 md:mb-5 lg:p-6 md:p-4">
            {loadingNews && loading ? (
              <Loading />
            ) : (
              <div className="lg:flex flex-1">
                <div className="lg:w-9/12 w-full lg:px-0 px-4">
                  
                  <div className="font-black text-center capitalize mb-1 pt-3 lg:text-3xl md:text-2xl text-xl">
                    {detailPrograms?.title}
                  </div>
                  <div className="text-gray-400 text-center text-base mb-2">
                    {dayjs(detailPrograms?.created_at).format(
                      "dddd, MMM D, YYYY h:mm A"
                    )}
                  </div>
                  <img
                    className="h-full lg:max-h-[800px] w-full my-3 rounded-2xl lg:w-full flex-none object-cover object-center mx-auto text-center overflow-hidden"
                    src={detailPrograms?.header_image}
                    alt="Gagal Load"
                  />
                  
                  <p
                    className="my-html-content text-gray-900"
                    dangerouslySetInnerHTML={{
                      __html: detailPrograms?.content,
                    }}
                  />
                  {detailPrograms?.link ? (
                    <Link to={detailPrograms?.link} className="flex lg:justify-end md:justify-end justify-center">
                      <button className="bg-red-700 flex hover:bg-red-900 text-white font-bold py-2 px-4 rounded-2xl">
                        Link Pembelian Tiket
                      </button>
                    </Link>
                  ) : null}
                </div>
                <div className="lg:w-3/12 w-full lg:mx-4 lg:px-0 px-3">
                  <div className="grid grid-cols-1">
                    <Link to="/news">
                      <h1 className="text-blue-600 text-xl font-semibold hover:text-blue-400 my-4">
                        Baca juga :
                      </h1>
                    </Link>
                    <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                      {NewsData?.news.slice(0, 2).map((news) => (
                        <div className="rounded overflow-hidden shadow-lg lg:h-fit md:h-full sm:h-full h-fit flex flex-col my-1 lg:mx-0 md:mx-3 sm:mx-3">
                          <img
                            className="w-full h-48 object-cover object-center"
                            src={news.image}
                            alt={news.title}
                          />
                          <div className="flex-grow px-3 py-4">
                            <div className="font-bold text-base mb-2">
                              {news.title}
                            </div>
                            <p
                              className="text-gray-700 text-sm max-h-16 text-ellipsis overflow-hidden break-words"
                              dangerouslySetInnerHTML={{ __html: news.content }}
                            />
                          </div>
                          <div className="group px-6 mb-3 flex justify-center">
                            <Link to={"/news/" + news.id}>
                              <a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Read More
                                <svg
                                  className="w-3.5 h-3.5 ms-3 rtl:rotate-180 group-hover:animate-bounce-right"
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
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-b-2 border-blue-400 my-4" />
                  <h1 className="text-blue-600 lg:text-xl md:text-xl text-lg font-semibold hover:text-blue-800 my-4">
                    Program terbaru kami :
                  </h1>
                  <ul class="max-w-md space-y-1 text-gray-500 font-medium lg:text-base mg:text-base text-sm dark:text-gray-400 pb-3">
                    {otherPrograms?.slice(0, 3).map((program) => (
                      <Link to={"/programs/content/" + program.id}>
                        <li className="my-2 hover:animate-pulse">
                          {program.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footers />
      </div>
    </div>
  );
}
