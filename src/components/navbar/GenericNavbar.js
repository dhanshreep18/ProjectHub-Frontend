import React, { useState, useEffect } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import Navbar from './Navbar';

const GenericNavbar = () => {  
    return(
        <LoginContext.Consumer>{(loginContext) => {
            const { userAuthenticationStatus, setUserAuthenticationStatus, userSignInInfo, setUserSignInInfo } = loginContext;
        
            if(userAuthenticationStatus && userSignInInfo !== null && userSignInInfo.role === 'student') {
                return (
                    <Navbar 
                        role='student' 
                        tab1='All Projects' route1='/all-projects'
                        tab2='Completed Projects' route2='/student/completed-projects'
                        tab3='Ongoing Projects' route3='/student/ongoing-projects'
                        buttonName='Sign Out' 
                    />
                );
            } else if(userAuthenticationStatus && userSignInInfo !== null && userSignInInfo.role === 'teacher') {
                return (
                    <Navbar 
                        role='teacher' 
                        tab1='All Projects' route1='/all-projects'
                        tab2='Guided Projects' route2='/teacher/guided-projects'
                        tab3='Ongoing Projects' route3='/teacher/ongoing-projects'
                        buttonName='Sign Out' 
                    />
                );
            } else if(userAuthenticationStatus && userSignInInfo !== null && userSignInInfo.role === 'admin') {
                return (
                    <Navbar 
                        role='admin' 
                        tab1='Students' route1='/admin/input-students-data'
                        tab2='Teachers' route2='/admin/input-teachers-data'
                        tab3='All Projects' route3='/all-projects'
                        buttonName='Sign Out' 
                    />
                );
            }
        
            return (
                <Navbar 
                    role='unassigned' 
                    tab1='Home' route1='/'
                    tab2='About' route2='/about'
                    tab3='Contact' route3='/contact'
                    buttonName='Sign In' 
                />
            );
        }}</LoginContext.Consumer>
    );
};

export default GenericNavbar;