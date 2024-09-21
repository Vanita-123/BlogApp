

function NavBar() {
    return (
        <div className="flex justify-center m-3 bg-zinc-700 text-white p-3 font-serif text-xl" >
        <ul className="flex gap-24 ">
          <li className=" hover:text-blue-500">Home</li>
          <li className=" hover:text-blue-500">About</li>
          <li className=" hover:text-blue-500">Contact</li>
          <li className=" hover:text-blue-500">SignUp</li>
        </ul>
      </div>
      )
    }

export default NavBar
