import "tailwindcss/tailwind.css"
import Navbar from "./admin/Navbar"

export default function Home() {
  return <>
    <Navbar/>
    <h1 className="font-semibold py-2 bg-colors-_green text-white text-2xl w-64 mx-auto rounded-lg text-center">Hello</h1>
  </>
}
