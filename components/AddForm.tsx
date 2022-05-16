import { useState } from 'react'

const AddForm = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')

  const sendData = async () => {
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setname('')
    setemail('')
    sendData(name, email)
  }

  return (
    <div>
      <h1>AddForm</h1>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit} className='bg-slate-300'>
        Submit
      </button>
    </div>
  )
}

export default AddForm
