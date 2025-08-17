
import './App.css';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/aboutMeSection/About.js'
import Experience from './components/experienceSection/Experience.js'
import Resume from './components/Resume.js';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Resume></Resume>
    </div>
  );
}
 
export default App;
