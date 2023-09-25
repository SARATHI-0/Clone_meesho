import "./styles.css";
import React from "react-dom";
import Footer from "./footer";
function App() {
  return (
    <nav>
      <div className="l1">
        <ul>
          <li>Home</li>
          <li>Dropdown</li>
          <li>Coutact us</li>
          <li>About us</li>
          <button>submit</button>
        </ul>
      </div>
      <Footer />
    </nav>
  );
}
export default App;
