import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Box from '@mui/material/Box';
function Home() {
  let ele1 = useRef(null)
  let ele2 = useRef(null)
  let ele3 = useRef(null)
  let ele4 = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    var tl1 = gsap.timeline({repeat: -1});
    tl1.to(ele1, {y: -10, duration: 1});
    tl1.to(ele1, {y: 0, duration: 1});

    var tl2 = gsap.timeline({repeat: -1});
    tl2.to(ele2, {y: -10, duration: 1});
    tl2.to(ele2, {y: 0, duration: 1});

    var tl3 = gsap.timeline({repeat: -1});
    tl3.to(ele3, {y: -10, duration: 1});
    tl3.to(ele3, {y: 0, duration: 1});

    var tl4 = gsap.timeline({repeat: -1});
    tl4.to(ele4, {y: -10, duration: 1});
    tl4.to(ele4, {y: 0, duration: 1});

    gsap.to('.left', {
      x: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".left",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to('.right', {
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".right",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
    
    const textBoxes = gsap.utils.toArray('.textbox');
    textBoxes.forEach((box, i) => {
      const anim = gsap.fromTo(box, {opacity: 0}, {duration: 1, opacity: 1});
      ScrollTrigger.create({
        trigger: box,
        start: "top 70%",
        animation: anim,
        toggleActions: 'play pause resume reset',
      });
    });
  })



  return (
    <div className="bg-black tracking-wider overflow-x-clip">
      {/* Section 1 */}
      <div className="h-screen relative">
              <img ref={el => ele1=el} src="https://www.flint.money/_next/image?url=%2Fhero-assets%2F4.webp&w=256&q=75" alt="1" className="left absolute h-32 md:h-40 aspect-square top-[20%] left-[10%]"/>
              <img ref={el => ele2=el} src="https://www.flint.money/_next/image?url=%2Fhero-assets%2F2.webp&w=256&q=75" alt="2" className="left absolute h-40 md:h-56 aspect-square bottom-[10%] left-[5%]"/>
              <img ref={el => ele3=el} src="https://www.flint.money/_next/image?url=%2Fhero-assets%2F3.webp&w=256&q=75" alt="3" className="right absolute h-32 md:h-40 aspect-square top-[20%] right-[10%]"/>
              <img ref={el => ele4=el} src="https://www.flint.money/_next/image?url=%2Fhero-assets%2Funtitled.webp&w=384&q=75" alt="4" className="right absolute h-40 md:h-56 aspect-square bottom-[10%] right-[5%]"/>
            
        <div className="z-20 relative h-full text-white flex flex-col justify-center items-center">
          <p className="mt-5 text-4xl md:text-7xl font-bold">Earn crypto every</p>
          <p className="mt-5 text-4xl md:text-7xl font-bold">second on Flint.</p>
          <p className="mt-7 text-base md:text-3xl font-medium">
          No lock-in. No hidden fees. Only secure yields for your crypto.
          </p>
          
            

          <Box>
            <div className="justify-center content-center">
            <form className="bg-white flex rounded-full pl-9 py-4 pr-9 flex-auto m-7 content-center ">
              <input type="email" placeholder="Enter your Email" className="flex-auto" />         
            </form>
            </div>
            
          </Box>
          <button className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500  text-black h-12 w-40 rounded-full flex justify-center items-center text-lg md:text-xl font-semibold  glow transition-shadow">
                Start Earning
              </button>
        </div>
        {/* bg circles */}
        <div className="z-10 absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-400 opacity-50 w-80 aspect-square rounded-full blur-[500px]"></div>
          <div className="bg-red-400 opacity-50  w-80 aspect-square rounded-full blur-[500px]"></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-auto flex text-center lg:text-left">
        <div className="sticky top-0 h-screen w-[45%] lg:flex sm:hidden justify-center items-center">
          <img src="https://www.flint.money/_next/image?url=%2Fright.png&w=1920&q=75" alt="devices" className="scale-50" />
        </div>
        <div className="h-auto text-white lg:w-[55%] flex flex-col sm:items-center sm:text-center space-y-10 md:space-y-0">
          <div className="h-[30vh] lg:h-screen w-full flex flex-col justify-center items-start pl-10 pr-20 textbox">
            <p className="lg:leading-[4.25rem] text-4xl lg:text-7xl font-bold mb-8">
            Maximised returns, minimised risks
            </p>
            <p className="lg:leading-normal text-base lg:text-2xl text-gray-400">
            Crypto wealth management is all about striking a balance. And we know how to. Earn returns on your coins, without overthinking the risks.
            </p>
          </div>
          <div className="h-[30vh] lg:h-screen w-full flex flex-col justify-center items-start pl-10 pr-20 textbox">
            <p className="lg:leading-[4.25rem] text-4xl lg:text-7xl font-bold mb-8">
            For a lot of coins, on a lot of chains
            </p>
            <p className="lg:leading-normal text-base lg:text-2xl text-gray-400">
            Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins you have, and some more, can be invested on Flint, using your favourite networks.
            </p>
          </div>
          <div className="h-[30vh] lg:h-screen w-full flex flex-col justify-center items-start pl-10 pr-20 textbox">
            <p className="lg:leading-[4.25rem] text-4xl lg:text-7xl font-bold mb-8">
            Where interest is earned every second
            </p>
            <p className="lg:leading-normal text-base lg:text-2xl text-gray-400">
            Don’t wait. Have your interest added to your portfolio literally every second. And watch your crypto wealth grow in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
