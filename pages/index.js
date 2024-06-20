import Image from "next/image";
// import { Inter } from "next/font/google";
import Login from "./components/Login";
// import Home from "./components/Homepage";
import Homepage from "./components/HomePage/Homepage";
// import Dashboard from "./components/Dashboard";
// import II from "./components/II";
import Feech from "./Feech";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({items,cars}) {
  // console.log(cars,"carrrr");
  return (
  <div className="text-center items-center">
  {/* hi */}  
  {/* <Login/> */}
  <Homepage data={cars}/>
  {/* <Dashboard/> */}
  {/* <II/> */}
  {/* <Feech data={items}/> */}
  
  </div>
   
  );  
}
export async function getStaticProps() {
  const response = await fetch('https://longdrivecarz.in/site/cars-info?location=Hyderabad');
  const items = await response.json();
  const cars = items?.data?.results
  return {
    props: {
      items,
      cars
    },
  };
}
