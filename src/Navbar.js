import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>
                VendingMachine
            </NavLink>
            <br />
            <NavLink to="/soda"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>
                Soda
            </NavLink>
            <br />
            <NavLink to="/chips"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>
                Chips
            </NavLink>
            <br />
            <NavLink to="/sardines"
                style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>
                Sardines
            </NavLink>
        </nav>
    );
}

export default NavBar;