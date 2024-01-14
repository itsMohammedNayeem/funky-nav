function Home() {
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li className="active">
            <a href="/" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
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
    </>
  );
}

export default Home;
