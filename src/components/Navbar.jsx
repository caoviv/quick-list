import "./NavbarStyles.css";

function Navbar() {
  return (
    <header>
      <nav>
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
