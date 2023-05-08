import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from "./components/Error";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewReviewForm from "./components/NewReviewForm";
import Reviews from "./components/Reviews";
import Signup from "./components/Signup";
import { useEffect } from "react";
import { loadReviews } from "./components/actions/Reviews";

const App = () => {
  const reviews = useSelector((store) => store.reviewsReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadReviews())
  }, [dispatch]);

  return (
   <Router>
    <Navbar />
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
