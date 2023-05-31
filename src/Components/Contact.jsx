import React from 'react'


const Contact = () => {

  const handleOnSubmit = (e) => { 
    e.preventDefault();
    alert("Form submitted !")
    document.getElementsByName("name")[0].value = ""
    document.getElementsByName("email")[0].value = ""
    document.getElementsByName("message")[0].value = ""
  }

  return (
    <div className='contact' id='contact'>
      <main>
        <h1>Contact us</h1>
        <form className='contactform' onSubmit={handleOnSubmit}>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Abc' name='name'/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" required placeholder='abc@xyz.com' name="email"/>
            </div>
            <div>
                <label>Message</label>
                <input type="text" required placeholder='Tell us your queries ... ' name='message'/>
            </div>
            <div id='btnContainer'>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </main>
    </div>
  )
}

export default Contact
