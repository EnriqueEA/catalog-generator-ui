import Header from "../components/Header";

interface Props {
   children: JSX.Element | JSX.Element[]
}

const PublicRoute = ({ children }: Props) => {
   return (
      <div className="h-screen bg-gray-200">
         <Header />
         { children }
      </div>
  )
}

export default PublicRoute;