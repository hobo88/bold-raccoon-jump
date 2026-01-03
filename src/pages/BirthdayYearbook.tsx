"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";

const BirthdayYearbook = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 flex flex-col items-center p-6 sm:p-10">
      <div className="max-w-4xl w-full space-y-8">
        <Card className="bg-white shadow-lg border-amber-200 border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-serif text-amber-800 mb-4">
              Happy Birthday, My Dearest Friend!
            </CardTitle>
            <p className="text-lg text-amber-700 font-light italic">
              A collection of cherished memories, just for you.
            </p>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <section className="text-center">
              <h2 className="text-3xl font-semibold text-amber-800 mb-4">A Special Message</h2>
              <p className="text-lg leading-relaxed">
                To my incredible best friend, on your special day, I wanted to create something truly unique to celebrate you. Every moment with you is a treasure, and this yearbook is a small reflection of the joy, laughter, and love you bring into my life. Thank you for being you.
              </p>
            </section>

            <Separator className="bg-amber-300" />

            <section>
              <h2 className="text-3xl font-semibold text-amber-800 mb-4 text-center">Photo Album</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Placeholder for photos */}
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Photo 1 Placeholder
                </div>
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Photo 2 Placeholder
                </div>
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Photo 3 Placeholder
                </div>
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Photo 4 Placeholder
                </div>
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Photo 5 Placeholder
                </div>
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Photo 6 Placeholder
                </div>
              </div>
              <p className="text-center text-amber-700 mt-4 italic">More photos coming soon!</p>
            </section>

            <Separator className="bg-amber-300" />

            <section>
              <h2 className="text-3xl font-semibold text-amber-800 mb-4 text-center">Video Album</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Placeholder for videos */}
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Video 1 Placeholder
                </div>
                <div className="aspect-video bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-sm">
                  Video 2 Placeholder
                </div>
              </div>
              <p className="text-center text-amber-700 mt-4 italic">Special video messages to be added!</p>
            </section>
          </CardContent>
        </Card>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default BirthdayYearbook;