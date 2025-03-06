import React from 'react';

const images = [
  '2GO-logo.png',
  'AirAsia-logo.png',
  'cebu-pacific-airlines-logo.png',
  'ecpay_logo.png',
  'philippineairlines_logo.png',
  'pioneer_logo.png',
  'Starlite-logo.png'
];

const MemberLogo = ({ src, alt, size }) => (
  <div className="bg-gradient-to-r from-[#3698fa] to-[#2d7ad3] rounded-full p-2 mx-5">
    <img src={src} alt={alt} className={`sm:w-[${size.sm}] sm:h-[${size.sm}] w-[${size.default}] h-[${size.default}] rounded-lg transform transition duration-500 hover:scale-110`} />
  </div>
);

const PartnerLogo = ({ src, alt }) => (
  <div className="h-[40px] w-[100px] m-8 flex-shrink-0">
    <img src={src} alt={alt} className="h-full w-full object-contain transform transition duration-500 hover:scale-110" />
  </div>
);

const Partners = () => {
  return (
    <div className="w-full my-16">
      <p className="mb-2 text-lg text-gray-500 text-center">Members of</p>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-evenly my-2">
          <MemberLogo src="src/assets/membersOf/DOT.png" alt="DOT" size={{ sm: '100px', default: '80px' }} />
          <div className="p-2 mx-5">
            <img src="src/assets/membersOf/TPB.png" alt="TPB" className="sm:w-[150px] sm:h-[100px] w-[130px] h-[80px] rounded-lg transform transition duration-500 hover:scale-110" />
          </div>
          <MemberLogo src="src/assets/membersOf/DOTR.png" alt="DOTR" size={{ sm: '100px', default: '80px' }} />
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <p className="mt-7 text-lg text-gray-500 text-center">Partners</p>
        <div className="flex animate-scroll space-x-8">
          {Array.from({ length: 28 }, (_, index) => (
            <PartnerLogo
              key={index}
              src={`src/assets/partners/${images[index % images.length]}`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 7));
            }
          }
          .animate-scroll {
            animation: scroll 50s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Partners;
