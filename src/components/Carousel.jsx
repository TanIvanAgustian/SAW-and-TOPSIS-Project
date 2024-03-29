'use client';

import { Carousel } from 'flowbite-react';

export default function CarouselItems({images}){
    return(
        <div className="flex justify-center mx-3">
        <div className="w-[800px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:[650px] ">
            <Carousel pauseOnHover>
            {images.map((image) => (
                <img src={image} alt="..." />
            ))}
      </Carousel>
    </div>
    </div>
        
    )
}