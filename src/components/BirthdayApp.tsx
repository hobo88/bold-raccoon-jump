"use client";

import React, { useState } from 'react'; // Removed useEffect
import { Gift, HeartHandshake, X } from 'lucide-react';

// Array of image paths
const imagePaths = [
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.52 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.53 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.54 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.54 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.55 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.55 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.56 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.56 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.56 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.57 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.57 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.30.57 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.43 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.43 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.44 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.44 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.44 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.45 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.45 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.46 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.46 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.46 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.47 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.47 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.48 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.48 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.48 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.49 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.49 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.31.49 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.03 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.04 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.04 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.05 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.05 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.05 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.06 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.07 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.07 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.08 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.08 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.08 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.09 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.09 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.10 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.11 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.11 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.11 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.11 AM (3).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.12 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.12 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.13 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.13 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.14 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.15 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.16 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.17 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.18 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.32.18 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.33.42 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.02 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.33.42 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.03 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.03 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.03 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.05 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.05 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.05 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.06 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.06 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.06 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.07 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.08 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.08 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.09 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.09 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.09 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.10 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.09 AM (3).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.10 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.10 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.11 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.11 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.12 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.12 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.13 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.13 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.14 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.14 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.15 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.15 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.16 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.17 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.17 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.18 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.18 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.19 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.19 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.19 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.20 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.20 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.21 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.21 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.21 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.22 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.22 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.23 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.23 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.23 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.24 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.24 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.24 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.25 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.25 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.26 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.26 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.27 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.27 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.28 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.28 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.29 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.29 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.30 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.30 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.30 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.31 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.31 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.32 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.33 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.34 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.34 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.34 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.35 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.36 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.36 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.37 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.37 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.38 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.36.38 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.34 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.34 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.35 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.35 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.45 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.47 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.47 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.47 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.48 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.48 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.49 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.50 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.50 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.50 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.51 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.51 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.52 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.52 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.53 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.54 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.37.54 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.03 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.04 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.04 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.05 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.14 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.15 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.18 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.18 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.18 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.19 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.40.20 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.30 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.31 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.31 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.31 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.32 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.43 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.44 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.44 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.45 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.46 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.46 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.47 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.47 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.48 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.48 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.49 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.50 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.50 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.50 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.51 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.41.52 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.46.25 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.21 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.21 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.21 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.22 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.22 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.22 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.23 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.23 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 1.57.23 AM (2).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 2.01.30 AM.jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 2.01.30 AM (1).jpeg",
  "/Pics/WhatsApp Image 2026-01-01 at 2.01.30 AM (2).jpeg",
  "/Pics/473606869_1673129566643622_7411595000803293215_n.jpg",
  "/Pics/WhatsApp Image 2026-01-02 at 10.33.29 PM.jpeg",
  "/Pics/WhatsApp Image 2026-01-02 at 10.33.30 PM.jpeg",
  "/Pics/WhatsApp Image 2026-01-02 at 10.34.46 PM.jpeg",
  "/Pics/WhatsApp Image 2026-01-02 at 10.35.14 PM.jpeg",
];

const videoPath = "/Pics/WhatsApp Video 2026-01-01 at 1.37.46 AM.mp4";

const BirthdayApp: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const revealContent = () => {
    setIsRevealed(true);
  };

  const openModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImageSrc('');
  };

  return (
    <div className="font-sans antialiased bg-gradient-to-br from-pink-50 to-purple-100 text-purple-900 min-h-screen flex flex-col items-center justify-center p-6 sm:p-10">
      {/* "Open Me" Card */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 z-50 transition-opacity duration-1000 ease-out ${
          isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        onClick={revealContent}
      >
        <div className="bg-white shadow-2xl border-pink-300 border-4 rounded-2xl p-10 text-center max-w-md w-full transform scale-95 hover:scale-100 transition-transform duration-300 ease-in-out cursor-pointer">
          <Gift className="mx-auto mb-6 text-pink-500 w-16 h-16 animate-bounce-slow" />
          <h2 className="text-5xl font-extrabold text-purple-800 mb-4">Open Me!</h2>
          <p className="text-xl text-pink-700 font-light italic">A special surprise awaits...</p>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`max-w-4xl w-full space-y-10 bg-white shadow-xl border-pink-200 border-4 rounded-xl overflow-hidden transition-opacity duration-1000 ease-out ${
          isRevealed ? 'opacity-100' : 'opacity-0 hidden'
        }`}
      >
        {/* Header Section */}
        <header className="text-center bg-gradient-to-r from-pink-100 to-purple-100 py-8">
          <h1 className="text-6xl font-extrabold text-purple-800 mb-4 tracking-wide leading-tight">
            Happy Birthday, Awishorjo!
          </h1>
          <p className="text-xl text-pink-700 font-light italic px-4">
            A cherished collection of memories, laughter, and love, crafted just for you.
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-10 p-8">
          {/* Special Message */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-purple-800 mb-5">A Special Message From The Heart</h2>
            <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
              To my incredible best friend, on your special day, I wanted to create something truly unique to celebrate you. Every moment with you is a treasure, and this yearbook is a small reflection of the joy, laughter, and love you bring into my life. Thank you for being you, and for all the wonderful memories we've shared. Here's to many more!
            </p>
          </section>

          <div className="bg-pink-300 h-1 w-1/2 mx-auto rounded-full"></div>

          {/* Photo Album */}
          <section>
            <h2 className="text-4xl font-bold text-purple-800 mb-6 text-center">Our Photo Album</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {imagePaths.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square bg-purple-50 rounded-lg flex flex-col items-center justify-center text-pink-600 border border-pink-100 shadow-sm p-4 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => openModal(src)}
                >
                  <img src={src} alt={`Memory Photo ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </section>

          <div className="bg-pink-300 h-1 w-1/2 mx-auto rounded-full"></div>

          {/* Video Album */}
          <section>
            <h2 className="text-4xl font-bold text-purple-800 mb-6 text-center">Our Video Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="aspect-video bg-purple-50 rounded-lg flex flex-col items-center justify-center text-pink-600 border border-pink-100 shadow-sm p-4 overflow-hidden">
                <video controls loop className="w-full h-full object-cover rounded-lg">
                  <source src={videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          <div className="bg-pink-300 h-1 w-1/2 mx-auto rounded-full"></div>

          {/* Birthday Wishes & Future Dreams */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-purple-800 mb-5">Birthday Wishes & Future Dreams</h2>
            <div className="flex flex-col items-center justify-center bg-pink-50 rounded-lg p-6 border border-pink-100 shadow-inner max-w-2xl mx-auto">
              <HeartHandshake className="mb-4 text-pink-500 w-12 h-12" />
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                May your special day be filled with immense joy, laughter, and everything wonderful you deserve. Here's to another year of amazing adventures, growth, and unforgettable moments together!
              </p>
              <p className="text-md font-semibold text-purple-700 italic">
                With all my love, Farhan.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Image Modal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${
          showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeModal}
      >
        <div className="relative max-w-3xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
          <img src={modalImageSrc} alt="Full-screen Memory Photo" className="max-w-full max-h-full object-contain rounded-lg shadow-lg" />
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold leading-none hover:text-pink-300 transition-colors duration-200"
            onClick={closeModal}
          >
            <X size={32} />
          </button>
        </div>
      </div>

      {/* Made with Dyad Footer */}
      <footer className="p-4 text-center mt-8">
        <a
          href="https://www.dyad.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Made by Farhan
        </a>
      </footer>
    </div>
  );
};

export default BirthdayApp;