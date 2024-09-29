import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const { SignIn } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const naviggate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    SignIn(email, password)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
        //naviggate(location?.state ? location?.state : "/");
        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              naviggate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row mr-4">
        <div className="text-center w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="my-4 text-center">
            New to Car Doctors
            <Link to="/signup" className="text-orange-600 font-bold">
              SignUp{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
