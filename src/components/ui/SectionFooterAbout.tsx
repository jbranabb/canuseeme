import { useNavigate } from "react-router-dom"
export default function SectionFooterAbout() {
  const navigate =  useNavigate()
  const navigatedToNextPage = ()=> {
    navigate("/work")
  }
  return (
  <div className="flex flex-col bg-black text-white items-center">
    <div className="font-bold text-xl text-center px-10 py-5 leading-none flex flex-col gap-2">You’ve seen who I am, now see what I can do
      <p className="text-xs font-normal">Explore my projects and ideas below.</p>
      <div className="">
      <button className="text-sm px-2 py-1 
      rounded-2xl mt-1 text-black bg-white font-medium transition-all duration-300 hover:drop-shadow-[0_0_15px_white] hover:scale-90"
      onClick={navigatedToNextPage}
      >My Work</button>
      </div>
    </div>
  </div>
  )
}
