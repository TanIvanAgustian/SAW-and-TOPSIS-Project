import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = ({ id, placeholder, onChange, handleKeyDown }) => (
    <div className="container flex md:my-3 lg:justify-between justify-center">
        <div className="relative">
            <div className="absolute md:top-4 top-3 left-3">
                <MagnifyingGlassIcon className="md:w-6 md:h-6 w-4 h-4 lg:mx-4 md:mx-4 mx-2 text-gray-300" />
            </div>
            <input
                type="text"
                className="md:h-14 h-10 rounded-[28px] lg:pl-16 md:pl-16 pl-11 border-[1px] border-gray-300 lg:w-[320px] md:w-[320px] w-[200px] placeholder:lg:text-base placeholder:md:text-base placeholder:text-sm"
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    </div>
);

export default Search;
