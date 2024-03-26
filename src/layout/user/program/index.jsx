import { useParams } from "react-router-dom";
import Footers from "../../../components/Footer";
import BreadCrumb from "../../../components/Breadcrumb";
import { GraphQlEvents } from "../../../graphql/GraphQlEvents";
import { DisplayPrograms } from "../../../components/ProgramsCard";
import Search from "../../../components/Search";
import Loading from "../../../components/Loading";
import Pagination from "../../../components/Pagination";
import { useState } from "react";
import ItemNotFound from "../../../components/ItemNotFound";

export default function Programs() {
  const { ProgramType } = useParams();
  const { data, loading, error } = GraphQlEvents();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [search, setSearch] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const eventItems = data?.events.filter(
    (element) => element.program_name.toLowerCase() == ProgramType.toLowerCase()
  );

  return (
    <div className="bg-blue-800">
      <div className="absolute h-[400px] w-full text-white bg-headerProgram bg-no-repeat bg-cover bg-scroll">
        <div className="bg-blue-600/40 h-full">
          <div className="flex justify-center p-2 font-bold">
            <h1 className="text-4xl uppercase font-black mt-44">
              {" "}
              {ProgramType}{" "}
            </h1>
          </div>
          <div className="flex justify-center font-bold">
            <BreadCrumb items={[ProgramType]} />
          </div>
        </div>
      </div>
      <div className="bg-blue-700 relative top-[400px] pt-16">
        <div className=" bg-white rounded mx-16 p-8 mb-16">
          <h1 className="font-black text-3xl text-center capitalize mb-1">
            {ProgramType}
          </h1>
          <h1 className="text-base text-center capitalize mb-3 text-gray-400">
            dapatkan program faktual tentang paduan suara gita dian nuswa
          </h1>
          <Search
            id="search-input"
            placeholder="Cari Program"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            value={search}
          />
          {loading ? (
            <Loading />
          ) : eventItems?.filter((element) =>
              element.title.toLowerCase().includes(search.toLowerCase())
            ).length > 0 ? (
            <DisplayPrograms
              data={eventItems?.filter((element) =>
                element.title.toLowerCase().includes(search.toLowerCase())
              )}
            />
          ) : (
            <ItemNotFound />
          )}

          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{indexOfFirstItem}</span> to{" "}
                  <span className="font-medium">
                    {Math.ceil(
                      eventItems?.filter((element) =>
                        element.title
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ).length / itemsPerPage
                    ) == currentPage
                      ? eventItems?.filter((element) =>
                          element.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ).length
                      : indexOfLastItem}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {eventItems?.filter((element) =>
                      element.title.toLowerCase().includes(search.toLowerCase())
                    ).length + " "}
                  </span>
                  results
                </p>
              </div>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={
                  eventItems?.filter((element) =>
                    element.title.toLowerCase().includes(search.toLowerCase())
                  ).length
                }
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>

        <Footers />
      </div>
    </div>
  );
}
