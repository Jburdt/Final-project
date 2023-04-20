import { useSelector  } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from "./components/Error";
import Home from "./components/Home";
import Login from "./components/Login";
import ButtonAppBar from "./components/Navbar";
// import Navbar from "./components/Navbar";
import NewReviewForm from "./components/NewReviewForm";
import Reviews from "./components/Reviews";
import Signup from "./components/Signup";

const App = () => {
  const reduxState = useSelector((store) => store );
  
  console.log(reduxState)

  return (
   <Router>
    
    <ButtonAppBar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/reviews" element={ <Reviews /> } />
      <Route path="/reviews/new" element={ <NewReviewForm /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="*" element={ <Error /> } />
    </Routes>
   </Router>
  )
};

export default App;
