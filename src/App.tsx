import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import Main from "./component/Main";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<Header />
				<Main />
				<Footer />
			</LanguageProvider>
		</ThemeProvider>
	);
}

export default App;
