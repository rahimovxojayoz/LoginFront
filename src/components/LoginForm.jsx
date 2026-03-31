import { useState } from "react";
import { useNavigate } from "react-router-dom"
import api from "../api/axios";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post('/login', { 
        email: email, 
        password: password 
      });

      if (response.status === 200) {
        navigate('/home')
      }

    } catch (error) {
      if (error.response.status === 401) {
        alert(error.response.data.detail)
      }
      else {
        alert(error.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      
      <form onSubmit={handleSubmit} className="p-9 border
        border-gray-200 rounded-2xl w-100 shadow-sm space-y-4">
        <h1 className="text-xl font-bold">Sign In</h1>

        <div className="">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="border mt-1 border-gray-300 w-full p-2 rounded-xl
            focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            className="border mt-1 border-gray-300 w-full p-2 rounded-xl
            focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className={`cursor-pointer font-medium text-white w-full mt-2 py-2 rounded-xl transition-colors ${
            isLoading ? "bg-blue-300 cursor-wait" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoading ? 'Signing in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;