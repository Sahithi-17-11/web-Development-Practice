import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import './App.css'
function App() {
  let {register,handleSubmit} = useForm()
  let [users,setUsers] = useState([])

  async function submitForm(data) {
    let response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    });
    let res = await response.json();
    console.log(res);

    getUsers();
  }

  async function getUsers() {
    let data = await fetch("http://localhost:3000/users");
    let res = await data.json();
    setUsers(res)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Create New User</h1>
      <form className="p-4 border rounded shadow-sm form-control" onSubmit={handleSubmit(submitForm)}>
        <div className="one my-3">
          <label className='form-label'>Name</label>
          <input type="text" {...register("name")} placeholder='Enter name' className='form-control' />
        </div>
        <div className="one my-3">
          <label className='form-label'>Email</label>
          <input type="email" {...register("email")} placeholder='Enter email' className='form-control' />
        </div>
        <div className="one my-3">
          <label className='form-label'>Age</label>
          <input type="number" {...register("age")} placeholder='Enter age' className='form-control' />
        </div>
        <div className="one my-3">
          <label className='form-label'>City</label>
          <input type="text" {...register("city")} placeholder='Enter city' className='form-control' />
        </div>
        <button type="submit" className="btn btn-success my-3">Create User</button>
      </form>

      <div className="container mt-5 ">
         <h2 className="text-center mb-4">Users</h2>
        <div className="dis">
          {
             users.map(user => {
            return (
              <div key={user.id} className="p-3 m-2 bg-light">
                <p>name : {user.name}</p>
                <p>email : {user.email}</p>
                <p>age : {user.age}</p>
                <p>city : {user.city}</p>
              </div>
            )
             })
          }
        </div>
      </div>
      
    </div>
  )
}

export default App