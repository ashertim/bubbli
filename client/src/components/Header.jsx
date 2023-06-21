// import { useState } from 'react'
import '../css/Header.css'

function Header() {
    return (
        <div className="header dark-background">
            <section id="title-slogan">
                <a className="text-logo" href="./index.html">
                    BUBBLI
                </a>
                <h3>The Wine <br></br> Dictionary</h3>
            </section>

            <section id="header-utility">
                <div id="header-utility-buttons">
                    <button id="favorites" className="primary-button">
                        <i className="fa-solid fa-star"></i> Favorites
                    </button>
                    <button id="login" className="primary-button" href="#">
                        <i className="fa-solid fa-user"></i> Login
                    </button>
                </div>

                <form id="search" action="#">
                    <input type="text" className="search-bar" placeholder="Search by wine name" />
                    <button type="submit" className="secondary-button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </section>
        </div>
    )
}

export default Header;