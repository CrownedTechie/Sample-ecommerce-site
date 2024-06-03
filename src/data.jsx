import trendingUp from "./assets/trending-up.png";
import bookReader from "./assets/bookReader.png";
import twoPager from "./assets/two-pager.png";
import hooli from "./assets/logo1.png";
import lyft from "./assets/logo2.png";
import piperHat from "./assets/logo3.png";
import stripe from "./assets/logo4.png";
import aws from "./assets/logo5.png";
import reddit from "./assets/logo6.png";
import instagram from './assets/instagram.png';
import youtube from './assets/youtube.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';


export const SOCIALS = [instagram, youtube, facebook, twitter];

export const NAV_LINKS_DESKTOP = ['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages'];


export const NAV_LINKS_MOBILE = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Product',
        link: '/product'
    },
    {
        id: 3,
        name: 'Pricing',
        link: '/pricing'
    },
    {
        id: 4,
        name: 'Contact',
        link: '/contact'
    },
]; 




export const LOGOS = [hooli, lyft, piperHat, stripe, aws, reddit];


export const SERVICECARD_DETAILS = [
    {
        id: 1,
        img: bookReader,
        title:'Easy Wins',
        text:'Get your best looking smile now!'
    },
    {
        id:2 ,
        img: twoPager,
        title:'Concrete',
        text:'Defalcate is most focused in helping you discover your most beautiful smile'
    },
    {
        id: 3,
        img: trendingUp,
        title:'Hack Growth',
        text:'Overcame any hurdle or any other problem.'
    }
];

export const FOOTER_LINKS = [
    {
        title: 'Company Info',
        items: ["About us", "Carrier", "We are hiring", "Blog"]
    },
    {
        title: 'Legal Items',
        items: ["About us", "Carrier", "We are hiring", "Blog"]
    },
    {
        title: 'Features',
        items: ["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"]
    },
    {
        title: 'Resources',
        items: ["IOS & Android", "Watch a Demo", "Customers", "API"]
    }
];