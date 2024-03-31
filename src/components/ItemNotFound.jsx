import ExclamationMark from "../assets/tanda_seru.png";
export default function ItemNotFound() {
  return (
    <div className="w-full flex flex-col items-center text-center justify-center text-black font-semibold capitalize lg:text-xl md:text-base text-sm filter drop-shadow-xl my-6 py-20">
      <img src={ExclamationMark} alt="" className="lg:h-[200px] md:h-[150px] h-[100px] w-auto" />
      Item yang Anda cari tidak tersedia
    </div>
  );
}
