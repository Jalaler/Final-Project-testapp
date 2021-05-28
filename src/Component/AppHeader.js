import '../Style/AppHeader.css';
import React from 'react';

function AppHeader() {
    return (

        <header className="top-header">
            <div className="menu-item">
                <a href="/" className="home"><b>HOME</b></a>
                <a href="/subject" className="subject"><b>SUBJECT</b></a>
                <a href="/review" className="review"><b>REVIEW</b></a>
                <a href="/history" className="history"><b>HISTORY</b></a>
            </div>
            <div className="brand">
                <h2>MOD Checkup</h2>
            </div>
            <div className="login">
                <input type="button" className="login-button" value="LOGIN"></input>
            </div>
        </header>

    );
}

export default AppHeader;