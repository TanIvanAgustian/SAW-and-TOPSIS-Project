'use client';

import DisclosureItems from '../../components/Disclosure';
import CarouselItems from '../../components/Carousel'
import Footers from '../../components/Footer';
import { Blockquote } from 'flowbite-react';
import Background from "../../assets/padus.jpg";

export default function Dashboard() {
    const CarouselImages = [
        "https://img.antaranews.com/cache/1200x800/2023/07/26/IMG_20230725_232910.jpg.webp",
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/gallerybiro/2023/07/big/img_64c22997026ce0-49642292-15475447.jpeg",
        "https://cdn-u1-gnfi.imgix.net/post/large-39a65-img-20180807-wa0006-dfe3a47ba9af08ccea62a1f9ffa96e30.jpg?fit=crop&crop=faces%2Centropy&lossless=true&auto=compress%2Cformat&w=730&h=486",

    ];
    const Disclosure = [
        {
            title:"What is your refund policy?",
            content:"haloo",
        },
        {
            title:"What is your refund policy?",
            content:"haloo",
        },
        {
            title:"What is your refund policy?",
            content:"haloo",
        },
    ]

    return (
        <div className="bg-blue-900/50">
            <video id="background-video" loop autoPlay>
                <source src="https://drive.google.com/file/d/17RRPszfjVNZfPVUKEmGFvL44tbxwph85/view?usp=drive_link" type="video/mp4" />
            </video>
            <div className='flex justify-center p-4 font-bold'>
            <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Gita Dian Nuswa<span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">Official Website</span></h1>
            
            
            </div>
            <CarouselItems images={CarouselImages}/>
            <div className="w-full px-4 py-16">
                <div className="grid grid-flow-col justify-stretch w-full max-w bg-white p-2">
                    <DisclosureItems items={Disclosure}/>
                    <DisclosureItems items={Disclosure}/>
                    <DisclosureItems items={Disclosure}/>
                </div>
            </div>
            <Blockquote>
                "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
                complex dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
            <Footers/>
        </div>
    )
}