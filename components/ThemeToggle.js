import { useTheme } from 'next-themes';
import Sun from '../components/Sun'
import Moon from './Moon';

const ToggleButton = () => {

const {theme, setTheme} = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="rounded-md focus:outline-none hover:ring-4 focus:ring-electric-purple hover:ring-electric-purple focus:electric-purple hover:electric-purple bg-pearl-clear dark:bg-onyx-clear p-2 order-2"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      { theme === 'dark' ? <Moon /> : <Sun /> }
    </button>
  )
  
}

export default ToggleButton
