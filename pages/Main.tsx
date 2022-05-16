
const Main = ({ data }: any) => {
  console.log(data)

  return (
    <div>
      start
      {data?.map((item: any) => {
        return <div>{item.name}</div>
      })}
    </div>
  )
}

export default Main

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api')
  const data = await res.json()
  return {
    props: { data },
  }
}
