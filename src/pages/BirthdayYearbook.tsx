"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Image, Video, HeartHandshake } from 'lucide-react'; // Import icons for placeholders

const BirthdayYearbook = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 text-purple-900 flex flex-col items-center p-6 sm:p-10 font-sans">
      <div className="max-w-4xl w-full space-y-10">
        <Card className="bg-white shadow-xl border-pink-200 border-4 rounded-xl overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-pink-100 to-purple-100 py-8">
            <CardTitle className="text-6xl font-extrabold text-purple-800 mb-4 tracking-wide leading-tight">
              Happy Birthday, My Dearest Friend!
            </CardTitle>
            <p className="text-xl text-pink-700 font-light italic px-4">
              A cherished collection of memories, laughter, and love, crafted just for you.
            </p>
          </CardHeader>
          <CardContent className="space-y-10 p-8">
            <section className="text-center">
              <h2 className="text-4xl font-bold text-purple-800 mb-5">A Special Message From The Heart</h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
                To my incredible best friend, on your special day, I wanted to create something truly unique to celebrate you. Every moment with you is a treasure, and this yearbook is a small reflection of the joy, laughter, and love you bring into my life. Thank you for being you, and for all the wonderful memories we've shared. Here's to many more!
              </p>
            </section>

            <Separator className="bg-pink-300 h-1 w-1/2 mx-auto rounded-full" />

            <section>
              <h2 className="text-4xl font-bold text-purple-800 mb-6 text-center">Our Photo Album</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Placeholder for photos */}
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="aspect-square bg-purple-50 rounded-lg flex flex-col items-center justify-center text-pink-600 border border-pink-100 shadow-sm p-4">
                    <Image size={48} className="mb-2 text-pink-400" />
                    <span className="text-sm font-medium">Memory Photo {num}</span>
                    <p className="text-xs text-gray-500 mt-1 text-center">A beautiful moment captured.</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-pink-700 mt-6 italic text-lg">More cherished photos to be added soon!</p>
            </section>

            <Separator className="bg-pink-300 h-1 w-1/2 mx-auto rounded-full" />

            <section>
              <h2 className="text-4xl font-bold text-purple-800 mb-6 text-center">Our Video Collection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Placeholder for videos */}
                {[1, 2].map((num) => (
                  <div key={num} className="aspect-video bg-purple-50 rounded-lg flex flex-col items-center justify-center text-pink-600 border border-pink-100 shadow-sm p-4">
                    <Video size={48} className="mb-2 text-pink-400" />
                    <span className="text-sm font-medium">Special Video {num}</span>
                    <p className="text-xs text-gray-500 mt-1 text-center">A heartwarming video message.</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-pink-700 mt-6 italic text-lg">Personalized video messages are on their way!</p>
            </section>

            <Separator className="bg-pink-300 h-1 w-1/2 mx-auto rounded-full" />

            <section className="text-center">
              <h2 className="text-4xl font-bold text-purple-800 mb-5">Birthday Wishes & Future Dreams</h2>
              <div className="flex flex-col items-center justify-center bg-pink-50 rounded-lg p-6 border border-pink-100 shadow-inner max-w-2xl mx-auto">
                <HeartHandshake size={48} className="mb-4 text-pink-500" />
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  May your special day be filled with immense joy, laughter, and everything wonderful you deserve. Here's to another year of amazing adventures, growth, and unforgettable moments together!
                </p>
                <p className="text-md font-semibold text-purple-700 italic">
                  With all my love, your best friend.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default BirthdayYearbook;