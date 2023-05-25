import { useDispatch, useSelector } from "react-redux";
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
import { loadComments } from "./components/actions/Comments";
// import { setErrors } from "./components/actions/Errors";

const App = () => {
  const allState = useSelector(store => store)
  const dispatch = useDispatch();

  console.log(allState, "in app.js")
  
  // LOADS REVIEWS/ USERS
  useEffect(() => {
    dispatch(loadReviews())
    dispatch(loadUsers())
    dispatch(loadCurrentUser())
    dispatch(loadComments())
    // dispatch(setErrors())
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
      <Route path="*" element={ null } />
      <Route path="/reviews/:id/edit" element={ <EditReviewForm /> }/>
      <Route path="/user/profile" element={ <UserProfile /> }/>
    </Routes>
   </Router>
  )
};

export default App;