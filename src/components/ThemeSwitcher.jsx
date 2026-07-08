import themes from "../theme/colors";

function ThemeSwitcher({ setTheme }) {
  return (
    <div className="fixed top-28 right-4 z-50 rounded-2xl border border-white/10 bg-black/70 p-3 backdrop-blur-xl">
      <div className="flex gap-3">
        {Object.entries(themes).map(([name, color]) => (
          <button
            key={name}
            title={name}
            onClick={() => setTheme(color)}
            style={{ backgroundColor: color }}
            className="h-8 w-8 rounded-full border-2 border-white/30 transition hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
