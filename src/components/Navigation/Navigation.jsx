import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc"}}>
            <NavLink to="/" style={({isActive}) => ({
                marginRight: "1rem",
                color: isActive ? "tomato" : "black",
            })}
            >
                Home

            </NavLink>

            <NavLink to="/movies"
            style={({isActive}) => ({
                color: isActive ? "tomato" : "black",
            })}
            >
               Movies

            </NavLink>
        </nav>
    )
}

export default Navigation;