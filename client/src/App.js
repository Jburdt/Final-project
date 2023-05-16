import { useDispatch } from "react-redux";
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
import { loadUsers } from "./components/actions/User";
import EditReviewForm from "./components/EditReviewForm";
import UserProfile from "./components/UserProfile";
import { loadCategories } from "./components/actions/Category";

const App = () => {
  // const reduxStore = useSelector((store) => store.userReducer)
  const dispatch = useDispatch();
  
  // const users = useSelector((store) => store.userReducer);
  
  // LOADS REVIEWS
  useEffect(() => {
    dispatch(loadReviews())
  }, [dispatch]);

  // LOADS USERS
  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch]);

  // LOAD CATEGORIES
  useEffect(() => {
    dispatch(loadCategories())
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
      <Route path="/reviews/:id/edit" element={ <EditReviewForm /> }/>
      <Route path="/user/profile" element={ <UserProfile /> }/>
    </Routes>
   </Router>
  )
};

export default App;
