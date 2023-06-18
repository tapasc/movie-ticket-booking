import "./header.css";
import HeaderBarTop from "./HeaderBarTop/HeaderBarTop";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
export default function HeaderComponent() {
  return (
    <header className="header">
      <HeaderBarTop />
      <div className="header-body">
        <HeaderLogo />
        <HeaderSearch />
      </div>
    </header>
  );
}
