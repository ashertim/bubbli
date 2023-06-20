// import { useState } from 'react'
import '../css/Header.css'

function Header() {
    return (
        <div className="header dark-background">
            <section id="title-slogan">
                <a className="text-logo" href="./index.html">
                    BUBBLI
                </a>
                <h3>The Wine Dictionary</h3>
            </section>

            <section id="header-utility">
                <button className="primary-button" href="#">
                    Login
                </button>

                <form id="search" action="#">
                    <input type="text" className="search-bar" />
                    <button type="submit" className="secondary-button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </section>
        </div>
    )
}

export default Header;