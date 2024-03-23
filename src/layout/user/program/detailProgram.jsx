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
            <h1 className="text-4xl uppercase font-black mt-44 font-serif">
              {" "}
              News{" "}
            </h1>
          </div>
          <div className="flex justify-center font-bold">
            <BreadCrumb items={["news"]} />
          </div>
        </div>
      </div>
      <div className="bg-blue-700 relative top-[400px] pt-16">
        <div className=" bg-white rounded mx-16 p-8 mb-16">
          {loadingNews && loading ? (
            <Loading />
          ) : (
            <div className="flex">
              <div className="w-9/12">
                <div className="text-gray-900 text-center font-bold capitalize text-3xl mb-2">
                  {detailPrograms?.title}
                </div>
                <div className="text-gray-400 text-center text-base mb-2">
                  {dayjs(detailPrograms?.created_at).format(
                    "dddd, MMM D, YYYY h:mm A"
                  )}
                </div>
                <img
                  className="h-48 lg:h-auto my-3 rounded-2xl lg:w-full flex-none object-cover object-center mx-auto text-center overflow-hidden"
                  src={detailPrograms?.header_image}
                  alt="Gagal Load"
                />
                <p
                  className="my-html-content text-gray-900"
                  dangerouslySetInnerHTML={{ __html: detailPrograms?.content }}
                />
                {detailPrograms?.link ? (
                  <Link to={detailPrograms?.link}>
                    <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-2xl float-right">
                      Link Pembelian Tiket
                    </button>
                  </Link>
                ) : null}
              </div>
              <div className="w-3/12 mx-4">
                <Link to="/news">
                  <h1 className="text-blue-600 text-xl font-semibold hover:text-blue-400 my-4">
                    Baca juga :
                  </h1>
                </Link>
                {NewsData?.news.slice(0, 2).map((news) => (
                  <div className="rounded overflow-hidden shadow-lg h-fit flex flex-col my-1">
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
                <div className="border-b-2 border-blue-400 my-4" />
                <Link to="/programs">
                  <h1 className="text-blue-600 text-xl font-semibold hover:text-blue-800 my-4">
                    Program terbaru kami :
                  </h1>
                </Link>
                <ul class="max-w-md space-y-1 text-gray-500 font-medium  dark:text-gray-400">
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

        <Footers />
      </div>
    </div>
  );
}
