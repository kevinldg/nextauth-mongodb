import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/createUser", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-neutral-100 border-solid border-2 border-neutral-300 p-4 rounded w-fit flex gap-2 flex-col justify-center items-center">
        <h1 className=" font-bold text-xl">Register</h1>
        <form onSubmit={registerUser} className=" flex flex-col gap-2">
          <div className=" flex justify-between gap-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className=" border-solid border-2 border-neutral-300 p-1 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" flex justify-between gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className=" border-solid border-2 border-neutral-300 p-1 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex justify-between gap-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className=" border-solid border-2 border-neutral-300 p-1 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-400 text-white px-2 py-1 rounded w-fit self-center"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
