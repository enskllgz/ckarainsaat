import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#333] flex flex-col text-[15px] md:text-[16px] overflow-x-hidden">
      <Header />
      <main id="content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
