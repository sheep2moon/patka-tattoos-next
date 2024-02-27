"use client";
import Image from "next/image";
import TextAnim from "../components/text-anim";
import { MediaLink } from "../components/media-link";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Moth from "../components/moth";
import ImagesGallery from "../components/images-gallery";
import { useRef } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
import { Lamp } from "../components/lamp";
import ContactSection from "../components/contact-section";

export default function Home() {
    const heroContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroContainer,
        offset: ["start start", "center start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="bg-dot-gold/[0.2] w-full">
                <motion.div style={{ scale, translateY }} className="flex flex-col items-center min-h-screen justify-center  w-full" ref={heroContainer}>
                    <Moth />
                    <div className="w-screen max-w-xl mx-auto flex justify-center">
                        <TextAnim />
                    </div>
                    <Lamp />
                    <div className="flex gap-4 mt-4">
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
                </motion.div>
            </div>

            <ImagesGallery scrollYProgress={scrollYProgress} />

            <ContactSection />
        </main>
    );
}
