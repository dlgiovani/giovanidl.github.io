import { useEffect, useMemo, useState } from 'react';
import Buttons from './components/Buttons.jsx';
import Header from './components/Header.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Projects from './components/Projects.jsx';
import Song from './components/Song.jsx';
import Ascii from './components/Ascii.jsx';
import Info from './components/Info.jsx';
import About from './components/About.jsx';

function App() {

  const themes = useMemo(() => [
    "coffee",
    "night",
    "winter",
    "dim",
    "nord",
    "sunset",
    "dark",
    "cupcake",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "black",
    "luxury",
    "dracula",
    "autumn",
    "business",
    "lemonade",
  ], [])

  const [currentTheme, setCurrentTheme] = useState(0);
  function handleChangeTheme() {
    let nextTheme;
    if (currentTheme >= themes.length -1) {
      nextTheme = 0;
    } else {
      nextTheme = currentTheme + 1;
    }

    setCurrentTheme(nextTheme);
  }
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    const data = Promise.resolve(fetch('/data/projects.json'));
    data.then(async (r) => setMyProjects(await r.json()))
  }, [])

  useEffect(() => {
    if (!isLoadingScreen) document.documentElement.setAttribute('data-theme', themes[currentTheme]);
  }, [currentTheme, isLoadingScreen, themes])

  if (isLoadingScreen) return <LoadingScreen setIsLoadingScreen={setIsLoadingScreen} />

  return (
    <main className='w-full h-[85vh] bg-base-100 font-source-code-pro [&::selection]:color-success fadeInFromBlur'>
      <Header />
      {/* <Langs /> */}
      <section name="title" className='w-full text-center text-base-content h-[95vh] relative'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-end w-full sticky top-[5vh] md:top-[30vh] pb-4 gap-2'>
          <div className='flex flex-col lg:flex-row md:gap-2 items-center titleFade lg:pl-12'>
            <Ascii />
            <Info projectsCount={myProjects.length} theme={themes[currentTheme]} handleChangeTheme={handleChangeTheme} />
          </div>
          <div className='titleFade'>
            <Buttons />
          </div>
          <section className='fixed md:relative top-[10svh] right-0 md:top-auto flex flex-col justify-start md:justify-end gap-24 h-[53svh] md:h-full'>
            <About />
            <Song />
          </section>
        </div>
      </section>
      <Projects myProjects={myProjects} />
      <div className='flex material-symbols-outlined absolute -bottom-[12svh] opacity-50 md:opacity-100 md:-bottom-6 right-0 hover:cursor-pointer
      w-full md:w-12 px-8 pt-1 md:mx-6 text-6xl justify-center md:bg-neutral/25 md:hover:bg-neutral/80 rounded-full animate-bounce'
        onClick={() => window.scrollBy({ top: 300, behavior: 'smooth' })}>keyboard_arrow_down</div>
    </main>
  )
}

export default App;
