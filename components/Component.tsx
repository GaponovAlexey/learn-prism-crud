import { FC } from 'react'
import { Props } from '../pages'
export interface user {
  id: number
  name: string
  email: string
  map: any
}

const Component: FC<Props> = ({ data }) => {

  return (
    <div>
      start
      {data.map((el: user) => (
        <div key={el.id}>{el.name}</div>
      ))}
    </div>
  )
}

export default Component
