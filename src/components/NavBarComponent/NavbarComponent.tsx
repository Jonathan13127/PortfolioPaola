import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavItem {
    label: string;
    href: string;
}

const NavBarComponent: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { label: 'À PROPOS', href: '#about' },
        { label: 'MES VALEURS', href: '#values' },
        { label: 'MES COMPÉTENCES', href: '#skills' },
        { label: 'MES RÉALISATIONS', href: '#achievements' },
        { label: 'CONTACT', href: '#contact' },
    ];

    return (
        <header className="fixed w-full bg-white z-20 border-black border-b-2">
 
<div className="hidden lg:flex w-full h-30">
    <nav className="w-full border-gray-200 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full flex items-center h-30">

                {/* --- Colonne gauche : LOGO --- */}
                <div className="flex-1 flex items-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="8" fill="#F59E0B" />
                            {[...Array(12)].map((_, i) => {
                                const angle = (i * 30 * Math.PI) / 180;
                                const x1 = 50 + 15 * Math.cos(angle);
                                const y1 = 50 + 15 * Math.sin(angle);
                                const x2 = 50 + 30 * Math.cos(angle);
                                const y2 = 50 + 30 * Math.sin(angle);
                                return (
                                    <line
                                        key={i}
                                        x1={x1}
                                        y1={y1}
                                        x2={x2}
                                        y2={y2}
                                        stroke="#F59E0B"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />
                                );
                            })}
                        </svg>
                    </div>
                </div>

                {/* --- Colonne centre : Liens --- */}
                <div className="flex justify-center">
                    <div className="hidden md:flex space-x-10 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveItem(item.href)}
                                className={`text-2xl font-normal transition-colors duration-200 hover:font-semibold ${
                                    activeItem === item.href
                                        ? 'text-black font-bold'
                                        : ''
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- Colonne droite : VIDE --- */}
                <div className="flex-1"></div>

            </div>
        </div>
    </nav>
</div>


            <div className="lg:hidden w-full flex items-center justify-between h-30 px-6">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center">
                        {/* Ton SVG */}
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="8" fill="#F59E0B" />
                            {[...Array(12)].map((_, i) => {
                                const angle = (i * 30 * Math.PI) / 180;
                                const x1 = 50 + 15 * Math.cos(angle);
                                const y1 = 50 + 15 * Math.sin(angle);
                                const x2 = 50 + 30 * Math.cos(angle);
                                const y2 = 50 + 30 * Math.sin(angle);
                                return (
                                    <line
                                        key={i}
                                        x1={x1}
                                        y1={y1}
                                        x2={x2}
                                        y2={y2}
                                        stroke="#F59E0B"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />
                                );
                            })}
                        </svg>
                    </div>
                </div>

                <button
                    className="text-black"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>


                {isMenuOpen && (
                    <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
                        <div className="px-4 pt-2 pb-4 space-y-3">
                            <a href="#features" className="block text-gray-300 hover:text-purple-400">Features</a>
                            <a href="#pricing" className="block text-gray-300 hover:text-purple-400">Pricing</a>
                            <a href="#testimonials" className="block text-gray-300 hover:text-purple-400">Témoignages</a>
                            <a href="#faq" className="block text-gray-300 hover:text-purple-400">FAQ</a>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
};

export default NavBarComponent;
