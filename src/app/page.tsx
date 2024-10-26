import Image from "next/image";
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"
import grocery from "../../images/grocery.png"


export default function Home() {
  return (
    <div className="min-h-screen min-w-full  bg-gradient-to-r from-purple-500 to-pink-500 bg-center bg-cover px-28 py-5 relative">

      <nav className="flex items-center">
      <Image src={logo} alt="logo" className="w-40 cursor-pointer" />
        <ul className="flex-4 text-left">
          <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2 hover:text-yellow-300">Home</a></li>
          <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2 hover:text-yellow-300">About</a></li>
          <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2 hover:text-yellow-300">Features</a></li>
          <li className="list-none inline-block px-5"><a href="#" className="no-underline text-white px-2 hover:text-yellow-300">Contact</a></li>

        </ul>
        <Image src={cart} alt="cart" className="w-8 cursor-pointer"/>


      </nav>
      <div className="text-white mt-48 max-w-xl">
        <h1 className="text-6xl font-semibold leading-normal">Gorceries <br />delivery in
        <span className="font-light">15 min</span></h1>
        <p>Grocify offer a wide range of products, inculuding fresh products,meats, dairy, backed goods and non-perishable items.</p>
        <div className="mt-10">
          <a href="#" className="bg-yellow-300 rounded-4xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent">Order Now</a>
          <a href="#">Dowlaod App </a>
        </div>

      </div>

      <Image src={grocery} alt="" className="w-full xl:w-1/2 absolute bottom-0 right-11"/>




       
 
    </div>
  )
}
