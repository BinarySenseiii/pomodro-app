export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col bg-bg-color h-screen w-full">
      <h1 className="font-kumbh-sans text-font-color font-bold text-3xl">pomodoro</h1>
      <div className="flex justify-around items-center bg-ui-components rounded-full p-2 text-font-color font-bold w-96">
        <h2 className="bg-orange-timer p-4 rounded-full text-ui-components">pomodoro</h2>
        <h2>short break</h2>
        <h2>long break</h2>
      </div>
    </div>
  );
}
