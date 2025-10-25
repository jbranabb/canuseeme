export default function Footer() {
  return (
 <div className="min-h-50 bg-gradient-to-b from-black to-black/96 flex flex-col justify-between pb-2 pt-10">
  <div className="border-white/10 border-1 rounded-2xl mx-6 flex flex-col text-white p-2"> 
 <span className="font-bold text-sm">Jbranabb</span>
 <span className="font-medium text-xs text-white/80 mb-2">Somewhere between art and logic.</span>
 <div className="flex flex-col text-sm mb-2">
  <div className="flex flex-row gap-2 items-center">
    <span className="font-medium text-sm">Home</span>
    <span className="font-normal text-white/45 text-xs">about me</span>
  </div>
  <div className="flex flex-row gap-2 items-center">
    <span className="font-medium text-sm">Work</span>
    <span className="font-normal text-white/45 text-xs">My Projects</span>
  </div>
  <div className="flex flex-row gap-2 items-center">
    <span className="font-medium">Contact</span>
    <span className="font-normal text-white/45 text-xs">Dont Forget! </span>
  </div>
 </div>
 <hr className="text-white/20 py-1"/>
 <div className="text-xs flex flex-row justify-between px-1">
  © 2025 Built With Love
  <span className="">see ya!</span>
 </div>
  </div>
  <div className="text-white/30 font-bold text-7xl flex justify-center items-end">
    Jbranabb
    <div className="absolute bg-gradient-to-t from-black/100 to-black/0 h-30 w-full"></div>
    </div>
</div>
)
}
