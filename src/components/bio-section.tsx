import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const BioSection = () => {
    const bioContainer = useRef(null);
    const { scrollYProgress } = useScroll({ target: bioContainer, offset: ["start end", "end end"] });
    const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -600]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);
    return (
        <motion.div style={{ translateY, scale }} ref={bioContainer} className="h-screen bg-black w-full flex flex-col items-center justify-center relative">
            <div className="text-gold max-w-lg text-xl text-center flex flex-col gap-1 font-thin justify-center items-center">
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
            </div>
        </motion.div>
    );
};

export default BioSection;
