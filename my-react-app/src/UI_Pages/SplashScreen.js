// import logo from '../src/assets/images/LOGO.png';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         TECH कला
//         </p>
        
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import logo from '../assets/images/LOGO.png';
import '../CSS/App.css';

function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div className="App-header">
      <p>Loading...</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        TECH कला
      </p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TECH कला
        </p>
      </header>
    </div>
  );
}

export default SplashScreen;