import Contact from "./components/Contact/Contact";
import Container from "./components/Container";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Photography from "./components/Photography/Photography";
import VisualDesign from "./components/VisualDesign/VisualDesign";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Photography/>
      <VisualDesign/>
      <Contact/>
      {/* <Container/> */}
      
    </div>
  );
}

export default App;
