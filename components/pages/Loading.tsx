import { LuLoader2 } from "react-icons/lu";

export default function Loading() {
  return (
    <div className="fixed w-[98vw] h-[100vh] bg-orange-400 flex items-center justify-center ">
        <LuLoader2 className="animate-spin text-blue-700 text-3xl"/>
    </div>
  )
}