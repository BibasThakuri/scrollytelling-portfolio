"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 90;
const SEQUENCE_DIR = "/sequence/";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Framer Motion scroll hook (linked to the 500vh container)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 89)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // 1. Preload all images to avoid flashing during scroll
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        promises.push(
          new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            // Assuming sequence files are named `frame_{index}_delay-0.07s.png` with two-digit padding
            const paddedIndex = i.toString().padStart(2, "0");
            img.src = `${SEQUENCE_DIR}frame_${paddedIndex}_delay-0.07s.png`;
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load frame ${i}`));
            loadedImages[i] = img;
          })
        );
      }

      try {
        await Promise.all(promises);
        setImages(loadedImages);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading image sequence:", error);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // 2. Render logic: Redraw canvas whenever scroll changes
    if (!isLoaded || images.length === 0) return;

    const renderFrame = (index: number) => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      const img = images[index];
      if (!ctx || !img) return;

      // Handle responsive drawing (object-fit: cover logic on Canvas)
      const canvas = canvasRef.current;
      // Set actual canvas size to match current window pixel ratio to avoid blurring
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Calculate object-fit logic
      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Draw initial frame
    renderFrame(0);

    // Subscribe to scroll changes and update frame
    const unsubscribe = frameIndex.on("change", (latest) => {
      // Clamp value safely between 0 and 89
      const currentIndex = Math.min(Math.max(Math.floor(latest), 0), FRAME_COUNT - 1);
      
      // Use requestAnimationFrame to optimize drawing performance
      requestAnimationFrame(() => {
        renderFrame(currentIndex);
      });
    });

    return () => unsubscribe();
  }, [isLoaded, images, frameIndex]);

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 z-20">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading Experience...
            </motion.div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
