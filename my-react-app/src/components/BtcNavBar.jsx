import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeProvider";

function BtcNavBar() {
    const {theme} = useContext(MyThemeContext);
        
        return (
            <nav className="BtcNavBar" style={{backgroundColor: theme.background, color: theme.foreground}}>
                <ul className="menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/bitcoin">Bitcoin Rates</NavLink></li>
                </ul> {/* ++ Add another page with route and component */}
            </nav>
        )
    }
    
export default BtcNavBar