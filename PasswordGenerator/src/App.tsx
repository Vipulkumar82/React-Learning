import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500 flex justify-center my-10">
        Password Grenerator
      </h1>
      <div className="w-full flex justify-center my-4 gap-4">
        <div className="flex relative">
          <input
            placeholder="Password"
            className="px-4 w-3xl py-2 border-2 border-green-500 outline-none focus:border-blue-600 transition duration-300"
            type="input"
          />
          <button className="px-4 py-2 h-full bg-orange-800 absolute right-0 top-0">Copy</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
