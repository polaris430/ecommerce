import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "/src/Root.css";

export default function Root() {
  return (
    <div className="mainscreen">
      <div className="mainscreenimage">
        <img src="./mainscreenimg.png"></img>
      </div>
      <div className="mainscreenheading">
        <h1>All your shopping in one App</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          voluptatum ipsum eveniet esse necessitatibus. Quas sunt dignissimos
          placeat quasi molestiae id, repellendus nemo voluptas amet!
        </p>
      </div>
      <div className="mainscreenbtns">
        <Link to="/signin" className="btn btn1">
          Log In
        </Link>
        <Link to="/" className="btn btn2">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
