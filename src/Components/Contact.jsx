import React from 'react'


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <main>
        <h1>Contact us</h1>
        <form className='contactform'>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Abc'/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" required placeholder='abc@xyz.com'/>
            </div>
            <div>
                <label>Message</label>
                <input type="text" required placeholder='Tell us your queries ... ' />
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
