import ThemeToggle from "./ThemeToggle";

function Header({ switchTheme, theme }) {
  const hclass = {
    color: "white",
  };
  return (
    <div>
      <nav className="flex justify-between items-center mb-3.5">
        <h2 className={`${theme == "dark" ? hclass : ""}`}>Calc</h2>
        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-white text-sm">THEME</h3>
          <ThemeToggle theme={theme} switchTheme={switchTheme} />
        </div>
      </nav>
    </div>
  );
}
export default Header;
