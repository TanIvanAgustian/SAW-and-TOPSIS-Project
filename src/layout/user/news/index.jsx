import Footers from "../../../components/Footer";
import BreadCrumb from "../../../components/Breadcrumb";
import NewsCard from "../../../components/NewsCard";
import { GraphQlNews } from "../../../graphql/GrpahQlNews";
import Loading from "../../../components/Loading";
import Search from "../../../components/Search";
import Pagination from "../../../components/Pagination";
import { useState } from "react";
import ItemNotFound from "../../../components/ItemNotFound";

export default function NewsDisplay() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [search, setSearch] = useState("");

  const { NewsData, loadingNews, errorNews } = GraphQlNews();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-blue-800">
      <div className="absolute h-[400px] w-full text-white bg-headerNews bg-no-repeat bg-cover bg-center bg-scroll">
        <div className="bg-blue-600/40 h-full">
          <div className="flex justify-center p-2 font-bold">
            <h1 className="md:text-4xl lg:text-4xl text-2xl uppercase font-black mt-44">
              {" "}
              News{" "}
            </h1>
          </div>
          <div className="flex justify-center font-bold">
            <BreadCrumb items={["news"]} />
          </div>
        </div>
      </div>

      <div className="bg-blue-700 relative top-[400px] lg:pt-9 md:pt-5">
      <div className="p-3">
        <div className=" bg-white rounded lg:mx-9 lg:mb-9 md:mx-5 md:mb-5 lg:p-6 md:p-4">
          <h1 className="font-black text-center capitalize mb-1 pt-3 lg:text-3xl md:text-2xl text-xl">
            News
          </h1>
          <h1 className="text-base text-center capitalize mb-3 text-gray-400">
            dapatkan berita faktual tentang paduan suara gita dian nuswa
          </h1>
          <Search
            id="search-input"
            placeholder="Cari Berita"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            value={search}
          />
          {loadingNews ? (
            <Loading />
          ) : NewsData?.news.filter((element) =>
              element.title.toLowerCase().includes(search.toLowerCase())
            ).length > 0 ? (
              <div>
            <NewsCard
              data={NewsData?.news
                .filter((element) =>
                  element.title.toLowerCase().includes(search.toLowerCase())
                )
                .slice(indexOfFirstItem, indexOfLastItem)}
            /><div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex lg:flex-1 md:flex-1 sm:items-center justify-between">
              <div>
                <p className="text-sm text-gray-700 hidden md:block lg:block">
                  Showing{" "}
                  <span className="font-medium">{indexOfFirstItem}</span> to{" "}
                  <span className="font-medium">
                    {Math.ceil(
                      NewsData?.news.filter((element) =>
                        element.title
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ).length / itemsPerPage
                    ) == currentPage
                      ? NewsData?.news.filter((element) =>
                          element.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ).length
                      : indexOfLastItem}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {NewsData?.news.filter((element) =>
                      element.title.toLowerCase().includes(search.toLowerCase())
                    ).length + " "}
                  </span>
                  results
                </p>
              </div>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={
                  NewsData?.news.filter((element) =>
                    element.title.toLowerCase().includes(search.toLowerCase())
                  ).length
                }
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div></div>
          ) : (
            <ItemNotFound />
          )}

          
        </div>
        </div>
        <Footers />
      </div>
    </div>
  );
}
