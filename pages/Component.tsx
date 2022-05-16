import { GetStaticProps, NextPage } from "next"

const Component: NextPage = ({ data }: any) => {
  console.log('user', data)
  
  return (
    <div>
      start
      {data?.map((item: any) => {
        return <div>{item.name}</div>
      })}
    </div>
  )
}

export default Component

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch('http://localhost:3000/api')
  // const data = await res.json()
  return { props: { data: 'text' } }
}
