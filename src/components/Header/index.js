import './style.css'
import logo from '../../assets/logo-hrnet.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src={logo} alt='Logo HRnet' />
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/employeesList'>Current Employees</NavLink>
            </nav>
        </header>
    )
}
export default Header