import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home"
import About from "./components/routes/About"
import Contact from "./components/routes/Contact"
import Experience from "./components/routes/Experience"
import Work from "./components/routes/Work"
import PageUnknown from "./components/routes/PageUnknown"

function App() {
  const [currentPage, setCurrentPage] = useState('')

  const handlePage = (string) => {
    setCurrentPage(string)
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              page={currentPage}
              setPage={handlePage}
            ></Home>
          }
        >
        </Route>
        <Route
          exact
          path='/about'
          element={
            <About
              page={currentPage}
              setPage={handlePage}
            ></About>
          }
        >
        </Route>
        <Route
          exact
          path='/contact'
          element={
            <Contact
              page={currentPage}
              setPage={handlePage}
            ></Contact>
          }
        >
        </Route>
        <Route
          exact
          path='/experience'
          element={
            <Experience
              page={currentPage}
              setPage={handlePage}
            ></Experience>
          }
        >
        </Route>
        <Route
          exact
          path='/work'
          element={
            <Work
              page={currentPage}
              setPage={handlePage}
            ></Work>
          }
        >
        </Route>
        <Route
          path="*"
          element={
            <PageUnknown
              page={currentPage}
              setPage={handlePage}
            ></PageUnknown>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
