import logo from './logo.svg';
import './App.css';

/* -- Importing page components -- */
import MyNavBar from './components/Navigation/MyNavBar.jsx';
import MyFooter from './components/Footer/MyFooter';


/* -- Import the pages -- */
import About from "./pages/AboutMe/aboutMe.jsx";


/* -- Display to Page -- */
function App() {
  return (
    <div className="App">
      <MyNavBar /> 
    </div>


  );
}


/* -- exporting -- */
export default App;
