import React from 'react';
import './App.css';
// import DailyDrinks from './apps/DailyDrinks';
import { DailyDrinksHook } from './apps/DailyDrinksHook'

function App() {
  return (
    <div className="App">
      {/* <DailyDrinks /> */}
      <DailyDrinksHook />
    </div>
  );
}

export default App;
