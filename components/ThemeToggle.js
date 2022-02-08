import { useTheme } from "next-themes";
import Sun from "../components/Sun";
import Moon from "./Moon";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="transition-300 focus-outline:electric-purple hover:electric-purple order-2 rounded-md bg-pearl-clear p-2 hover:ring-4 hover:ring-electric-purple focus:outline-none focus:ring-electric-purple dark:bg-onyx-clear"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ToggleButton;
