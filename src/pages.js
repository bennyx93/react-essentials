import React from "react";
import {Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>
            <nav>
                <Link to="services">Services</Link>
                <Link to="location">Location</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2>Services</h2>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h2>Location</h2>
        </div>
    );
}

export function Contact() {
    return (
        <h1>Contact</h1>
    );
}

export function Whoops404() {
    let location = useLocation();
    return (
        <h1>Reseource not found at {location.pathname}</h1>
    );
}