"use client"; // Obligatorio en Next.js para usar React Context

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { es } from '../languages/es';
import { en } from '../languages/en';

// Definimos los tipos para TypeScript
type Language = 'es' | 'en';
type Dictionary = typeof es;

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: keyof Dictionary['navbar'] | keyof Dictionary['about'] | keyof Dictionary['projects'], section?: keyof Dictionary) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('es');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    // El objeto que contiene ambos diccionarios
    const dictionaries = { es, en };

    // Función traductora. 
    const t = (key: string, section: keyof Dictionary = 'about') => {

        // Extraemos la sección y le decimos a TypeScript: 
        // "Trata a esta sección como un diccionario estándar de textos"
        const currentSection = dictionaries[language][section] as Record<string, string>;

        // Ahora podemos buscar tranquilamente
        return currentSection[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
    }
    return context;
};