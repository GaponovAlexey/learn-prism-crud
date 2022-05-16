import { FC } from 'react'
import { user } from './Component'

const VueForm: FC = ({ data }: any) => {
  const deleteData = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/delete/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <div>
      <h1>Vue Form Data</h1>
      {data.map((item: any) => (
        <div className='flex justify-between'>
          {item.name}
          <div
            onClick={() => deleteData(item.id)}
            className='hover:text-blue-500 cursor-pointer'
          >
            del
          </div>
        </div>
      ))}
    </div>
  )
}

export default VueForm
