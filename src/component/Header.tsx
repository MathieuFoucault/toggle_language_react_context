import { useLanguage } from "../contexts/LanguageContext";
import "./Header.css";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
	const { toggleLanguage } = useLanguage();
	const { toggleTheme } = useTheme();
	return (
		<header className="header">
			<h1>Toggle Language App</h1>
			<button className="switch-button" type="button" onClick={toggleLanguage}>
				Switch Language
			</button>
			<button className="switch-button" type="button" onClick={toggleTheme}>
				Changer de thème
			</button>
		</header>
	);
};

export default Header;
