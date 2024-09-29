import headers from "./assets/headers.png"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

export default function Navbar() {
  return (
    <>
      <li className="flex justify-evenly items-center py-4 sm:py-0 font-new ">
        <ul className="">
          <Link to="/">
            <img className="size-24 sm:block hidden" src={headers} alt="" />
          </Link>
        </ul>
        <ul className="space-x-11 text-[20px] lg:block hidden">
          <Link to="/">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Pages">Pages</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="https://github.com/kartik-212004">Github</Link>
        </ul>
        <ul className=" text-[20px] md:space-x-11 space-x-5 lg:hidden block">
          <Link to="/">
            <span className="material-symbols-outlined">home</span>
          </Link>
          <Link to="/About">
            <span className="material-symbols-outlined">info</span>
          </Link>
          <Link to="/Pages">
            <span className="material-symbols-outlined">layers</span>
          </Link>
          <Link to="/Contact">
            <span className="material-symbols-outlined">mail</span>
          </Link>
          <Link to="https://github.com/kartik-212004">
            <span className="material-symbols-outlined">arrow_circle_left</span>
          </Link>
        </ul>
        <ul className="">
          <form action="post" className="flex items-center ">
            <input
              id="input"
              placeholder="Search"
              className="sm:placeholder:pl-5 placeholder:text-[#88888f]  bg-[#dbdbe0] rounded-md h-8 outline-none px-3 md:w-48 sm:w-24 w-20"
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
