import React, { useState, useEffect } from "react";
import photo1 from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';
import photo4 from './assets/4.png';

const landingPhotos = [photo1, photo2, photo3, photo4];

const LandingImages = () => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(e => (e + 1) % landingPhotos.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getCurrentIndex = (index) => {
        if (index < 0) {
            return landingPhotos.length + (index % landingPhotos.length);
        } else {
            return index % landingPhotos.length;
        }
    };

    return (
        <div className="carousel w-auto overflow-hidden rounded-[80px] m-7">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${getCurrentIndex(imageIndex) * 100}%)` }}>
                {landingPhotos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Imagen ${index + 1}`}
                        className="w-full "
                    />
                ))}
                <img
                    src={landingPhotos[0]}
                    alt={`Imagen 1`}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default LandingImages;
