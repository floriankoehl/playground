// MainPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [user_input, setUser_Input] = useState("");
  const [test_state, setTest_State] = useState("");
  const navigate = useNavigate();


  const update_input = (input) => {
    setUser_Input(input)
    route_conditionally()
  }

  const route_conditionally = () => {
    if (user_input == "Philipp" | user_input == "Florian" | user_input == "abc") {
      setTest_State("")
      navigate(`users/${user_input}`)

    } else {
      setTest_State("NOT CORRECT")
      
    }
  }


  return (
    <main className="min-h-screen w-[100%] pt-12 flex items-center justify-center bg-blue-300">
      <div className="text-center flex flex-col gap-5 justify-center items-center">
        <h1>HomePage</h1>
        <p>This is the homepage</p>


        <h2 className="font-bold">Output: {user_input}</h2>
        <h2 className="font-bold">TestState: {test_state}</h2>

        <div>
          <input onChange={(e) => {update_input(e.target.value)}} className="w-70 h-10 p-2 m-20 bg-white" type="text" />
          <button onClick={() => {route_conditionally()} } className="w-20 h-12 bg-green-200 rounded" type="submit">activate</button>
        </div>
        
      </div>
    </main>
  );
}
