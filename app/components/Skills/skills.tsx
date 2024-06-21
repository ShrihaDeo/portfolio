'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

function Skills() {
  
  return (
    <div
      id="skills"
      className="relative z-50 my-1 lg:my-2 mx-auto max-w-[97vw]"
    >
       {/* Skill title */}
       <div className="flex justify-center mt-2 lg:py-4">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="text-[#1a1443] w-fit text-4xl lg:text-6xl px-5 mx-2 font-bold">
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
          speed={50} // Adjust speed as needed
          pauseOnHover
        >
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/OIP.6WAeauHzchaeQIHIwQt7twAAAA?rs=1&pid=ImgDetMain" alt="JavaScript" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">JavaScript</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/R.c3ba82a536fe4983dad4c06b578dcd5d?rik=F2s%2bS%2fWmkU2dew&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f584830f5cef1014c0b5e4aa1.png&ehk=nr30%2foGRF6ObcWbuK6%2b%2bzHxe3w8Jb0cawQ6zBp1sH3E%3d&risl=&pid=ImgRaw&r=0" alt="React" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">React</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://www.nicepng.com/png/full/80-803546_javascript-vector-transparent-node-js-logo-png.png" alt="Node.js" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">Node.js</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/OIP.d-cssZMmcDWJU_yKxt9abQHaFQ?rs=1&pid=ImgDetMain" alt="Next.js" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">Next.js</p>

          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" alt="CSS" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">CSS</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://clipground.com/images/html-logo-png-3.png" alt="HTML" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">HTML</p>
          </div>
          <div className="w-64 min-w-[10rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/R.a81ec894994b107448ec84f07feb0b6f?rik=AGEVK6UyAjUuPQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fpython-logo-transparent%2fpython-logo-transparent-9.png&ehk=CDexlAZjyQXRqtsTUdrBS2HDF%2fTK%2fcsRifoPtWrK2Es%3d&risl=&pid=ImgRaw&r=0" alt="Python" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">Python</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912097/git-icon-md.png" alt="Git" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">Git</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png" alt="SQL" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">SQL</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/R.861e957dcd59ec3ed6c3384503a33be4?rik=nYf5WW1%2bW%2f32HQ&pid=ImgRaw&r=0" alt="TypeScript" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">TypeScript</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/OIP.7khrXvKlEjzsh2VKsc_cAAHaHa?rs=1&pid=ImgDetMain" alt="Java" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">Java</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_line_logo_icon_146579.png" alt="C#" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">C#</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/R.8809d88831c6cada4e8cdea0e9a0633d?rik=SEDA7savsCHorg&pid=ImgRaw&r=0" alt="Visual Studio" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">Visual Studio</p>
          </div>
          <div className="w-64 min-w-[20rem] flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg bg-[#11152c] text-white p-16 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/OIP.dpJ0MVc71l8mOcROsAh_5gHaIL?rs=1&pid=ImgDetMain" alt="C" className="h-20 mb-4" />
            <p className="text-base sm:text-xl">C</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
