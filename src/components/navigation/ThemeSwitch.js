import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Asleep, Awake } from "@carbon/icons-react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative h-6 w-6">
      <button
        className="block dark:hidden absolute inset-0 group"
        onClick={!mounted ? () => {} : () => setTheme("dark")}
      >
        <LightModeOutlinedIcon className="text-black/[.87] dark:text-white/[.87] absolute inset-0 transition duration-300 group-hover:text-blue-600" />
      </button>
      <button
        className="hidden dark:block absolute inset-0 group"
        onClick={!mounted ? () => {} : () => setTheme("light")}
      >
        <DarkModeOutlinedIcon className="text-black/[.87] dark:text-white/[.87] absolute inset-0 transition duration-300 group-hover:text-blue-500" />
      </button>
    </div>
  );
};

export default ThemeSwitch;
