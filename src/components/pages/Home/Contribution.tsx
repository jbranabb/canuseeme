export default function Contribution() {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-black gap-2">
        <div className="text-white text-xl font-bold text-center leading-none "> My Contribusions So far</div>
        <p className="text-white text-xs mb-2">Every commit tells a Story</p>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=jbranabb&theme=github-dark-blue&hide_border=true" alt="Gihtub Streaks" />
        <img src="/src/assets/contributions2.png" alt="Gihtub Contibutions" />
    </div>
  )
}
