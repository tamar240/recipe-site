import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UpdateUser from './components/UpdateUser';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Logout from './components/Logout';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';

const RoutesComponent: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Outlet/>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/home' element={< Home/>} />
                <Route path='/update' element={<UpdateUser />} />
                <Route path='/recipeList' element={<RecipeList />} />
                <Route path='/recipeForm' element={<RecipeForm />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;


