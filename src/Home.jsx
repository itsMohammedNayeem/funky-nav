function Home() {
  return (
    <div className="grid grid-cols-[20rem_1fr] gap-[2rem] font-mono bg-[#123] m-0 text-[1.25rem] text-white h-screen w-screen">
      <nav className="bg-[#234] fixed top-0 bottom-0 left-0 p-[2rem]">
        <ul className="nav-list">
          <li className="active">
            <a href="/" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/">Another</a>
          </li>
          <li>
            <a href="/">Page</a>
          </li>
          <li>
            <a href="/">And another</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
}

export default Home;
