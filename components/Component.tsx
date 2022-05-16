import { NextPage } from 'next'
import { useEffect } from 'react'

const Component: NextPage = ({ data }: any) => {
  console.log('user', data)

  return (
    <div>
      start
      {data.map((el) => (<div key={el.id}>{el.name}</div>))}
    </div>
  )
}

export default Component
