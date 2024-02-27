"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const Lamp = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut"
            }}
            className="absolute opacity-60 inset-auto z-30 h-36 w-64 rounded-full bg-gold blur-3xl"
        ></motion.div>
    );
};
