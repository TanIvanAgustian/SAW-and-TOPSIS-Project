'use client';

import { Carousel } from 'flowbite-react';

export default function CarouselItems({images}){
    return(
        <div className="flex justify-center">
        <div className="w-[800px] h-[200px] sm:h-[250px] xl:h-[500px] 2xl:[650px] ">
            <Carousel pauseOnHover>
            {images.map((image) => (
                <img src={image} alt="..." />
            ))}
      </Carousel>
    </div>
    </div>
        
    )
}