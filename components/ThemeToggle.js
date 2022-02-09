import { useTheme } from "next-themes";
import Sun from "../components/Sun";
import Moon from "./Moon";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="transition-300 rounded-md bg-pearl-clear p-2 dark:bg-onyx-clear"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ToggleButton;
