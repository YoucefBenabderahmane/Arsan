// Home.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import backgroundVideo from '../assets/baba.mp4';


const Home = () => {
  const [t] = useTranslation("global");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const props = useSpring({
    opacity: isReady ? 1 : 0, // Set opacity based on isReady
    marginLeft: isReady ? '0%' : '-20%',
    config: { duration: 1000 },
  });

  return (
    <div name="home" className="home w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat relative">
      <video autoPlay loop muted className="absolute w-full h-full object-cover z-0">
        <source src="https://rr5---sn-5hne6nsk.googlevideo.com/videoplayback?expire=1719191927&ei=F3V4Zv-WGLCgi9oP0LSY4Aw&ip=148.251.127.35&id=o-AFHeeJ10Wurjdh2N9HOnGCfF-HJejJk3qmDb-AsvQOCo&itag=247&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=video%2Fwebm&rqh=1&gir=yes&clen=1831572&dur=15.014&lmt=1684386405357506&keepalive=yes&c=ANDROID_TESTSUITE&txp=531A224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgb6gOna67rw1FNkClbruMVJqJjWuYfJqPxJnlpQs5jFMCIQCQTPy-WZ35ubA8Cu_x6hHHaRgZxkhG7F1j7Orh5UYK7Q%3D%3D&redirect_counter=1&cm2rm=sn-4g5ezr7z&fexp=24350485&req_id=59ec533fbadea3ee&cms_redirect=yes&cmsv=e&mh=4S&mip=207.244.89.166&mm=34&mn=sn-5hne6nsk&ms=ltu&mt=1719170164&mv=D&mvi=5&pl=0&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRQIhAPyEw3R8hrVsZdVTbvIZxwz970sflm8xMgq_feN9hrfgAiBDxWAwIiKfqhoniM9HqzPfoo8xY4heDt05NCivG23H4Q%3D%3D" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div> {/* Overlay for better text visibility */}
      
      <div className="relative max-w-full mx-auto px-4 sm:px-8 font-alga flex flex-col justify-center text-center z-20">
        <animated.h1 style={props} className="text-white font-alga text-xl sm:text-4xl py-2 sm:py-4">
          {t("home.society")}
        </animated.h1>
        <animated.h2 style={props} className="text-5xl sm:text-6xl lg:text-9xl font-alga py-2 sm:py-4 text-white">
          {t("home.ARSANQCENTER")}
        </animated.h2>
        <animated.h2 style={props} className="text-xl sm:text-xl lg:text-3xl font-alga text-white">
          {t("home.undert")}
        </animated.h2>
      </div>
    </div>
  );
};

export default Home;
