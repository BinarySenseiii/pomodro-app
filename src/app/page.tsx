import Image from 'next/image';

import svgSettings from './assets/Shape 2.svg';

export default function Home() {
  return (
    <div className="flex justify-around items-center flex-col bg-bg-color h-screen w-full">
      <h1 className="font-kumbh-sans text-font-color font-bold text-3xl">pomodoro</h1>
      <div className="flex justify-between items-center bg-ui-components rounded-full p-1 text-font-color font-bold w-96">
        <h2 className="bg-orange-timer p-4 rounded-full text-ui-components">pomodoro</h2>
        <h2 className="p-4">short break</h2>
        <h2 className="p-4">long break</h2>
      </div>
      <div className="bg-gradient-to-tl from-gradient-color-1 to-gradient-color-2 w-96 h-96 rounded-full flex flex-col justify-center items-center text-font-color">
        <div className="border-8 absolute w-80 h-80 rounded-full border-orange-timer bg-ui-components"></div>
        <p className="font-bold font-kumbh-sans text-8xl z-10">00:00</p>
        <p className="uppercase font-kumbh-sans font-bold mt-5 z-10">r e s t a r t</p>
      </div>
      <div>
        <Image src={svgSettings} alt="settings icon" />
      </div>
    </div>
  );
}
