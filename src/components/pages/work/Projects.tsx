export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
        <div className="mt-20 font-bold">These Are My Projects</div>
        <div className="flex flex-col">
          <div className="border-white/15 border-1 rounded-2xl p-6 mx-6">
          <img src="src/assets/1.png" alt="Projects Image" className='mb-2' />
          <span className="font-holycream text-white/90">Absolute Cinema.</span>
          <p className="text-xs mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minima!</p>
          <div className="flex flex-row gap-1">
          <div className="p-1 text-xs bg-white/10 rounded font-outfit">Next JS</div>
          <div className="p-1 text-xs bg-white/10 rounded font-outfit">Flutter</div>
          <div className="p-1 text-xs bg-white/10 rounded font-outfit">Next JS</div>
          </div>
          </div>
        </div>
    </div>
  )
}
