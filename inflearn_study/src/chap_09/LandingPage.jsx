import React from 'react';
import { useState } from 'react';
import ToolBar from './Toolbar';

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }
    
    return (
        <div>
            <ToolBar 
            isLoggedIn = {isLoggedIn}
            onClickLogin = {onClickLogin}
            onClickLogout = {onClickLogout}
            />
            <div style={{padding: 16}}>메인 페이지</div>
        </div>
    );
};

export default LandingPage;