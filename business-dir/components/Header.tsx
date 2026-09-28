import { link } from "fs";
import SearchBar from "./SearchBar";
export default function Header() {
  const navLinks = [
    { name: "الصفحة الرئيسية", href: "#" },
    { name: "اكتشف", href: "#" },
    { name: "من نحن؟", href: "#" },
    { name: "تواصل", href: "#" },
  ];
  return (
      <header className="hero">

      {/* Overlay */}
  <div className="overlay"></div>

  {/* Navbar */}
  <nav className="navbar">
    <div className="logo">Souq Guide</div>

    <ul className="nav-links">
      {navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  </nav>

  {/* Content */}
  <div className="hero-content">
    <h1 className="fade-up delay-1">اكتشف أفضل المحلات في السويداء</h1>
    <p className="fade-up delay-2">دليل شامل لكل ما تحتاجه</p>

    <div className="search-container fade-up delay-3">
  <SearchBar />

</div>
  </div>

</header>
  );
}