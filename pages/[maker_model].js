import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';

const CarDetails = () => {

    // const displayedItems = [
    //     {
    //       "maker_model": "HYUNDAI AURA",
    //       "car_owner_id": 5,
    //       "car_number": "TS28Q1467",
    //       "price_24_hours": 77,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_072c12e6d8544e419a0810ba0fb4bff6.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Blue"
    //     },
    //     {
    //       "maker_model": "MARUTHI BALENO",
    //       "car_owner_id": 9,
    //       "car_number": "TS05FC6005",
    //       "price_24_hours": 83,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_c593f80b31a2480c97ca0f4b1ee58f0a.jpeg",
    //       "fuel_type": "Diesel",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "SWIFT DZIRE",
    //       "car_owner_id": 10,
    //       "car_number": "AP40F8748",
    //       "price_24_hours": 83,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000666331/images/car_image_car_right_view_fd7bc4ad998b455eb6aee0340e2ccd3d.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "MARUTHI BALENO",
    //       "car_owner_id": 11,
    //       "car_number": "AP39SZ5981",
    //       "price_24_hours": 83,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_283b24dfb3df4ba28109e79c5459d196.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Blue"
    //     },
    //     {
    //       "maker_model": "MARUTHI CELERIO",
    //       "car_owner_id": 15,
    //       "car_number": "TS02FJ0970",
    //       "price_24_hours": 62,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_4f7672ec27554e10b0ffe6f562709d47.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Red"
    //     },
    //     {
    //       "maker_model": "TATA TIAGO",
    //       "car_owner_id": 17,
    //       "car_number": "TS08JU9831",
    //       "price_24_hours": 74,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_125df67ec8014c8ab66bdf1e2c5ee151.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "MARUTHI BALENO",
    //       "car_owner_id": 21,
    //       "car_number": "TS08JR1106",
    //       "price_24_hours": 83,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_f81e62db71504e5f8a76cfc8709bc109.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Red"
    //     },
    //     {
    //       "maker_model": "MARUTHI WAGON R",
    //       "car_owner_id": 24,
    //       "car_number": "TS29M8477",
    //       "price_24_hours": 62,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_eaa9c7a132094e208006e4241979c193.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "MARUTHI WAGON R",
    //       "car_owner_id": 26,
    //       "car_number": "TS08GN6324",
    //       "price_24_hours": 62,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_c7c67b21b9fe491a86cb4fdec738aeed.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "MARUTHI BALENO",
    //       "car_owner_id": 28,
    //       "car_number": "TS02FG2811",
    //       "price_24_hours": 83,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_956f1167e708405fae674df15ff83146.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Blue"
    //     },
    //     {
    //       "maker_model": "MAHINDRA THAR",
    //       "car_owner_id": 29,
    //       "car_number": "TS18H4569",
    //       "price_24_hours": 208,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000666331/images/car_image_car_right_view_f57987a01ce04bf5bf09472e1ce7b95a.jpeg",
    //       "fuel_type": "Diesel",
    //       "transmission_type": "Manual",
    //       "seater": "4",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "HYUNDAI I20",
    //       "car_owner_id": 33,
    //       "car_number": "TS08JW6180",
    //       "price_24_hours": 91,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_fee0890802fb4150929befca3e3cfa16.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Red"
    //     },
    //     {
    //       "maker_model": "MARUTHI ERTIGA",
    //       "car_owner_id": 34,
    //       "car_number": "TS08JX1166",
    //       "price_24_hours": 116,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000666331/images/car_image_car_right_view_17490e1651214dd7a01a8a2d060c3066.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "7",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "RENAULT KIGER",
    //       "car_owner_id": 36,
    //       "car_number": "TS07JN9077",
    //       "price_24_hours": 74,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_7d3b3f7bef064b30a58e940c54e5d218.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Maroon"
    //     },
    //     {
    //       "maker_model": "MARUTHI CELERIO",
    //       "car_owner_id": 39,
    //       "car_number": "TS07JK1688",
    //       "price_24_hours": 62,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000566266/images/car_image_car_right_view_3f3b75666030454085caaf409359c820.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "SWIFT AUTOMATIC",
    //       "car_owner_id": 41,
    //       "car_number": "TS08JW3174",
    //       "price_24_hours": 77,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222446/images/car_image_car_right_view_aaba7f4ad2944612a2e43872b11d7180.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Automatic",
    //       "seater": "5",
    //       "vehicle_color": "Grey"
    //     },
    //     {
    //       "maker_model": "HYUNDAI I20",
    //       "car_owner_id": 43,
    //       "car_number": "TS08JT7376",
    //       "price_24_hours": 91,
    //       "car_image_car_right_view": "https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls/9000222449/images/car_image_car_right_view_4e6bbd0ff2494d2790d74ab6308e965d.jpeg",
    //       "fuel_type": "Petrol",
    //       "transmission_type": "Manual",
    //       "seater": "5",
    //       "vehicle_color": "Black"
    //     }
    //   ]
  const router = useRouter();
  const { maker_model } = router.query;

  const selectedItem = displayedItems.find(item => item.maker_model === maker_model);

  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <button onClick={() => router.back()} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Back</button>
      <div className="relative w-full h-72 border-blue-200">
        <Image
          src={selectedItem.photo_url}
          alt="Car"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{selectedItem.maker_model}</h2>
        <div className='flex items-baseline justify-between text-xl font-semibold'>
          <p className="text-blue-500 font-bold mb-3">₹{selectedItem.price_24_hours * 24}/day</p>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-3 text-black font-normal text-base">
          <div className="flex items-center">
            <BsFuelPump className="mr-1 text-red-700" />
            <span>{selectedItem.fuel_type}</span>
          </div>
          <div className="flex items-center">
            <TbManualGearbox className="mr-1 text-blue-500" />
            <span>{selectedItem.transmission_type}</span>
          </div>
          <div className="flex items-center">
            <MdOutlineAirlineSeatReclineExtra className="mr-1" />
            <span>{selectedItem.seater}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   // Fetch the data from an API or a local data source.
//   // For simplicity, we're assuming data is fetched here.
//   const data = await fetchData(); // replace fetchData with your actual data fetching logic
//   return {
//     props: {
//       displayedItems: data,
//     },
//   };
// }

export default CarDetails;
