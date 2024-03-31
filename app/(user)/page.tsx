
"use client";

import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <div className="grid h-36  grid-cols-2 gap-40 sm:h-80 xl:h-80 2xl:h-96 m-10">
      <Carousel className="w-64 h">
        <img src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" alt="..." />
        <img src="https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png" alt="..." />
        <img src="https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png" alt="..." />
        <img src="https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png" alt="..." />
        <img src="https://api.istad.co/media/image/73c3424a-39e0-450c-8969-8b35559594f5.png" alt="..." />
      </Carousel>
      <Carousel className="w-64" indicators={false}>
        <img src="https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png" alt="..." />
        <img src="https://api.istad.co/media/image/b9bf96d7-c352-4533-8025-f017517ba648.png" alt="..." />
        <img src="https://api.istad.co/media/image/b0b3f26d-4d21-45c6-9ed4-8e1f9f11e534.png" alt="..." />
        <img src="https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png" alt="..." />
        <img src="https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png" alt="..." />
      </Carousel>
    </div>
  );
}
