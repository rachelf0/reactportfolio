import React from 'react';
import gitHubLogo from "../../assets/GitHub-Mark.png"


function Footer() {
    return (
        <footer>
            <a className="footer-link" href="https://github.com/rachelf0">
                <img src={gitHubLogo} alt="GitHub Repository" width="64" height="64"/>
            </a>
        </footer>
    );
}

export default Footer;