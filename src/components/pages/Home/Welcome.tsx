import { useEffect, useState } from "react"
export default function Welcome() {
  const [scroll, setScroll] = useState(0)
  const [visibilty, setVisible] = useState(false)
  useEffect(()=> {
    const handleScroll = () => {
      let currentscroll = window.scrollY
      if( scroll >= 240){
        setVisible(true)
      }else{
        setVisible(false)
      }
      setScroll(currentscroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) 
  },[scroll])
  console.log(visibilty)
  console.log(scroll)
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0D324A] flex flex-col">
      <div className="min-h-200 w-full flex flex-col justify-center items-center text-white">
        <div className="w-[80%] flex flex-col text-center">
          <span
            className="font-serif text-lg">The Future Developer turning your ideas into reality.</span>
          <span className="font-sans font-semibold text-3xl">An 18 year old fullstack developer passionate about building cool stuff.</span>
          <span className="text-xs font-mono text-gray-500 mt-2">Mobile | Website | Backend</span>
        </div>
      </div>
      <div className={`${visibilty ? 'opacity-0' : 'opacity-100'} flex justify-center mb-20 animate-bounce text-white font-medium text-xs hover:opacity-0 transition-opacity`}>Hey Lets Scroll Down</div>
    </div>

  )
}
