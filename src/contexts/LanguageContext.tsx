import { createContext, type ReactNode, useContext, useState } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
	language: Language;
	toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("fr");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage has to be used within <LanguageProvider>");
	}
	return context;
};
