const Blog = () => {
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="index.html">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="about.html">
              <span>About</span>
            </a>
          </li>
          <li className="active">
            <a href="blog.html" aria-current="page">
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
        <h1>Blog</h1>
      </main>
    </>
  );
};

export default Blog;
