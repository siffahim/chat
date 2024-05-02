import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../config";

const Login = () => {
  const [loginData, setLoginData] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newData = { ...loginData };
    newData[name] = value;
    setLoginData(newData);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await baseUrl.post("/user/login", loginData);

    if (res.status === 200) {
      localStorage.setItem("loginData", JSON.stringify(res.data));

      //navigate
      navigate(`/chat`);
    }
  };
  return (
    <div className="">
      <div className="bg-indigo-100 flex justify-center items-center h-screen">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="border w-[400px] h-11  rounded-md mb-2 p-2"
            placeholder="Email"
            name="email"
            onBlur={handleChange}
          />
          <br />
          <input
            type="password"
            className="border w-[400px] h-11 rounded-md mb-2 p-2"
            placeholder="Password"
            name="password"
            onBlur={handleChange}
          />
          <br />
          <input
            type="submit"
            className="bg-indigo-500 text-white border w-[400px] h-11 rounded-md mb-2 p-2 cursor-pointer"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
