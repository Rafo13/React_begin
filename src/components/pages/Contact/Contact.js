import React, {useState} from 'react';
import styles from './Contact.module.css';

const defaultValues = {
   name: '',
   email: '',
   phone: '', 
   message: ''
}
export default function Contact() {
   const [values, setValues] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
   });

   const handleChange = ({target: {name, value}}) =>{ //վերցրել ենք event օբյեկտի մեջից
      setValues({
         ...values,
         [name]: value
      })
   }

   const send = () =>{
      console.log(values)
      setValues(defaultValues)
      
   }

   return (
      <div className={styles.wrap}>
         <input
         type='text'
         name='name'
         placeholder='Your name'
         value={values.name}
         onChange={handleChange}
         className={styles.input}
         />
         
         <input
         type='email'
         name='email'
         placeholder='Your email'
         value={values.email}
         onChange={handleChange}
         className={styles.input}
         /> 

         <input
         name='phone'
         type='phone'
         placeholder='Your phone'
         onChange={handleChange}
         className={styles.input}
         value={values.value}
         />

         <textarea
         name='message'
         placeholder='Your message'
         value={values.message}
         onChange={handleChange}
         className={styles.textarea}
         >
         </textarea>

         <button
         onClick={send}
         >
         Send
         </button>
      </div>
   )
}
