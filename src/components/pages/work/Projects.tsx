import { AbsoluteCinema } from "../../ui/ProjectsCard";
export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
        <div className="mt-20 mb-8 font-bold">Some Cool Stuff I’ve Built</div>
        <div className="flex flex-col">     
          <AbsoluteCinema />
        </div>
    </div>
  )
}
 