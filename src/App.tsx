import { FaFacebook, FaInstagram, FaSpinner, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-5xl font-bold mb-6 text-white">ProLanceX</h2>
        <p className="text-lg mb-8 text-gray-300">
          We’re working hard to launch our platform. Stay tuned for updates!
        </p>
        <FaSpinner className="animate-spin text-blue-500 text-4xl mb-6" />
      </main>

      <footer className="w-full py-6 bg-black">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/muhaammedsuhaib" target="_blank"
            className="text-blue-500 hover:text-blue-400 transition-all"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/MuhaammedSuhaib" target="_blank"
            className="text-blue-500 hover:text-blue-400 transition-all"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/suhaii.bb" target="_blank"
            className="text-blue-500 hover:text-blue-400 transition-all"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ProLanceX. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
