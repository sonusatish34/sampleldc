import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
import Image from 'next/image';
import logo from '../../images/newlog.png';

const Layout = ({ children }) => {
    const backgroundImage = 'https://images.pexels.com/photos/9796251/pexels-photo-9796251.jpeg?auto=compress&cs=tinysrgb&w=600';

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* <header className="py-3 px-6 bg-white mx-3 rounded-b-md">
            <Header />
          </header> */}
            
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
