import {useForm} from 'react-hook-form'
import './App.css'
/*Full Name (text) Email (text) Password (password) Confirm Password (password) Age (number) Terms & Conditions (checkbox)*/
function App() {
  let {register, handleSubmit, getValues, formState: { errors }} = useForm()
  function submitForm(data) {
     console.log(data);
  }
  return (
    <div className='container'>
      <form className='form-control flo' onSubmit={handleSubmit(submitForm)}>
        <div className='group'>
          <label className='form-label'>Full Name</label>
          <input className='in form-control' type="text" {...register("FullName",{required:true,minLength:3})} placeholder='full name' />
          {errors?.FullName?.type === "required" && (<p>Full Name is required</p>)}
          {errors?.FullName?.type === "minLength" && (<p>Full Name must contain at least 3 characters</p>)}
        </div>
        <div className='group'>
          <label className='form-label'>Email</label>
          <input className='in form-control' type="email" {...register("Email",{required : true})} placeholder='email' />
          {errors?.Email?.type==="required" && (<p>Email is required</p>)}
        </div>
        <div className='group'>
          <label className='form-label'>Password</label>
          <input className='in form-control' type="password" {...register("Password",{required:true ,minLength : 6})} placeholder='password' />
          {errors?.Password?.type==="required" && (<p>Password is required</p>)}
          {errors?.Password?.type==="minLength" && (<p>Password must contain atleast 6 characters</p>)}
        </div>
        <div className='group'>
          <label className='form-label'>Confirm Password</label>
          <input className='in form-control' type="password" {...register("ConfirmPassword",{validate: (value) => value === getValues("Password") || "Passwords do not match"})} placeholder='Confirm Password' />
          {errors?.ConfirmPassword?.type==="validate" && (<p>Passwords must match</p>)}
        </div>
        <div className='group'>
          <label className='form-label'>Age</label>
          <input className='in form-control' type="number" {...register("Age", {required:true, min : 18})} placeholder='Age' />
          {errors?.Age?.type === "required" && (<p>Age is required</p>)}
          {errors?.Age?.type === "min" && (<p>Age must be greater than or equal to 18</p>)}
        </div>
        <div className='group terms form-check'>
          <input type="checkbox" className='form-check-input' {...register("terms")}/>
          <label className='form-check-label'>Terms and Conditions</label>
        </div>
        <button className='btn btn-info' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App