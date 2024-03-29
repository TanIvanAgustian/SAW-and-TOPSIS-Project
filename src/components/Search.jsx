import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = ({ id, placeholder, onChange, handleKeyDown }) => (
    <div className="container flex lg:my-3">
        <div className="relative">
            <div className="absolute lg:top-4 top-3 left-3">
                <MagnifyingGlassIcon className="lg:w-6 lg:h-6 w-4 h-4 lg:mx-4 mx-2 text-gray-300" />
            </div>
            <input
                type="text"
                className="lg:h-14 h-10 rounded-[28px] pl-16 border-[1px] border-gray-300 lg:w-[320px] w-[200px]"
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    </div>
);

export default Search;
