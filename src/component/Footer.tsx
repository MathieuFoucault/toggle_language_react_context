import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
	const { language } = useLanguage();
	const { theme } = useTheme();

	return (
		<footer className={theme}>
			<p>
				{language === "fr" ? "Tous droits réservés." : "All rights reserved."}
			</p>
		</footer>
	);
};

export default Footer;
