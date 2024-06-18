import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { useEffect, useState } from 'react';
// import car from '../pages/images/newlogo.png'
const CarDetails = () => {

  // const [caritem,setCarItem] = useState(null)
  // const router = useRouter();
  // const { maker_model } = router.query;

  // useEffect(() => {
  //   async function fetchApi() {
  //     const response = await fetch('https://longdrivecarz.in/site/cars-info?location=Hyderabad');
  //     const items = await response.json();
  //     const cars = items?.data?.results
  //     // const car = 
  //     const car = cars?.find(i => i.maker_model === maker_model);
  //     setCarItem(car);
  //     console.log(car,"carrrr");

  //   }
  //   fetchApi()
  // },[])

  return (
    // <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    //   <button onClick={() => router.back()} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Back</button>
    //   <div className="relative w-full h-72 border-blue-200">
    //     <Image
    //       src={selectedItem.photo_url}
    //       alt="Car"
    //       layout="fill"
    //       objectFit="cover"
    //       className="rounded-t-lg"
    //     />
    //   </div>
    //   <div className="p-4">
    //     <h2 className="text-2xl font-bold mb-2">{selectedItem.maker_model}</h2>
    //     <div className='flex items-baseline justify-between text-xl font-semibold'>
    //       <p className="text-blue-500 font-bold mb-3">₹{selectedItem.price_24_hours * 24}/day</p>
    //     </div>
    //     <div className="flex items-center justify-between border-b border-gray-300 pb-3 text-black font-normal text-base">
    //       <div className="flex items-center">
    //         <BsFuelPump className="mr-1 text-red-700" />
    //         <span>{selectedItem.fuel_type}</span>
    //       </div>
    //       <div className="flex items-center">
    //         <TbManualGearbox className="mr-1 text-blue-500" />
    //         <span>{selectedItem.transmission_type}</span>
    //       </div>
    //       <div className="flex items-center">
    //         <MdOutlineAirlineSeatReclineExtra className="mr-1" />
    //         <span>{selectedItem.seater}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='bg- p-10'>
      {/* la
      <div>{caritem?.maker_model}</div>
      <div>{caritem?.price_24_hours}</div> */}
      <div>
        <h2 className='p-1'>Mahindra thar</h2>
        
        <div className='bg-blue-300 h-48 w-44 rounded'>

        </div>
        <h2 className='font-semibold p-1'>Description</h2>
        <p>
          
          In 2020, Mahindra introduced the second generation Thar, which was a completely redesigned version of the vehicle. The Thar 2020 has a new, more modern design that features a bold grille, LED headlights, and a hardtop roof. It is powered by either a 2.0-liter turbocharged gasoline engine or a 2.2-liter turbocharged diesel engine, both of which are mated to either a six-speed manual or a six-speed automatic transmission. The Thar 2020 also has updated suspension and drivetrain components, as well as a range of new features, such as a touchscreen infotainment system, a rearview camera, and an adventure statistics display. The Thar 2020 is available in two trim levels: the AX and the LX, with the latter being the more premium option.

          The Mahindra Thar has been well-received by both off-road enthusiasts and the general public in India. It has become a popular vehicle for adventure enthusiasts, as it is capable of handling some of the most challenging terrains in India.
        </p>
      </div>
    </div>
  );
};



export default CarDetails;
