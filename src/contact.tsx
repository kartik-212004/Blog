
export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>

      <div className="relative bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-700 mb-4">
          <strong>Address:</strong> Dehradun, Uttarakhand
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Phone:</strong>{" "}
          <a href="tel:+917579432420" className="text-blue-500 hover:underline">
            +91 7579432420
          </a>
        </p>

        <p className="text-gray-700 mb-8">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:kartik200421@gmail.com"
            className="text-blue-500 hover:underline"
          >
            kartik200421@gmail.com
          </a>
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="tel:+917579432420"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Call Now
          </a>
          <a
            href="mailto:kartik200421@gmail.com"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  )
}
