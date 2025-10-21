import { Icon } from '@iconify/react';
import {
  SiApple,
  SiCaddy,
  SiFramer,
  SiShadcnui,
  SiSimplenote,
  SiVercel, SiGithub,SiDiagramsdotnet
} from "react-icons/si";
export default function Techstack() {
  return (
    <div className="min-h-140 bg-black flex flex-col items-center text-white">
      <div className="title flex flex-col items-center">
        <div className="font-bold text-2xl">Technology & Tools</div>
        <p className="text-center text-xs px-5">i do belive good tools make our work feels easier so
          this is the tools that ive breen used and Technology help us pick what things we want to create</p>
      </div>
      <div className="tech ">
        <div className="flex flex-col gap-2 scale-200 mt-20 items-center">
          <div className="lang flex gap-2 justify-center">
            <Icon icon='logos:dart'/>
            <Icon icon='logos:javascript'/>
            <Icon icon='logos:typescript-icon'/>
            <Icon icon='logos:python'/>
          </div>
          <div className="framework flex gap-2">
            <Icon icon='logos:flutter'/>
            <Icon icon='logos:vite'/>
            <Icon icon='logos:react'/>
            <Icon icon='logos:tailwindcss-icon'width={25} />
            <Icon icon='logos:nextjs-icon'/>
          </div>
          <div className="framework flex gap-2">
            <Icon icon='logos:supabase-icon'/>
            <Icon icon='logos:postgresql'/>
            <Icon icon='logos:fastapi-icon'/>
            <Icon icon='logos:firebase-icon'/>
          </div>
        </div>
      </div>

      <div className="tools">
        <div className="flex flex-col gap-2 scale-200 mt-30">
          <div className="lang flex gap-2 justify-center">
            <Icon icon='logos:linux-mint'/>
            <Icon icon='logos:brave'/>
            <Icon icon='logos:visual-studio-code'/>
            <SiApple />
            <Icon icon='logos:android-icon' width={23}/>
            </div>
          <div className="framework flex gap-2 justify-center">
            <Icon icon='logos:figma'/>
            <SiFramer />
            <Icon icon='logos:dribbble-icon'/>
            <SiShadcnui />
            <div className="bg-white rounded">
            <SiDiagramsdotnet color='orange'/>
            </div>
            <SiSimplenote color='#3361CC'/> 
          </div>
          <div className="framework flex gap-2 items-center justify-center">
            <SiVercel />
            <Icon icon='logos:npm-icon'/>
            <Icon icon='logos:nodejs'/>
            <Icon icon='logos:docker-icon'/>
            <Icon icon='logos:bun'/>
          </div>
          <div className="framework flex gap-2 items-center justify-center">
            <Icon icon='logos:postman-icon'/>
            <Icon icon='logos:git-icon'/>
            <SiGithub />
            <SiCaddy />
          </div>
        </div>
      </div>
      <div className="mt-20 text-xs font-bold font-mono animate-pulse">and many more..</div>
    </div>
  )
}
