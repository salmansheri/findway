import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loggedAdmin } from "../redux/adminSlice";

const AdminLogin = () => {
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      {
        email: adminData.email,
        password: adminData.password,
      }
    );
    const data = response.data;
    console.log(data);
    if (data.isAdmin === true) {
      dispatch(loggedAdmin({ email: adminData.email, isAdmin: data.isAdmin }));
      navigate("/admin");
    } else {
      alert("You are not Admin!");
    }

    if (data.message === "User not Found!") {
      alert("You are not Admin!");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="mb-5 text-2xl font-bold text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label>
              Email:
              <input
                className="border w-full border-black rounded-md p-2 mt-3"
                placeholder="Email"
                value={adminData.email}
                onChange={(e) =>
                  setAdminData({ ...adminData, email: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mb-5">
            <label>
              Password:
              <input
                className="border w-full border-black rounded-md p-2 mt-3"
                placeholder="password"
                value={adminData.password}
                onChange={(e) =>
                  setAdminData({ ...adminData, password: e.target.value })
                }
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-700 px-5 text-white py-2 rounded-md shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
