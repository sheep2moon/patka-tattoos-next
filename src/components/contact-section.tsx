"use client";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import React, { useRef } from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const ContactSection = () => {
    const contactContainer = useRef(null);
    const { scrollYProgress } = useScroll({ target: contactContainer, offset: ["start end", "center center"] });

    useMotionValueEvent(scrollYProgress, "change", latest => {
        console.log("scre changed to", latest);
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [400, 0]);

    return (
        <motion.div style={{ translateY }} ref={contactContainer} className="w-screen -mt-[400px] h-screen max-w-full bg-gradient-to-b from-black to-stone-950 overflow-hidden flex justify-center items-center text-gold relative">
            <div className="max-w-full pointer-events-none bg-dot-gold/20 absolute inset-0"></div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">Kontakt</h2>
                <div className="flex flex-col gap-4">
                    <a target="_blank" className="text-3xl hover:scale-105 duration-200 text-gold flex gap-4 items-center" href="https://www.instagram.com/patka_tattoos">
                        <FaInstagramSquare />
                        <span className="text-2xl">@patka_tattoos</span>
                    </a>
                    <a target="_blank" className="text-3xl hover:scale-105 duration-200 text-gold flex gap-4 items-center" href="https://www.facebook.com/profile.php?id=100088162022824">
                        <FaFacebook />
                        <span className="text-2xl">Patka Tattoos</span>
                    </a>
                    <a target="_blank" className="text-3xl hover:scale-105 duration-200 text-gold flex gap-4 items-center" href="mailto:patkaa.tattoos@gmail.com">
                        <GoMail />
                        <span className="text-2xl">patkaa.tattoos@gmail.com</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactSection;
