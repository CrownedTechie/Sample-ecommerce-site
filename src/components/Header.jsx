import '../stylings/Header.css';
import IconBtn from './IconBtn';
import { NAV_LINKS_DESKTOP, NAV_LINKS_MOBILE } from '../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className='header'>
                <nav>
                    <h1 className='brand-name'>Bandage</h1>

                    <ul className='nav-links-desktop'>
                        {NAV_LINKS_DESKTOP.map((link, index) => (
                            <li key={index}>{ link }</li>
                        ))}
                    </ul>

                    { isMenuOpen && (<ul className="nav-links-mobile">
                            {NAV_LINKS_MOBILE.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.link}>{ link.name }</Link>
                                </li>
                            ))}
                    </ul>)}
                </nav>

                <div className='header-btns'>
                    <IconBtn icon='person' value='Login / Register' btnBoxStyling='iconBtn-person' />
                    <IconBtn icon='search' styling='iconBtn-search' />
                    <IconBtn icon='shopping_cart' styling='iconBtn-shoppingCart' />
                    <IconBtn icon='favorite' btnBoxStyling='iconBtn-favorite' />
                    <IconBtn icon={isMenuOpen ? 'menu_open' : 'menu'} btnBoxStyling='iconBtn-menu' iconClick={toggleMenu} />
                </div>
            </header>
           
        </>
    );
};

export default Header;