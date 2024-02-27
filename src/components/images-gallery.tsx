import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

import line1 from "../../public/tattoos/line1.webp";
import line2 from "../../public/tattoos/line2.webp";
import line3 from "../../public/tattoos/line3.webp";
import line4 from "../../public/tattoos/line4.webp";
import line5 from "../../public/tattoos/line5.webp";
import line6 from "../../public/tattoos/line6.webp";
import line7 from "../../public/tattoos/line7.webp";
import line8 from "../../public/tattoos/line8.webp";
import line9 from "../../public/tattoos/line9.webp";
import line10 from "../../public/tattoos/line10.webp";

import shadow1 from "../../public/tattoos/shadow1.webp";
import shadow2 from "../../public/tattoos/shadow2.webp";
import shadow3 from "../../public/tattoos/shadow3.webp";
import shadow4 from "../../public/tattoos/shadow4.webp";
import shadow5 from "../../public/tattoos/shadow5.webp";
import shadow6 from "../../public/tattoos/shadow6.webp";
import shadow7 from "../../public/tattoos/shadow7.webp";
import shadow8 from "../../public/tattoos/shadow8.webp";
import shadow9 from "../../public/tattoos/shadow9.webp";
import shadow10 from "../../public/tattoos/shadow10.webp";
import shadow11 from "../../public/tattoos/shadow11.webp";
import shadow12 from "../../public/tattoos/shadow12.webp";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

// type ImagesGalleryProps = {
//     scrollYProgress: MotionValue<number>;
// };

const ImagesGallery = () => {
    const imagesContainer = useRef(null);
    const { scrollYProgress } = useScroll({ target: imagesContainer, offset: ["start end", "end end"] });
    const translateY = useTransform(scrollYProgress, [0, 0.15], [0, -400]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.4, 1]);
    return (
        <motion.div ref={imagesContainer} style={{ translateY, opacity }} className="-mb-[200px] bg-grid-small-gold/20 bg-black pt-24 flex flex-col items-center w-screen max-w-full">
            <motion.div style={{ scale }} className="text-gold max-w-lg text-xl text-center flex flex-col gap-1 font-thin justify-center items-center ">
                {/* <div className="inset-0 bg-grid-small-gold/40 absolute"></div> */}
                <div className="w-40 aspect-square rounded-full relative">
                    <Image src="/awatar.jpg" fill sizes="256 256" alt="awatar" className="rounded-full" />
                </div>
                <div className="relative mt-4">
                    <p className="">
                        Hej! Nazywam się Patrycja, przygodę z tatuażem zaczęłam w 2020r. Głównie zajmuje się niewielkimi liniowymi wzorami ale w mojej galerii znajdziecie również cieniowane prace. Zachęcam do odwiedzenia instagrama gdzie
                        zamieszczam większość swoich dzieł.
                    </p>
                    <p className="font-bold">Zapraszam 💛</p>
                </div>
            </motion.div>
            <div className="mx-auto mt-12 flex gap-1 w-screen max-w-3xl p-1">
                <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {lineImages.map((src, index) => (
                        <TattooImage src={src} key={`line-image-${index}`} />
                    ))}
                </div>
                <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {shadowImages.map((src, index) => (
                        <TattooImage src={src} key={`shadow-tattoo-${index}`} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const TattooImage = ({ src }: { src: StaticImageData }) => {
    return (
        <div className="relative w-full aspect-square rounded-sm overflow-hidden">
            <Image loading="lazy" sizes="256 256" placeholder="blur" src={src} alt="tattoo" fill />
        </div>
    );
};

const lineImages = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10];

const shadowImages = [shadow1, shadow4, shadow5, shadow6, shadow7, shadow8, shadow9, shadow10, shadow11, shadow12];

export default ImagesGallery;
