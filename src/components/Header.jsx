import '../stylings/Header.css';
import IconBtn from './IconBtn';
import DisplayList from './DisplayList';

const Header = () => {
    const NAV_LINKS = ['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages'];

    return (
        <>
            <header className='header'>

                <nav>
                <h1 className='brand-name'>Bandage</h1>

                    <ul className='nav-links'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Pages</li>
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