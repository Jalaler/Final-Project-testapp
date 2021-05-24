import AppHeader from './AppHeader';
import React from "react";

import OpenMessage from './OpenMessage';
import SearchBar from './SearchBar';
import BeforeContent from './BeforeContent';
import Content from './Content';

function PageHome() {
    return (

        <div className="PageHome">
            <AppHeader />
            <OpenMessage />
            <SearchBar />
            <BeforeContent />
            <Content />
        </div>

    );
}

export default PageHome;