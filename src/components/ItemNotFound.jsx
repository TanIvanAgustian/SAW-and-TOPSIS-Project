import ExclamationMark from "../assets/tanda_seru.png";
export default function ItemNotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-black font-semibold capitalize text-2xl filter drop-shadow-xl">
      <img src={ExclamationMark} alt="" className="h-[200px] w-auto" />
      Item yang Anda cari tidak tersedia
    </div>
  );
}
