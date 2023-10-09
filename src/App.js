import { useFormik } from "formik";
import "./App.css";
import axios from "axios";

function App() {
  const form = useFormik({
    initialValues: {
      id: "",
      age: "",
      place:"",
      name:""
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:3001', values).then(res => {
        alert('saved')
      })
    },
  });

  const { values, handleChange, handleSubmit } = form;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">id</label>
          <input name="id"value={values.id}onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">age</label>
          <input name="age" value={values.age} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">place</label>
          <input name="place" value={values.place}onChange = {handleChange} />
        </div>
        <div>
          <label htmlFor="">name</label>
          <input name="name" value={values.name} onChange={handleChange} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
