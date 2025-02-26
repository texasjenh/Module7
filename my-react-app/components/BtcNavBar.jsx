import { NavLink } from "react-router-dom";

function BtcNavBar () {
    return (
        <nav className='BtcNaVBar' syle={{backgroundColor: theme.background, color: theme.foreground}}>
            <ul className='menu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/bitcoin'>Bitcoin Rates</NavLink></li>
            </ul>
        </nav>
    )
}

export default BtcNavBar