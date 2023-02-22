import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="signincontainer">
      <div className="signinheader"></div>
      <div className="signinnavbar">
        <a href="#" className="a1">
          Login
        </a>
        <a href="#" className="a2">
          Register
        </a>
      </div>
      <div className="signinhero">
        <b>
          <h3 className="signin">Sign In</h3>
        </b>
        <p>Welcome back! Don't have an account?</p>
        <p className="signup">Sign Up</p>
      </div>
      <div className="signininput">
        <input className="username" placeholder="Username"></input>
        <input className="password" placeholder="Password"></input>
        <Link to="/home" className="btn btn1">
          Log In
        </Link>
      </div>
      <div className="signincheckbox">
        <div className="signincheck">
          <input type="checkbox" className="checkbox"></input>
          <p className="remember"> Remember Me </p>
        </div>
        <div className="signincheck2">
          <p className="forgot">Forgot Password?</p>
        </div>
      </div>
      <div className="signinline">
        <div className="line1"></div>
        <div className="or">OR</div>
        <div className="line2"></div>
      </div>
      <div className="signinbtns">
        <button className="login1"> Login with Google </button>
        <button className="login2"> Login with Apple </button>
      </div>
    </div>
  );
}
