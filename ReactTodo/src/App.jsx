import React, { useState } from "react";
import TodoCard from "../Components/TodoCard";

const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    progres: "untouched",
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    setData([...data, formData]);

    setFormData({
      title: "",
      desc: "",
      progres: "untouched",
    });
  };

  return (
    <main style={{ padding: "20px" }}>
      {/* FORM SECTION */}
      <section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Title..."
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <br /><br />

          <textarea
            placeholder="Enter Desc..."
            name="desc"
            rows={5}
            cols={50}
            style={{ resize: "none" }}
            value={formData.desc}
            onChange={handleChange}
          />

          <br /><br />

          <div>
            <label>
              <input
                type="radio"
                name="progres"
                value="completed"
                checked={formData.progres === "completed"}
                onChange={handleChange}
              />
              Completed
            </label>

            <label>
              <input
                type="radio"
                name="progres"
                value="ongoing"
                checked={formData.progres === "ongoing"}
                onChange={handleChange}
              />
              Ongoing
            </label>

            <label>
              <input
                type="radio"
                name="progres"
                value="untouched"
                checked={formData.progres === "untouched"}
                onChange={handleChange}
              />
              Untouched
            </label>
          </div>

          <br />

          <button type="submit">Add</button>
        </form>
      </section>

      {data && <section style={{ marginTop: "30px" }}>
        {
          data.map((ele,idx,arr)=>(
            <TodoCard data={ele} />
          ))
        }
      </section>}
    </main>
  );
};

export default App;