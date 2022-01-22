import Link from "next/link"
import ToggleButton from "./ThemeToggle"

const Nav = () => {
  return (
    <div className="nav-wrap">
      <nav className="flex justify-between items-center mt-8">
        <div className="flex space-x-5">
          <a className="logo">
              <Link href='/'>&#8757;</Link>
          </a>
          <ul className="flex items-center space-x-3">
            
            <li className="text-sm">
              <Link href='projects'>projects</Link>
            </li>
            <li className="text-sm">
              <Link href='manga'>manga</Link>
            </li>
          </ul>
        </div>
        <ToggleButton />
      </nav>
    </div>
  )
}

export default Nav