import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer/Footer'

function Layout() {
  return (
    <div className="mx-auto ">
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout