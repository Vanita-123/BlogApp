import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen  justify-center items-center bg-slate-500">
      <div className=" bg-white p-10">
        <h1 className="text-blue-600 font-semibold text-2xl py-2">Blog App</h1>
        <label className=" input input-bordered flex items-center gap-2   ">
          Email
        </label>
        <div>
          <input
            className=" w-full border border-black rounded-md  m-1 p-1"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label className=" input input-bordered flex items-center gap-2 ">
            Password{" "}
          </label>
          <input
            className="border border-black rounded-md w-full m-1 p-1"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center m-5">
          <input
            className=" font-semibold rounded-md p-1 bg-blue-600 text-white text-xl w-full cursor-pointer "
            type="Submit"
            value="Login"
          />
        </div>
        <p className="text-xm">
          Do not Have an Account ?
          <Link to ="/Signup" className="text-blue-600 m-1 cursor-pointer">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
