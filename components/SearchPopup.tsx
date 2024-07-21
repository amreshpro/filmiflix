import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchPopup() {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string | "">("");
  const onSearchHandler = () => {
    if (searchText.length!=0) {
      router.push(`/search/${searchText}`);
    }
  };

  return (
    <div className=" z-50 absolute  top-24 w-screen flex  justify-center px-2 py-2">
      <input
        type="text"
        value={searchText}
        onKeyUp={onSearchHandler}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search your movie... "
        className="outline-none px-2 w-[30vw] h-10 bg-pink-100 text-black sm:h-8 md:w-[80vw] sm:w-[90vw] py-1 text-2xl sm:text-xl"
      />
      <Link
        href={`/search/${searchText ==''? '#':searchText}`}
        onKeyDown={onSearchHandler}
        className="text-xl flex items-center bg-red-500 text-white px-4 sm:px-2 "
      >
        <IoSearchOutline />
      </Link>
    </div>
  );
}
