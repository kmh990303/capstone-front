import * as React from "react";

import festImg from "@/images/fest.png";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export function ImproveCarousel() {
  return (
    <Carousel className="flex items-center mt-4 max-h-[80vh] max-w-[25vw] shadow-xl ml-16">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="h-full w-full">
              <CardContent className="h-full w-full">
                <Image
                  src={festImg}
                  alt="festival"
                  className="max-h-[100%] w-full translate-y-4"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
