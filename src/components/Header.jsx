import '../stylings/Header.css';
import IconBtn from './IconBtn';
import { NAV_LINKS } from '../data';


const Header = () => {

    return (
        <>
            <header className='header'>
                <nav>
                    <h1 className='brand-name'>Bandage</h1>

                    <ul className='nav-links'>
                        {NAV_LINKS.map((link, index) => (
                            <li key={index}>{ link }</li>
                       ))}
                    </ul>
                </nav>

                <div className='header-btns'>
                    <IconBtn icon='person' value='Login / Register' />
                    <IconBtn icon='search' />
                    <IconBtn icon='shopping_cart' />
                    <IconBtn icon='favorite' />
                </div>
            </header>
           
        </>
    );
};

export default Header;