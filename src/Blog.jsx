const Blog = () => {
  return (
    <div className="grid grid-cols-[20rem_1fr] gap-[2rem] font-mono bg-[#123] m-0 text-[1.25rem] text-white h-screen w-screen">
      <nav className="bg-[#234] sticky top-0 max-h-svh">
        <ul className="nav-list m-0 py-[2rem] grid gap-[2rem] [&>li>a]:text-white [&>li]:py-[1rem] [&>li]:rounded-[100vw_0_0_100vw] [&>li]:ml-[2rem] [&>li]:px-[2rem] [&>li.active]:bg-[#123] [&>li.active]:relative [&>li.active]:before:content-['_'] [&>li.active]:before:absolute [&>li.active]:before:w-[1rem] [&>li.active]:before:h-[1rem] [&>li.active]:before:right-0 [&>li.active]:before:bg-[#234] [&>li.active]:before:rounded-[0_0_100vw_0] [&>li.active]:before:top-[-1rem] [&>li.active]:before:shadow-[10px_10px_0_10px_#123]     [&>li.active]:after:content-['_'] [&>li.active]:after:absolute [&>li.active]:after:w-[1rem] [&>li.active]:after:h-[1rem] [&>li.active]:after:right-0 [&>li.active]:after:bg-[#234] [&>li.active]:after:rounded-[0_100vw_0_0] [&>li.active]:after:bottom-[-1rem] [&>li.active]:after:shadow-[10px_-10px_0_10px_#123]">
          <li>
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about">
              <span>About</span>
            </a>
          </li>
          <li className="active">
            <a href="/blog" aria-current="page">
              <span>Blog</span>
            </a>
          </li>
        </ul>
      </nav>
      <main className="p-[4rem]">
        <h1>Blog</h1>
      </main>
    </div>
  );
};

export default Blog;
