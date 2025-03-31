import { ChevronRight } from "lucide-react"

export default function ViewAllButton() {
  return (
    <div className="flex justify-end w-full mt-[20px] cursor-pointer">
      <p className="text-orange-weak h-[50px] mr-1 text-[14px] font-bold">VER TODOS</p> 
      <ChevronRight className="text-orange-weak mr-15" /> 
    </div>
  )
}