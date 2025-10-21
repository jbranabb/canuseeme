import { Timeline } from "../../ui/timeline"
export default function Journeys() {
  const data = [
    {
      title: " Past 2022",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I actually didn’t plan to take Software Engineering at first.
            When I entered vocational high school, I had no idea what I wanted to do — I even picked Marketing as my first choice.
            But during the placement test, I was assigned to Software Engineering (RPL). At first, I was confused and unsure if I could fit in.
            Still, I decided to keep going — and that decision completely changed how I see technology and myself.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I started learning whatever I needed to understand how things worked.
            I still remember one of my first experiments — a Python script that generated flowers.
            Honestly, it wasn’t even my code; I just cloned it from GitHub and ran it.
            But when it worked, I was so proud that I showed it to my crush.
            I kinda miss those days — when everything felt new and exciting.</p>

          <div
            className="grid grid-cols-2">
            <img src="src/assets/py3.png" alt=""
              className="max-h-50 object-cover grayscale hover:grayscale-0 transition-all duration-300 scale-90 hover:scale-100"
              height={200} width={200}
            />
            <img src="src/assets/py4.png" alt=""
              className="max-h-50 object-cover grayscale hover:grayscale-0 transition-all duration-300 scale-90 hover:scale-100"
              height={200} width={200}
            />
          </div>
        </div>
      )
    },
    {
      title: "2023 I Was Here",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            2023 was my curiosity hit a new level.
            I started diving deeper into tech — from web development to experimenting with new tools.
            That year, I installed WSL for the first time and explored the Linux environment just to understand how things worked under the hood.
            I even bought an Arduino and started tinkering with IoT projects, trying to see how the physical and digital worlds could connect.
            2023 was the year I realized that learning never stops — there’s always something new to explore.
          </p>
          <div
            className="grid grid-cols-2">
            <img src="src/assets/arduino.jpg" alt=""
              className="max-h-50 object-cover grayscale hover:grayscale-0 transition-all duration-300 scale-90 hover:scale-100"
              height={200} width={200}
            />
            <img src="src/assets/wsl.jpg" alt=""
              className="max-h-50 object-cover grayscale hover:grayscale-0 transition-all duration-300 scale-90 hover:scale-100"
              height={200} width={200}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            In 2024, I started focusing more on mobile development, especially with Java.
            It was my first step into building real mobile applications — not just learning syntax, but understanding how everything connects.
            That year, I built a project as part of my final requirement before moving up to 12th grade.
            It wasn’t perfect, but it made me realize how much I enjoyed turning ideas into something people could actually use.
          </p>
          <div
            className="grid grid-cols-2">
            <img src="src/assets/java.png" alt=""
              className="max-h-50 object-cover grayscale hover:grayscale-0 transition-all duration-300 scale-90 hover:scale-100"
              height={200} width={200}
            />
            <img src="src/assets/java2.png" alt=""
              className="max-h-50 object-cover grayscale hover:grayscale-0 transition-all duration-300 scale-90 hover:scale-100"
              height={200} width={200}
            />
          </div>

        </div>
      ),
    },
    {
      title: "Changelog - Keep Going",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            After all the lessons, I’m still learning new things. This year, I’ve been more into server development and exploring how everything connects behind the scenes.</p>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            But the biggest move in 2025 — I made Flutter my main framework.
            It’s where I feel most confident now.
            I understand how state management works, how to connect APIs, and how to turn ideas into real apps.
            Feels like I’ve found my zone.
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I’m planning to get a Mac someday and start learning Swift, but for now, I’m fully committed to my setup.
            Oh, and yeah — 2025 marks the year I officially switched to Linux.
            No dual boot, no turning back.  Feels kinda different, but in a good way.
            Just me, my terminal, and the freedom to build whatever I want. 🐧 </p>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0D324A] to-black">
      <Timeline data={data} />
    </div>
  )
}
