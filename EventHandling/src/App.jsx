import './App.css'

function App() {
  function handleClick(){
    alert("Button Clicked...");
  }

  function handleMouseOver(){
    alert("Mouse is Over the paraGraph");
  }
  
  function handleInputChange(e){
    console.log(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("form Submitted...")
  }
  return (
    <div>
      

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} >This is Para</p>

      <button onClick={handleClick} >Click Here</button> */}
    </div>
  )
}

export default App
