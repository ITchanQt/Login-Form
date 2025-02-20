import React from 'react'
import './App.css';

const Partners = () => {
  return (
            <div className="relative rounded-[35px] w-full my-16 bg-white shadow-lg overflow-hidden">
                <div className="slide-track flex">
                    {Array.from({ length: 14 }, (_, index) => (
                        <div key={index} className="h-[100px] w-[250px]">
                        <img
                            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
                            className="h-full w-full"
                            alt={`Slide ${index + 1}`}
                        />
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default Partners