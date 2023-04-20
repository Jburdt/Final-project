import { useSelector  } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

const App = () => {
  const reduxState = useSelector((store) => store );
  
  console.log(reduxState)

  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/" element={ <Reviews /> } />
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
      <Route path="*" element={ <Error /> } />
    </Routes>
   </Router>
  )
};

export default App;
