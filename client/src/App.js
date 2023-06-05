import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewReviewForm from "./components/NewReviewForm";
import Reviews from "./components/Reviews";
import Signup from "./components/Signup";
import { useEffect } from "react";
import { loadReviews } from "./components/actions/Reviews";
import { loadCurrentUser, loadUsers } from "./components/actions/User";
import EditReviewForm from "./components/EditReviewForm";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
import { setErrors } from "./components/actions/Errors";
import Errors from "./components/Errors";

const App = () => {
  const dispatch = useDispatch();
  
  // LOADS REVIEWS/ USERS
  useEffect(() => {
    dispatch(loadUsers())
    dispatch(loadCurrentUser())
    dispatch(loadReviews())
    // dispatch(setErrors())
  }, [dispatch]);

  return (
   <Router>
    <Navbar />
    {/* <Errors /> */}
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/reviews" element={ <Reviews /> } />
      <Route path="/reviews/new" element={ <NewReviewForm /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="*" element={ <NotFound /> } />
      <Route path="/reviews/:id/edit" element={ <EditReviewForm /> } />
      <Route path="/user/profile" element={ <UserProfile /> } />
    </Routes>
   </Router>
  )
};

export default App;