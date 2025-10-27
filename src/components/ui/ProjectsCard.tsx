interface params {
    title:string,
    subtitle:string,
    tools:string[]

}
export default function ProjectsCard(param : params) {
    return (<div className="border-white/15 border-1 rounded-2xl p-6 mx-6">
        <img src="src/assets/1.png" alt="Projects Image" className='mb-2' />
        <span className="font-holycream text-white/90">{param.title}</span>
        <p className="text-xs mb-1">{param.subtitle}</p>
        <div className="flex flex-row gap-1">
            {param.tools}
            </div>
    </div>
    )
}
