import { FC } from 'react'
import { Props } from '../pages'
import AddForm from './AddForm'
import VueForm from './VueForm'

export interface user {
  id: number
  name: string
  email: string
  map: any
}

const Component: FC<Props> = ({ data }) => {
  return (
    <div className='max-w-[800px] '>
      <div className='flex justify-between '>
        <div className='min-w-[220px]'>
          <VueForm data={data} />
        </div>
        <div className='border min-h-[300px]'></div>
        <div>
          <AddForm />
        </div>
      </div>
    </div>
  )
}

export default Component
