import logo from './logo.svg';
import './App.css';

/* -- Importing page components -- */
import MyNavBar from "./components/Navigation/MyNavBar.jsx";
import MyHeader from "./components/Header/MyHeader.jsx"; 
import MyFooter from "./components/Footer/MyFooter.jsx";
import MyProject from "./components/Project/project.jsx";


/* -- Import the pages -- */
import About from "./pages/AboutMe/aboutMe.jsx";
import Contact from "./pages/Contact/contact.jsx";
import portfolio from "./pages/Portfolio/portfolio.jsx";
import resume from "./pages/Resume/resume.jsx";


/* -- Display to Page -- */
function App() {
  return (
    
    // This displays directly to the webpage
    <div className="App">
      <MyHeader />
      <MyNavBar /> 

      <MyFooter />
    </div>



  );
}


/* -- exporting -- */
export default App; // accessed by ./index.js
