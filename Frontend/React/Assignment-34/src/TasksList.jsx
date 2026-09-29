import { useState, useEffect } from 'react'
import { get } from 'react-hook-form'

function TasksList() {
  let [tasks, setTasks] = useState([])

  async function getTasks() {
    let response = await fetch("http://localhost:3000/tasks")
    let data = await response.json()
    setTasks(data)
  }
  async function deleteTask(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE"
    })
     getTasks()
   }
  async function editTask(id, oldTask) {
    let newTask = prompt("enter new task",oldTask)
    await fetch(`http://localhost:3000/tasks/${id}`,{
      method: "PUT",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
      task: newTask
    })
    })
    getTasks()
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className='container my-5'>
      <h2 className='w-50 m-auto my-4'>Tasks</h2>

      {tasks.map(t => {
        return (
          <div className='w-50 m-auto my-4' key={t.id}>
            <p className='mb-3 fs-3'>task : {t.task}</p>
            <button className='btn btn-danger me-3 px-3 fs-5' onClick={() => deleteTask(t.id)}>Delete</button>
            <button className='btn btn-success ms-3 px-3 fs-5' onClick={()=>editTask(t.id,t.task)}>Edit</button>
          </div>
        )
      })}
    </div>
  )
}

export default TasksList