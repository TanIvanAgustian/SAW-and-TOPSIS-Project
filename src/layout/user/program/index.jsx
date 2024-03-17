import { useParams } from "react-router-dom"
import Footers from "../../../components/Footer"
import BreadCrumb from "../../../components/Breadcrumb"
import HeaderImage from "../../../assets/Header-Image-Program.jpg"
import { GraphQlEvents } from "../../../graphql/GraphQlEvents"
import { DisplayPrograms } from "../../../components/ProgramsCard"

export default function Programs(){
    
    const {ProgramType} = useParams()

    const {data, loading, error} = GraphQlEvents()

    const eventItems = data?.events.filter((element) => element.program_name.toLowerCase() == ProgramType.toLowerCase())

    

    return(
        <div className="bg-blue-800">
      <div className="absolute h-[400px] w-full text-white bg-headerProgram bg-no-repeat bg-cover bg-scroll">
        <div className="bg-blue-600/40 h-full">
          <div className="flex justify-center p-2 font-bold">
            <h1 className="text-4xl uppercase font-black mt-44 font-serif"> {ProgramType} </h1>
          </div>
          <div className="flex justify-center font-bold">
            <BreadCrumb items={["programs", ProgramType]} />
          </div>
        </div>
      </div>
      <div className="bg-blue-700 relative top-[400px] pt-16">
        <div className=" bg-white rounded mx-16 p-8 mb-16">
          <DisplayPrograms data={eventItems}/>
        </div>
        <Footers/>
      </div>
    </div>
    )
}