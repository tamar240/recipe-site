import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import UserDisplay from './components/UserDisplay';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import UpdateUser from './components/UpdateUser';
import RecipeList from './components/RecipeList';

const RoutesComponent: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Outlet/>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/user-display' element={<UserDisplay />} />
                <Route path='/update' element={<UpdateUser />} />
                <Route path='/recipeList' element={<RecipeList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;


