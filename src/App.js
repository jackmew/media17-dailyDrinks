import React from 'react';
import './App.css';
// import AppHeader from './apps/AppHeader'
import Counter from './apps/Counter';
import ProfileContainer from './counterComponent/ProfileContainer';
import DailyDrinks from './apps/DailyDrinks';

function App() {
  return (
    <div className="App">
      {/* <AppHeader /> */}
      <Counter />
      <ProfileContainer />
      <DailyDrinks />
    </div>
  );
}

export default App;
