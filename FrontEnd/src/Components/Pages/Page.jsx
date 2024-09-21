// import{Router, Routes, Route} from 'react-router-dom'
// import Home from "../Pages/Home"
// import About from "../Pages/About"
// import Contact from "../Pages/Contact"
// function Page() {
//   const data = [
//     {
//       path: "/",
//       element: <Home/>
//     },
//     {
//       path: "/About",
//       element: <About/>,
//     },
//     {
//       path: "Contact",
//       element: <Contact/>,
//     },
//   ];
//   return (
//     <div>
//       <Router>
//            <Routes>

//      { data.map((datas, index)=>{
//        return(
//          <div key={index}> 
//  <Route path ={datas.path}  element={datas.element}/>
//           </div>
//         )
//       })}
//       </Routes>
//       </Router>
//     </div>
//   )
// }

// export default Page



// import Home from "../Pages/Home"
function Page() {
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

export default Page
