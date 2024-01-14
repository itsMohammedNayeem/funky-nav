const About = () => {
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="index.html">
              <span>Home</span>
            </a>
          </li>
          <li className="active">
            <a href="about.html" aria-current="page">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="blog.html">
              <span>Blog</span>
            </a>
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
        <h1>About</h1>
      </main>
    </>
  );
};

export default About;
