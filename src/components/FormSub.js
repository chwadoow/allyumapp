import {useState} from 'react'

function FormSub({addToRecipes}) {
    const [formData,setFormData]= useState(
        {
          name:'',
          ingredients:'',
          link:'',
          steps:'',
          youtube:''
        }
      )
  



     
      function handleSubmit(event){
        event.preventDefault()
        fetch('https://allyum.herokuapp.com/meal', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then(res=>addToRecipes(res)
          
          
          );
          setFormData(
            {
           name:'',
          ingredients:'',
          link:'',
          steps:'',
          youtube:''
            }
          )
          
      
      }
    
      function handleChange(event){
        const key = event.target.id
        setFormData({
          ...formData,
          [key]:event.target.value
        })
      }
    
  return (
    <div className='formdiv' >
        <strong>Add you recipe here !</strong>
          <form onSubmit={handleSubmit} className='form' >
          
    <input type="text"  style={{background:'orange'}} id='name' onChange={handleChange} value={formData.name} placeholder='enter name' required />
    <input type="text"  style={{background:'orange'}} id='ingredients' onChange={handleChange} value={formData.ingredients} placeholder='enter ingredients' required/>
    <input type="text"  style={{background:'orange'}} id='link' onChange={handleChange} value={formData.link} placeholder='enter image link'/>
    <input type='text'  style={{background:'orange'}} id='steps' onChange={handleChange} value={formData.steps} placeholder='enter steps in prose' required/>
    <input type='text'  style={{background:'orange'}} id='youtube' onChange={handleChange} value={formData.youtube} placeholder='enter embed youtube video link' required/>
    <button style={{background:'purple'}} type="submit">Submit</button>
  </form>
    </div>
  )
}

export default FormSub