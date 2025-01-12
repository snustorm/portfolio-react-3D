import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState(true); // State for pulsing animation

    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const navLinks = t('navLinks', { returnObjects: true });

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setHighlight(false); 
        }, 10000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Chester
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img src={open ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-5">
                        <nav className="hidden sm:flex font-medium">
                            <ul className="nav-ul">
                                {navLinks.map(({ id, href, name }) => (
                                    <li key={id} className="nav-li">
                                        <a href={href} className="nav-li_a">
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <button
                            onClick={() => switchLanguage(i18n.language === 'en' ? 'zh' : 'en')}
                            className={`text-neutral-400 font-bold text-xl hover:text-white transition-colors ${
                                highlight ? 'pulse-highlight' : ''
                            }`}
                            aria-label="Switch language"
                        >
                            <FontAwesomeIcon icon={faLanguage} />
                        </button>
                    </div>
                </div>
            </div>

            <div className={`nav-sidebar ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <ul className="nav-ul">
                        {navLinks.map(({ id, href, name }) => (
                            <li key={id} className="nav-li">
                                <a href={href} className="nav-li_a">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;