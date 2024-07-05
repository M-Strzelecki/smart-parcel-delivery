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
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import CreateParcel from './components/Parcels/CreateParcel';
import ParcelList from './components/Parcels/ParcelList';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create-parcel' element={<CreateParcel/>}/>
          <Route path='/parcels' element={<ParcelList/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;