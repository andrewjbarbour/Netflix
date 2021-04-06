import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <div className="Footer">
              <section>
                <ul className="FooterMenu" id="FooterMenu1">
                    <li><a href="#audio-and-subtitles">Audio and Subtitles</a></li> 
                    <li><a href="#media-center">Media Center</a></li> 
                    <li><a href="#privacy">Privacy</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
              
                <ul className="FooterMenu" id="FooterMenu2">
                    <li><a href="#audio-description">Audio Description</a></li> 
                    <li><a href="#investor-relations">Investor Relations</a></li> 
                    <li><a href="#legal-notices">Legal Notices</a></li>
                </ul>

                <ul className="FooterMenu" id="FooterMenu3">
                    <li><a href="#help">Help</a></li> 
                    <li><a href="#jobs">Jobs</a></li> 
                    <li><a href="#cookie-preferences">Cookie Preferences</a></li>
                </ul>

                <ul className="FooterMenu" id="FooterMenu4">
                    <li><a href="#gift-cards">Gift Cards</a></li> 
                    <li><a href="#terms-of-use">Terms of Use</a></li> 
                    <li><a href="#corporate-information">Corporate Information</a></li>
                </ul>
              </section>
            </div>
        )
    }
}

export default Footer;