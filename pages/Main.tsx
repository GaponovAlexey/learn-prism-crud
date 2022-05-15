import { PrismaClient } from '@prisma/client'

const Main = ({ data }: any) => {
  console.log(data)
  
  return <div>start</div>
}

export default Main

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const data = await prisma.user.findMany()
  return {
    props: {
      data: data,
    },
  }
}
