import { ChangeEvent, FC, MouseEvent, useState } from 'react'

const AddForm: FC = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')

  const sendData = async (name: string, email: string) => {
    const res = await fetch('http://localhost:3000/api/create', {
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

  
  const handleSubmit = (e: MouseEvent) => {
    if (name === '' || email === '') {
      alert('Please fill all the fields')
    } else {
      e.preventDefault()
      setname('')
      setemail('')
      sendData(name, email)
    }
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
