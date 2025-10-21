import { DiNodejs, DiVisualstudio } from "react-icons/di"
import { FaBrave } from "react-icons/fa6"
import {
  SiVite, SiJavascript, SiTypescript, SiTailwindcss,
  SiFlutter, SiBun, SiPython, SiReact, SiNextdotjs, SiDart,
  SiPostgresql, SiSupabase, SiFastapi, SiFirebase, SiDocker, SiLinux, SiGit,
  SiGithub, SiPostman, SiFigma, SiFramer, SiAndroidstudio, SiCaddy, SiSimplenote,
  SiApple, SiNpm, SiVercel, SiShadcnui
} from "react-icons/si"
import { Icon } from '@iconify/react';
export default function Techstack() {


  return (
    <div className="min-h-screen bg-black flex flex-col items-center text-white">
      <div className="title flex flex-col items-center">
        <div className="font-bold text-2xl">Technology & Tools</div>
        <p className="text-center text-xs px-5">i do belive good tools make our work feels easier so
          this is the tools that ive breen used and Technology help us pick what things we want to create</p>
      </div>
      <div className="tech">
        <div className="flex flex-col gap-2 scale-200 mt-10 items-center">
          <div className="lang flex gap-2 justify-center">
            {/* <SiDart color={iconColors.SiDart}/>
            <SiJavascript color={iconColors.SiJavascript} />
            <SiTypescript color={iconColors.SiTypescript} />
            <SiPython color={iconColors.SiPython}/> */}
            <Icon icon='logos:dart'/>
            <Icon icon='logos:javascript'/>
            <Icon icon='logos:typescript-icon'/>
            <Icon icon='logos:python'/>
          </div>
          <div className="framework flex gap-2">
            <SiFlutter />
            <SiVite />
            <SiReact />
            <SiTailwindcss />
            <SiNextdotjs />
          </div>
          <div className="framework flex gap-2">
            <SiSupabase />
            <SiPostgresql />
            <SiFastapi />
            <SiFirebase />
          </div>
        </div>
      </div>

      <div className="tools">
        <div className="flex flex-col gap-2 scale-200 mt-50">
          <div className="lang flex gap-2 justify-center">
            <SiLinux />
            <FaBrave />
            <DiVisualstudio />
            <SiAndroidstudio />
            <SiGit />
            <SiGithub />
          </div>
          <div className="framework flex gap-2">
            <SiFigma />
            <SiFramer />
            <SiApple />
            <SiNpm />
            <SiVercel />
            <SiShadcnui />
            <SiSimplenote />
          </div>
          <div className="framework flex gap-2">
            <DiNodejs />
            <SiPostman />
            <SiDocker />
            <SiCaddy />
            <SiBun />
          </div>
        </div>
      </div>
    </div>
  )
}
