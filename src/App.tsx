import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateMoviePage from "./Components/Movies/CreateMoviePage";
import MoviesPage from "./Components/Movies/MoviesPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { NotFound } from "./Components/NotFound/NotFound";

function App() {
  //return (
  //   <Router>
  //     <div className="App">
  //       <Navbar />
  //       <div className="content">
  //         <Switch>
  //           <Route exact path="/">
  //             <MoviesPage />
  //           </Route>
  //         </Switch>
  //       </div>
  //     </div>
  //   </Router>

  // );
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/create" element={<CreateMoviePage />} />
            <Route path="/movie/:id" element={<MoviesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
