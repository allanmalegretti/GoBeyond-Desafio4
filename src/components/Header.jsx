import React from "react"
import './Header.css'

const Header = () => {
    return (
        <section className="header">
            <div className="logo">
                <img src="https://www.corebiz.ag/wp-content/uploads/2020/06/logo-corebiz-global.svg" alt="logo" width="170"/>
            </div>

            <div className="headerMenu">
                <a href="https://www.corebiz.ag/pt/about/">a corebiz</a>
                <a href="https://www.corebiz.ag/pt/#framework-title">serviços</a>
                <a href="https://www.corebiz.ag/pt/cases/">cases</a>
                <a href="https://www.corebiz.ag/pt/contato/">contato</a>
            </div>
        </section>
    )
}

export default Header