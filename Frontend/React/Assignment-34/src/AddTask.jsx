import { useForm } from 'react-hook-form'

function AddTask() {
  let { register, handleSubmit } = useForm()

  async function submitTask(data) {
    let res = await fetch('http://localhost:3000/tasks',
        {
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
    )
     let result = await res.json()
    console.log(result)
  }

  return (
    <div className='container my-5'>
      <h2 className='w-50 m-auto my-4'>Add Task</h2>

      <form className='form-control w-50 m-auto my-4 p-4 border-dark' onSubmit={handleSubmit(submitTask)}>
        <input
          type="text"
          {...register("task")}
          placeholder="Enter task"
          className='form-control my-3'
        />

        <button className='btn btn-info px-2 my-3 fs-5' type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTask