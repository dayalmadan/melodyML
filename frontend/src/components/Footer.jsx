import { Profiles } from '../enums/social-profiles';

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2022 MelodyML</p>
            <div className="footer-links">
                <a
                    href={Profiles.WEBSITE}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    kradriff.com
                </a>
                <a
                    href={Profiles.SPOTIFY}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="images/spotify-icon.png"></img>
                </a>
                <a
                    href={Profiles.APPLE_MUSIC}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="images/apple-music-icon.png"></img>
                </a>
                <a
                    href={Profiles.INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="images/instagram-icon.png"></img>
                </a>
            </div>
        </div>
    );
};

export default Footer;
