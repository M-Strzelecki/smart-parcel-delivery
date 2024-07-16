// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import CreateParcel from './components/Parcels/CreateParcel';
import ParcelList from './components/Parcels/ParcelList';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route 
          path='/create-parcel' 
          element={auth ? <CreateParcel /> : <Navigate to='/login' />} 
        />
        <Route 
          path='/parcels' 
          element={auth ? <ParcelList /> : <Navigate to='/login' />} 
        />
        <Route 
          path='/' 
          element={auth ? <Navigate to='/parcels' /> : <Navigate to='/login' />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
