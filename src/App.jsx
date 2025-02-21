import axios from 'axios';
import { useState } from 'react'

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  async function callApi() {
    const response = await axios.get("https://api.adviceslip.com/advice")
    setAdvice(response.data.slip.advice);
    setCount((p)=>p+1);
  }
  return (
    <>
      <div className="text-xl flex justify-center items-center flex-col space-y-10">
        <h1 className='text-3xl font-bold underline '>Welcome to Advice APP..!</h1>
        <h1 className='bg-pink-200 text-3xl font-medium border-2 border-black min-h-[40vh] w-2/3 md:w-1/3 px-5 py-5'>{advice}</h1>
        <button
          className="text-2xl bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={callApi}
        >
          Get Advice
        </button>
        <p>You have read {count} pieces of advice today</p>

      </div>
    </>
  );
}
