export default function ProfileCards() {
    return (
        <div className="flex flex-row rounded-2xl border px-6 py-4 m-2 border-white/15 bg-white/5">
            <div className="w-1/3 flex flex-col items-center ">
                <div className="overflow-hidden w-[100px] h-[150px] rounded-2xl ">
                    <img src="src/assets/me2.png"
                        alt="zoom test"
                        className="object-cover w-full h-full transition-[object-position] duration-700 ease-out hover:object-[center_10%]"
                    />
                </div>
                <span className="text-xs text-gray-400 mt-2">2 <span className="text-white">0 0 7</span></span>
            </div>
            <div className="ml-4 flex flex-col text-white w-2/3">
                <span className="text-xs font-mono">Hello Welcome in</span>
                <span className="text-xs font-bold  ">I&apos;m Jibranab</span>
                <span className="text-xs"> Just a developer who loves turning ideas into code — from backend logic to pixel-perfect UI.
                    Still learning, still building, always moving forward.</span>
                <span className="text-xs">Base In <span className="font-bold">TJQ, Indonesia</span></span>
                <div className="mt-1 text-[10px] text-gray-400 italic">
                    <p>Outside of coding, I love watching movies and tv show, tweaking my Linux setup,  
                    and exploring new tech just for fun — because curiosity keeps me alive ✨ 🎬</p>
                </div>
            </div>
        </div>
    )
}

 