import React, { useRef } from 'react';
import './App.css'
import HomePage from './MainComponents/HomePage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import FilteredCollections from './MainFolder/Collections/FilteredCollections';
import { InfoProvider } from './Context/Context';


function App() {

  // TO SCROLL 100VH
  // const containerRef = useRef(null);
  // const handleScroll = (e) => {
  //   const container = containerRef.current;
  //   const scrollableHeight = container.scrollHeight - container.clientHeight;
  //   if (e.deltaY > 0) {
  //     // Scroll down
  //     container.scrollTo({
  //       top: container.scrollTop + window.innerHeight,
  //       behavior: 'smooth'
  //     });
  //   } else {
  //     // Scroll up
  //     container.scrollTo({
  //       top: container.scrollTop - window.innerHeight,
  //       behavior: 'smooth'
  //     });
  //   }
  // };
  // onWheel={handleScroll}
  // ref={containerRef}

  return (
    <>
      <div>
        <InfoProvider>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/FilteredCollections' element={<FilteredCollections />} />
          </Routes>
        </InfoProvider>

      </div>
    </>
  )
}

export default App
