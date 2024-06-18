'use client'
import { skillsData } from '../utils/skills';
import Marquee from "react-fast-marquee";
import SkillIcon from '../utils/skillsIcon'; // Adjust the path as needed

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] mx-auto max-w-[50vw]"
    >
      {/* Background strip */}
      <div className="w-[50px] h-[50px] bg-violet-100 rounded-full absolute top-6 left-[42%] transform -translate-x-1/2 filter blur-3xl opacity-20" />

      {/* Skill header */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Skill title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Skills marquee */}
      <div className="w-full my-12 overflow-hidden">
        <Marquee
          className="flex justify-center"
          direction="left"
          speed={80} // Adjust speed as needed
          pauseOnHover
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-[10rem] h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative cursor-pointer"
              key={id}
            >
              {/* Skill item */}
              <div
                className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 transition-all duration-500 rotate"
              >
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <SkillIcon skill={skill} />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
