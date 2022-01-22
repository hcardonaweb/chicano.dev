import { useTheme } from 'next-themes';
import Sun from '../components/Sun'
import Moon from './Moon';

const ToggleButton = () => {

const {theme, setTheme} = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-pearl-clear dark:bg-onyx-clear p-2 h-10 w-10 order-2 rounded-md"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      { theme === 'dark' ? <Moon /> : <Sun /> }
    </button>
  )
  
}

export default ToggleButton
