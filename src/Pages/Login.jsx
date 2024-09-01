import { Fragment } from "react";
import Button from "../components/Elements/Button/Button";
import { Link } from "react-router-dom";
import Input from "../components/Elements/Input/Input";

const Login = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div className="backdrop-opacity-10 backdrop-invert bg-secondary py-5 px-8 rounded-lg">
          <h1 className="text-center poppins-bold text-2xl ">Login</h1>
          <div className="mt-5">
            <form className="flex gap-5 flex-col">
              <Input
                type="email"
                name="email"
                id="username"
                placeholder="Email"
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </form>
            <div className="mt-3">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="ml-1">
                Remember me
              </label>
              <a href="#" className="float-right">
                forgot password?
              </a>
            </div>
            <Button btn="Login" classname="bg-primary w-full mt-5" />
            <p className="poppins-medium mt-2 tracking-wide w-full">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary poppins-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
