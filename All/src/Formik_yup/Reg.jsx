
import './Reg.css';
import {useFormik} from "formik";
import { singupSchema } from '../schema/index';
const Reg = () => {

  const initialValues={
    username: "",
      email: "",
      password: "",
      confirmPassword:"",

  };
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =useFormik({
    initialValues: initialValues,
    validationSchema:singupSchema,  
    onSubmit : (valu̥es) => {
      console.log("🚀 ~ Reg ~ valu̥es:", valu̥es)
      return {
      }
    }
  });


  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Username:
          <input type="text" name="username" value={values.username} onChange={handleChange}  onBlur={handleBlur} className='form-control'/>
        </label>
        {errors.username && touched.username ?
        
          <p className='error-message'>{errors.username}</p>
          : null
        } 
      
        <label>
          Email:
          <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}  className='form-control'/>
        </label>  {errors.email && touched.email ?
        
        <p className='error-message'>{errors.email}</p>
        : null
      } 
        <label>
          Password:
          <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}  className='form-control'/>
        </label>
        {errors.password && touched.password ?
        
        <p className='error-message'>{errors.password}</p>
        : null
      } 
      
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}  className='form-control'/>
        </label>
        {errors.confirmPassword && touched.confirmPassword ?
        
        <p className='error-message'>{errors.confirmPassword}</p>
        : null
      } 
      
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Reg;
