import { useSelector  } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const reduxState = useSelector((store) => store );
  
  console.log(reduxState)

  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
    </Routes>
   </Router>
  )
};

export default App;
