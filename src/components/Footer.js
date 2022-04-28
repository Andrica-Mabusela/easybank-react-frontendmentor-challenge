import logo from '../images/logo.svg'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import youtubeIcon from '../images/icon-youtube.svg'
import pinterestIcon from '../images/icon-pinterest.svg'
import instagramIcon from '../images/icon-instagram.svg'



export default function App(){
    return (
        <footer>
            <div className="inner-footer">
                <div>
                    <img src={logo} alt="Not Found"  />
                    <p className="social">
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#">
                            <img src="" alt="" />
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </p>
                </div>

                <div>
                    <div>
                        <p><a href="#" className="footer-link">About Us</a></p>
                        <p><a href="#" className="footer-link">Contact</a></p>
                        <p><a href="#" className="footer-link">Blog</a></p>
                    </div>
                    <div>
                        <p><a href="#" className="footer-link">Careers</a></p>
                        <p><a href="#" className="footer-link">Support</a></p>
                        <p><a href="#" className="footer-link">Privacy Policy</a></p>
                    </div>
                </div>
                <div>
                    <button>Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}