"use client";
import Image from "next/image";
import TextAnim from "../components/text-anim";
import { MediaLink } from "../components/media-link";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Moth from "../components/moth";
import ImagesGallery from "../components/images-gallery";
import { useEffect, useRef } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { Lamp } from "../components/lamp";
import ContactSection from "../components/contact-section";
import BioSection from "../components/bio-section";
import { IoMdArrowDropdown } from "react-icons/io";
import Credits from "../components/credits";

export default function Home() {
    const heroContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroContainer,
        offset: ["start start", "center start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.2]);
    const arrowOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-b from-stone-950 to-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="bg-dot-gold/[0.2] w-full">
                <motion.div style={{ scale, translateY }} className="flex flex-col items-center min-h-screen justify-center w-full" ref={heroContainer}>
                    <Lamp />
                    <Moth className="max-w-xs" />

                    <div className="w-screen max-w-xl mx-auto flex justify-center">
                        <TextAnim />
                    </div>

                    <div className="flex gap-4 mt-4 z-50">
                        <MediaLink href="https://www.instagram.com/patka_tattoos">
                            <FaInstagramSquare />
                        </MediaLink>
                        <MediaLink href="https://www.facebook.com/profile.php?id=100088162022824">
                            <FaFacebook />
                        </MediaLink>
                        <MediaLink href="mailto:patkaa.tattoos@gmail.com">
                            <GoMail />
                        </MediaLink>
                    </div>
                    <motion.div style={{ opacity: arrowOpacity }}>
                        <IoMdArrowDropdown className="w-8 h-8 text-gold mt-44 animate-bounce" />
                    </motion.div>
                </motion.div>
            </div>
            {/* <BioSection /> */}
            <ImagesGallery />

            <ContactSection />
            <Credits />
        </main>
    );
}
