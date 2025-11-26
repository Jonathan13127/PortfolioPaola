import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Sun from "../../assets/Sun.svg?react"


interface NavBarComponentProps {
    onHeightChange: (height: number) => void;
}

interface NavItem {
    label: string;
    href: string;
    isVisible: boolean;
}

const NavBarComponent: React.FC<NavBarComponentProps> = ({ onHeightChange }) => {

    // 1. Créez une référence pour la balise header
    const headerRef = useRef<HTMLElement>(null);
    const [activeItem, setActiveItem] = useState<string>('');
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    // 2. Mesurez la hauteur une fois que le composant est monté
    useEffect(() => {
        if (headerRef.current) {
            // Obtenir la hauteur réelle de la barre
            const height = headerRef.current.offsetHeight;

            // Envoyer la hauteur au composant parent (App.jsx)
            onHeightChange(height);
        }
    }, [onHeightChange]); // Déclenchez la mesure si la fonction de rappel change

    const navItems: NavItem[] = [
        { label: 'À PROPOS', href: '#about', isVisible: true },
        { label: 'MES VALEURS', href: '#values', isVisible: false },
        { label: 'MES COMPÉTENCES', href: '#skills', isVisible: true },
        { label: 'MES RÉALISATIONS', href: '#achievements', isVisible: true },
        { label: 'CONTACT', href: '#contact', isVisible: true },
    ];

    return (
        <header ref={headerRef} className="sticky flex items-center min-h-[10vh] top-0 w-full bg-white z-50 border-black border-b-2 p-3">

            <nav className="w-full h-full flex items-center">

                {/* --- Colonne gauche : LOGO --- */}
                <div className="w-1/10 flex items-center">
                    <div className="h-auto flex items-center justify-center">
                        <Sun className="h-12 w-12" />
                    </div>
                </div>

                {/* --- Colonne centre : Liens --- */}
                <div className="flex-1 flex px-3">
                    <div className="hidden md:flex justify-between items-center w-full">
                        {navItems
                            .filter((item) => item.isVisible !== false)
                            .map((item) => (

                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setActiveItem(item.href)}
                                    className={`text-base font-normal transition-colors duration-200 hover:font-semibold ${activeItem === item.href
                                        ? 'text-black font-bold' : ''}`}>
                                    {item.label}
                                </a>
                            ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBarComponent;
