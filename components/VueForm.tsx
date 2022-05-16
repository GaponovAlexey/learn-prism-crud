import { FC } from 'react'

const VueForm: FC = ({ data }: any) => {
  return (
    <div>
      <h1>Vue Form Data</h1>
      {data.map((item: any) => (
        <div>
          {item.name}
          <br />
          {item.email}
        </div>
      ))}
    </div>
  )
}

export default VueForm
