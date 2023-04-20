import { useSelector  } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navBar";

const App = () => {
  const reduxState = useSelector((store) => store );
  
  console.log(reduxState)

  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
      <Route path="/" element={ null } />
    </Routes>
   </Router>
  )
};

export default App;
