import React from 'react';
import './App.css';
import Logo from './modules/Logo/Logo';
import HomePage from './modules/HomePage/HomePage';
import ChartsPage from './modules/ChartsPage/ChartsPage';
import CategoriesPage from './modules/CategoriesPage/CategoriesPage';

function App() {
  return (    
    <div className="container">
      <nav className="main-tabs">
        <Logo />
        <label htmlFor="tab1" className="tabs__label">Home</label>
        <label htmlFor="tab2" className="tabs__label">Charts</label>
        <label htmlFor="tab3" className="tabs__label">Categories</label>
      </nav>
      <div className="tabs__content">
        <input type="radio" className="tabs__input" id ="tab1" name="main-tabs" defaultChecked/>
        <div className="tabs__page">
          <HomePage />
        </div>
        <input type="radio" className="tabs__input" id ="tab2" name="main-tabs" />
        <div className="tabs__page">
          <ChartsPage />
        </div>
        <input type="radio" className="tabs__input" id ="tab3" name="main-tabs" />
        <div className="tabs__page">
          <CategoriesPage />
        </div>
      </div>
    </div>
  );
}

export default App;
