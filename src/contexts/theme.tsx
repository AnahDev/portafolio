'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    themeName: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


// NUEVA FUNCIÓN - Agregar después de crear el ThemeContext y ANTES del ThemeProvider
const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'dark' // SSR default

    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) return savedTheme

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
}

// REVISAR ESTE ASUNTO! 

export function ThemeProvider({ children }: { children: ReactNode }) {

    const [themeName, setThemeName] = useState<Theme>(getInitialTheme);

    /*
    Funcionamiento:
-Se ejecuta cada vez que themeName cambia
-Aplica la clase CSS al elemento <html>
-Guarda el tema en localStorage para persistencia 
    */
    useEffect(() => {
        // console.log("themeName ", themeName);
        // Aplicar la clase al body/html cuando cambia el tema
        document.documentElement.className = themeName
        // Guardar en localStorage
        localStorage.setItem('theme', themeName)
    }, [themeName])


    // Alternar entre dark | light
    const toggleTheme = () => {
        setThemeName((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Hook personalizado para usar el theme context
export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme debe usarse dentro de un ThemeProvider')
    }
    return context
}

// Exportar también el contexto para compatibilidad
export { ThemeContext }



/* Solucion al parpadeo -  lineas eliminadas 
----------------------------------------------

 const [isFirstRender, setIsFirstRender] = useState<boolean>(true);


    useEffect(() => {
         Cargar el tema guardado del localStorage
        if (isFirstRender) {
            const savedTheme = localStorage.getItem('theme') as Theme | null
            console.log("savedTheme", savedTheme);
            if (savedTheme) {
                setThemeName(savedTheme)
            } else {
                 Detectar preferencia del sistema
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                setThemeName(prefersDark ? 'dark' : 'light')
                console.log('paz')
            }
        }

        setIsFirstRender(false);

    }, [])




*/