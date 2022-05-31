import React, { useState, useEffect } from 'react';
import { SpinnerDiamond } from 'spinners-react';
import './App.css';

const App = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", myFunction);

    return window.removeEventListener("resize", myFunction);
  }, []);

  const myFunction = () => {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, []);

  return (
    <div className="App">
    {
      loading ? (
          <SpinnerDiamond size={90} thickness={180} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
      ) : (
              <p>Screen size: {screenSize}</p>

      )
    }
    </div>
  )
}

export default App;