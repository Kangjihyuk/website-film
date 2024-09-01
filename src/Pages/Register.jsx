import { Fragment } from "react";
import Button from "../components/Elements/Button/Button";
import { Link } from "react-router-dom";
import Input from "../components/Elements/Input/Input";

const Register = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen">
        <div className="backdrop-opacity-10 backdrop-invert bg-secondary py-5 px-8 rounded-lg">
          <h1 className="text-center poppins-bold text-2xl ">Register</h1>
          <div className="mt-5">
            <form className="flex gap-5 flex-col">
              <Input type="text" name="name" id="name" placeholder="Name" />
              <Input
                type="email"
                name="Email"
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
            <Button btn="Register" classname="bg-primary w-full mt-5" />
            <p className="poppins-medium mt-2 tracking-wide w-full">
              Already Have a account?{" "}
              <Link to="/login" className="text-primary poppins-bold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
