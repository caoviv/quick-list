import "./NavbarStyles.css";

function Navbar() {
  return (
    <header>
      <nav>
        {/* site title with link to home page */}
        <a href="/" className="site-title">
          Quick List
        </a>
        <div>
        {/* seasonal recipe switch placeholder */}
          <button>SP</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
