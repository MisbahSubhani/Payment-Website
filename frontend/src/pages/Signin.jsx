import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";


export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Declare the handleSignIn function here
  const handleSignIn = async () => {
    // Input validation before making the API request
    if (!username || !password) {
      alert("Please enter both username and password.");
      return; // Return early if validation fails
    }

    try {
      // Make the API request if validation passes
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password,
      });
    

      if (response.data || response.data.token) {
        // Save token in localStorage and navigate to dashboard
    
        localStorage.setItem("token", response.data.token);

        navigate("/land");
        
        
      } else {
        alert("Invalid login details."); // Handle case where no token is returned
      }
    } catch (error) {
      alert("Login failed. Please try again."); // Handle API error
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Login "} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="abc@gmail.com"
            label={"Email"}
          />
        <div>
        <label for="password" class="block flex pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input  onChange={(e) => setPassword(e.target.value)} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>
          <div className="pt-4">
            <Button onClick={handleSignIn} label={"Login"} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
 
};
