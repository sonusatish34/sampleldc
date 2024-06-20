import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { ImPriceTags } from "react-icons/im";
import customData from './components/kk.json';

const CarDetails = () => {
  const [caritem, setCarItem] = useState(null);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();
  const { maker_model } = router.query;

  useEffect(() => {
    async function fetchCarDetails() {
      setLoading(true); 

      try {
        const response = await fetch('https://longdrivecarz.in/site/cars-info?location=Hyderabad');
        const items = await response.json();
        const cars = items?.data?.results;
        const car = cars?.find(i => i?.maker_model.toLowerCase() === maker_model?.toLowerCase());

        setCarItem(car);
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching completes (whether success or error)
      }
    }

    if (maker_model) {
      fetchCarDetails();
    }
  }, [maker_model]);

  return (
    <div className='bg-white p-3 text-black'>
      <div>
        <h2 className='p-1 font-medium text-xl'>{customData[maker_model?.toLowerCase()]?.id}</h2>
        
        <div style={{ position: "relative", width: "100%", paddingBottom: "10%" }}>
          {loading && <div>Loading...</div>} 
          {!loading && (
            <Image
              className='relative w-48 rounded'
              alt="Car Image"
              src={caritem?.car_image_car_right_view}
              width={100}
              height={200}
              objectFit="contain"
              onLoad={() => setLoading(false)} 
              onError={() => setLoading(false)} 
            />
          )}
        </div>

        <div className='overview'>
          <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-3'>Car Overview</h2>
          <ul className='my-2 flex flex-col gap-2'>
            <li className='flex items-center gap-8'>
              <BsFuelPump size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Vehicle Color</p>
              <p>{caritem?.vehicle_color}</p>
            </li>
            <li className='flex items-center gap-8'>
              <MdOutlineAirlineSeatReclineExtra size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Seater</p>
              <p>{caritem?.seater}</p>
            </li>
            <li className='flex items-center gap-8'>
              <TbManualGearbox size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Transmission Type</p>
              <p>{caritem?.transmission_type}</p>
            </li>
            <li className='flex items-center gap-8'>
              <ImPriceTags size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Price Per Day</p>
              <p>₹{caritem?.price_24_hours * 24}</p>
            </li>
            <li className='flex items-center gap-8'>
              <BsFuelPump size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Fuel Type</p>
              <p>{caritem?.fuel_type}</p>
            </li>
          </ul>
        </div>

        <h2>Description</h2>
        <p className='font-light p-1 text-sm'>
          {customData[maker_model?.toLowerCase()]?.desc}
        </p>

        <h2>Why Choose {customData[maker_model?.toLowerCase()]?.id} Self Drive Car Rental From Long Drive Cars</h2>
        <p className='font-light p-1 text-sm'>
          {customData[maker_model?.toLowerCase()]?.subdesc}
        </p>
      </div>
    </div>
  );
};

export default CarDetails;

