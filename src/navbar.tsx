import headers from "./assets/headers.png"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
export default function Navbar() {
  return (
    <>
      <li className="flex justify-evenly items-center font-new ">
        <ul className="">
          <Link to="/">
            <img className="size-24" src={headers} alt="" />
          </Link>
        </ul>
        <ul className="space-x-11 text-[20px]">
          <Link to="/">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Pages">Pages</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="https://github.com/kartik-212004">Github</Link>
        </ul>
        <ul className="">
          <form action="post" className="flex items-center ">
            <input
              id="input"
              placeholder="Search"
              className="placeholder:pl-5 placeholder:text-[#88888f] bg-[#dbdbe0] rounded-md h-8 outline-none px-3"
              type="text"
            />
            <span className="px-2">
              <FaSearch />
            </span>
          </form>
        </ul>
      </li>
    </>
  )
}
