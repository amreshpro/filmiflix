import { useThemeContext } from "@/providers/context";
import NAV_LINKS from "../constants/NAV_LINKS";
import Link from "next/link";

export default function Sidebar() {
  const { theme } = useThemeContext();
  return (
    <div
      className={` ${
        theme == "dark"
          ? "dark-menu"
          : "light-menu"
      } h-fit absolute right-8 top-16   w-36 rounded-xl z-50`}
    >
      <ul className="my-16 flex flex-col gap-4 text-2xl   justify-center  items-center mt-4">
        {NAV_LINKS?.map((link) => {
          const { id, path, title } = link;
          return (
            <li key={id}>
              <Link
                href={path}
                className="font-light hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-pink-500"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}