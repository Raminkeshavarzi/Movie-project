import React from 'react';
import './Footer.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="FooterContainer">
                    <h2>Built By R<span className="hideText">amin</span> K <span className="hideText">eshavarzi</span></h2>
                    <ul className="FooterTabs">
                        <a className="FooterLink" href="https://github.com/Raminkeshavarzi" target="_blank">
                            <GitHubIcon />
						</a>
                        <a className="FooterLink" href="https://www.linkedin.com/in/keshavarziramin1996/" target="_blank">
                            <LinkedInIcon />
						</a>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;