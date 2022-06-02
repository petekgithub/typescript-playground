import { useState } from 'react'

const defaultFormData={
  title: "",
  body: "",
};

export default function App(){

  const [formData, setFormData] = useState(defaultFormData)
  const { title, body } = formData;

  // onChange event
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  // onSubmit event
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData)
  };

// e: React.FormEvent<HTMLFormElement> came from onChange=((e) => {onChange}} and prevents an error
    return (
      <>
        <h1>Form</h1>
        <p>Create a post</p>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <br/>
          <input type="text" id='title' value={title} onChange={onChange}>Title</input>
          <br/>
          <br/>
          <label htmlFor="body">Body</label>
          <br/>
          <input type="text" id='body' value={body} onChange={onChange}>Title</input>
          <br/>
          <br/>
          <button type='submit'>Upload post</button>
        </form>
      </>
    )
  }
  
 