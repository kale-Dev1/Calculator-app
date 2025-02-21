function ThemeToggle({ switchTheme, theme }) {
  return (
    <div className="switch-toggle switch-3 switch-candy">
      <input
        id="on"
        name="state-d"
        type="radio"
        checked={theme === "light"}
        onChange={() => switchTheme("light")}
      />
      <label htmlFor="on">☀️</label>

      <input
        id="na"
        name="state-d"
        type="radio"
        checked={theme === "purple"}
        onChange={() => switchTheme("purple")}
      />
      <label htmlFor="na" className="disabled">
        😈
      </label>

      <input
        id="off"
        name="state-d"
        type="radio"
        checked={theme === "dark"}
        onChange={() => switchTheme("dark")}
      />
      <label htmlFor="off">🌙</label>
    </div>
  );
}
export default ThemeToggle;
