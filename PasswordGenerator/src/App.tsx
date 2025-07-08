import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState<number>(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*{}[]?`~"
    console.log('hello')
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();   //for selection show
    passwordRef.current?.setSelectionRange(0, 10); //Key cuttor taking range 
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <div className="h-full p-7 m-11 text-blue-100  bg-gray-500">
      <h1 className="text-4xl font-bold text-blue-500 flex justify-center my-10">
        Password Grenerator
      </h1>
      <div className="w-full flex justify-center my-4 gap-4">
        <div className="flex relative">
          <input
            placeholder="Password"
            className="px-4 w-3xl py-2 border-2 border-green-500 outline-none focus:border-blue-600 transition duration-300"
            type="input"
            value={password}
            readOnly
            ref={passwordRef}
            
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="cursor-pointer hover:bg-blue-300 hover:text-black hover:transform px-4 py-2 h-full bg-orange-500 absolute right-0 top-0">
            Copy
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <input
          className="cursor-pointer m-2"
          type="range"
          min={6}
          max={100}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLength(Number(e.target.value));
          }}
          value={length}
        />
        <label>length:{length}</label>
        <div className="flex gap-3 items-center">
          <input
            className="cursor-pointer"
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Inclue Numers </label>
          <input
            className="cursor-pointer"
            type="checkbox"
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Inclues Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
