const links = [
  { href: "#ai", label: "AI" },
  { href: "#work", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#selected", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ open, onToggle, onNavigate }) {
  return (
    <header className="nav">
      <a className="mark" href="#top" onClick={onNavigate}>
        AG
      </a>
      <button
        className="menu-btn"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={onToggle}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "open" : ""}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={onNavigate}>
            {link.label}
          </a>
        ))}
        <a className="nav-mail" href="mailto:aadityagaurav12@gmail.com" onClick={onNavigate}>
          aadityagaurav12@gmail.com
        </a>
      </nav>
    </header>
  );
}
