import logo from "./assets/headers.png"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <>
      <div className="bg-gray-100 mt-5  relative bottom-0">
        <div className="container mx-auto grid sm:grid-cols-3 grid-cols-2  ">
          <div className="space-y-4 sm:flex flex-col items-center hidden">
            <h1 className="my-4 text-[1.3rem] md:w-fit ">About</h1>
            <div className="space-y-3  ">
              <p className="text-gray-500 md:w-fit w-36 text-center mx-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quos eum officia beatae voluptatem fuga ea et, harum ipsum iusto
                doloribus ad quis! Ducimus vel quae nihil.
              </p>
              <p>
                <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=kartik200421@gmail.com">
                  Email : Kartik200421@gmail.com
                </Link>
                <p>Phone : 7579432420</p>
              </p>
            </div>
          </div>
          <div className=" mt-5 space-y-2 text-gray-600 flex flex-col items-center">
            <h1 className="text-black text-[1.3rem]">Quick Link</h1>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="mailto:kartik200421@gmail.com">Contact</Link>
              </li>

              <li>
                <Link to="https://github.com/kartik-212004">Github</Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/kartikbhatt2004/">
                  Linked In
                </Link>
              </li>
            </div>
          </div>
          <div className="space-y-4 text-center text-gray-600">
            <div className="p-6 space-y-4">
              <h1 className="text-[1.3rem] text-center text-black">
                Weekly Newsletter
              </h1>
              <p>Get Blog articles and offer via Email</p>
              <div className="flex flex-col items-center">
                <input
                  placeholder="Your Email"
                  className=" placeholder:px-3 border border-gray-500 rounded-md sm:w-24 md:h-10 h-5 w-12 md:w-64"
                  type="text"
                />
                <button className="md:h-10 h-5 p-1 text-white text-[10px] sm:text-xl md:w-48 sm:w-32 bg-blue-500 rounded-md my-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between my-3 items-center container mx-auto border border-y border-x-0 border-black hidden ">
          <div className="flex items-center">
            <img className="size-24 mx-3" src={logo} alt="" />
            <div className="flex flex-col">
              <header>
                Headers <span className="font-medium">Blog</span>
              </header>
              <p> &copy; Js Template 2024. All Right Reserved</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <ul>Terms Of Use </ul>
            <ul>Privacy Policy</ul>
            <ul>Cookies Policy</ul>
          </div>
        </div>
      </div>
    </>
  )
}
