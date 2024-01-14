function App() {
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li className="active">
            <a href="index.html" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a>
              <about href="about.html">About</about>
            </a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="#">Another</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">And another</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}

export default App;
