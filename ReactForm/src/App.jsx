import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState:{errors, isSubmitting},

  } = useForm();

  function onSubmit(data) {
    console.log("Submitting Data",data);
  }

  async function onSubmit(data){
    await new Promise((resolve)=> setTimeout(resolve, 5000));
    console.log("Submitting Data",data);
    alert("Form Submitted Successfully");
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label>First Name: </label>
          <input
          className={errors.firstName ? 'input-error':""}
          {...register('firstName',{ 
            required: true, 
            minLength:{value:3, message:'Minimum Length should be 3'},
            maxLength: {value:6, message:'Maximum Length Should be 6'}})} />
            {errors.firstName && <p className='error-msg' >{errors.firstName.message}</p>}
        </div>
        <br/>
        <div>
          <label>Middle Name: </label>
          <input {...register('middleName')} />


        </div>
        <br/>
        <div>
          <label>Last Name: </label>
          <input {...register('lastName')} />
        </div>
        <br/>
        <input type="submit" disabled={isSubmitting} 
        value={isSubmitting ? 'Submitting' : "Submit"}/>
      </form>
    </>
  )
}

export default App
