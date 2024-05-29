import '../stylings/Header.css';
import IconBtn from './IconBtn';
import DisplayList from './DisplayList';

const Header = () => {
    const NAV_LINKS = ['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages'];

    return (
        <>
            <header className='py-6 px-9 flex items-center justify-between'>

                <nav className='flex items-center justify-between w-6/12'>
                <h1 className='brand-name font-bold text-3xl'>Bandage</h1>

                    <ul className='nav-links flex gap-4 font-medium'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Pages</li>
                    </ul>
                </nav>

                <div className='header-btns flex gap-4 font-bold'>
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