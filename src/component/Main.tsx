import { useLanguage } from "../contexts/LanguageContext";
import "./Main.css";
import { useTheme } from "../contexts/ThemeContext";

const Main = () => {
	const { language } = useLanguage();
	const { theme } = useTheme();

	return (
		<main className={theme}>
			<h2>
				{language === "fr"
					? "Bienvenue dans cet atelier!"
					: "Welcome to this workshop!"}
			</h2>
			<p>
				{language === "fr"
					? "Les applis React sont constituées de composants.  Un composant, c’est un bout d’UI (User Interface, donc interface utilisateur) avec son comportement et son apparence propres.  Un composant peut être aussi petit qu’un bouton, ou aussi grand qu’une page entière."
					: "React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page."}
			</p>
		</main>
	);
};

export default Main;
