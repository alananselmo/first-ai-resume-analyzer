import { Link, Links } from "react-router"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
            <p className="text-2xl font-bold text-gradient">Resumind</p>
        </Link>
        <Link to="/upload" className="primary-button w-fit"> 
            Upload Research
        </Link>
    </nav>
  )
}

export default Navbar