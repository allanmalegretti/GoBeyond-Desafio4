import React from "react"
import './Footer.css'

const Footer = () => {
    return (
        <div className="footerRow">
            <div className="footerLeft">
                <div>
                    <h2 className="corebiz">corebiz.</h2>
                    <p className="direitos">direitos reservados, Corebiz 2021.</p>
                    <a className="link" href="https://pt-br.facebook.com/corebiz.ag/">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111392.png" alt="Facebook" className="icon" />
                    </a>
                    <a className="link" href="https://www.instagram.com/corebizag/">
                        <img src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" alt="Instagram" className="icon" />
                    </a>
                    <a className="link" href="https://www.linkedin.com/company/corebiz-brasil">
                        <img src="https://www.pngrepo.com/png/107799/512/linkedin.png" alt="Linkedin" className="icon" />
                    </a>
                </div>
                <div className="footerMenu">
                    <a href="https://www.corebiz.ag/pt/about/">a corebiz</a>
                    <a href="https://www.corebiz.ag/pt/#framework-title">serviços</a>
                    <a href="https://www.corebiz.ag/pt/cases/">cases</a>
                    <a href="https://www.corebiz.ag/pt/contato/">contato</a>
                </div>
            </div>

            <ul className="footerRight">
                <li className="enderecos">
                    <h3>.Brasil</h3>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                    <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                </li>
                <li className="enderecos">
                    <h3>.Argentina</h3>
                    <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                </li>
                <li className="enderecos">
                    <h3>.México</h3>
                    <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                </li>
                <li className="enderecos">
                    <h3>.Chile</h3>
                    <p>Roberto del Río 1137, Providencia.</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer