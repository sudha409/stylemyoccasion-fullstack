import React from 'react';
import {Routes, Route, Link} from 'react-router';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Feedback from './Components/FeedBack';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Birthday from './Components/Birthday';
import Wedding from './Components/Wedding';
import OfficeMeetings from './Components/Officemeetings';
import Party from './Components/Party';
import OccassionStyle from './Components/OccassionStyle';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';


function App() {
    return (

        <div>
            <Header/>
            <div className="content">
                <Routes>

                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/feedback" element={<Feedback/>}/>
                    <Route path="/birthday" element={<Birthday/>}/>
                    <Route path="/wedding" element={<Wedding/>}/>
                    <Route path="/OfficeMeetings" element={<OfficeMeetings/>}/>
                    <Route path="/Party" element={<Party/>}/>
                    <Route path="/OccassionStyle" element={<OccassionStyle/>}/>
                </Routes>
            </div>
            <Footer/>

        </div>

    );
}

export default App;
