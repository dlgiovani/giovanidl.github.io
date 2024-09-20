const Info = ({ projectsCount, theme, handleChangeTheme }) => {

  return (
    <section className="flex flex-col items-start">
      <p className="font-semibold">giovani@pages</p>
      <p className="">-----------</p>
      <p className="flex gap-1">
        <span className="text-primary font-semibold">OS:</span>
        <span className="text-accent">GiOS Linux X86_64</span>
      </p>
      <p className="flex gap-1">
        <span className="text-primary font-semibold">Host:</span>
        <span className="text-accent">Browser VM LM40</span>
      </p>
      <p className="flex gap-1 w-[80%]">
        <span className="text-primary font-semibold">Theme:</span>
        <span className="text-accent flex items-center justify-between w-full gap-2">
          <span onClick={() => handleChangeTheme(-1)} className="select-none font-bold cursor-pointer text-xl material-symbols-outlined">arrow_back</span>
          <span className="bg-primary text-primary-content">{theme}</span>
          <span onClick={() => handleChangeTheme(1)} className="select-none font-bold cursor-pointer text-xl material-symbols-outlined">arrow_forward</span>
        </span>
      </p>
      <p className="flex gap-1">
        <span className="text-primary font-semibold">Terminal Font:</span>
        <span className="text-accent">Source Code Pro</span>
      </p>
      <p className="flex gap-1">
        <span className="text-primary font-semibold">Projects:</span>
        <span className="text-accent">&gt;{projectsCount}</span>
      </p>
      <div className="mt-4 flex flex-col">
        <div className="flex self-center w-full">
          <div className="flex-grow bg-accent text-accent-content p-1 text-sm">python</div>
          <div className="flex-grow bg-secondary text-secondary-content p-1 text-sm">fastapi</div>
          <div className="flex-grow bg-neutral text-neutral-content p-1 text-sm">django</div>
          <div className="flex-grow bg-primary text-primary-content p-1 text-sm">rest</div>
        </div>
        <div className="flex self-center w-full">
          <div className="flex-grow bg-neutral text-neutral-content p-1 text-sm">alembic</div>
          <div className="flex-grow bg-accent text-accent-content p-1 text-sm">json</div>
          <div className="flex-grow bg-primary text-primary-content p-1 text-sm">pydantic</div>
          <div className="flex-grow bg-secondary text-secondary-content p-1 text-sm">sqlalchemy</div>
        </div>
        <div className="flex self-center w-full">
          <div className="flex-grow bg-primary text-primary-content p-1 text-sm">javascript</div>
          <div className="flex-grow bg-secondary text-secondary-content p-1 text-sm">postgre/sql</div>
          <div className="flex-grow bg-accent text-accent-content p-1 text-sm">react</div>
          <div className="flex-grow bg-neutral text-neutral-content p-1 text-sm">apis</div>
        </div>
      </div>
    </section>
  )
}

export default Info;