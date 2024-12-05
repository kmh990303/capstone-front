"use client";

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

interface CarouselPropsType {
  improveMethod: {
    image: string;
    name: string;
    date: string;
    area: string;
    detail: string;
    uuid: string;
  }[];
  onItemSelect: (index: number) => void; // index를 넘겨주도록 수정
}

export function ImproveCarousel({
  improveMethod,
  onItemSelect,
}: CarouselPropsType) {
  return (
    <Carousel className="flex items-center mt-4 max-h-[80vh] max-w-[25vw] shadow-xl ml-16">
      <CarouselContent>
        {improveMethod.map((item, index) => (
          <CarouselItem key={item.uuid} onClick={() => onItemSelect(index)}>
            {" "}
            {/* 인덱스 넘기기 */}
            <Card className="h-full w-full">
              <CardContent className="h-full w-full">
                <Image
                  src={item.image}
                  alt={item.uuid}
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
