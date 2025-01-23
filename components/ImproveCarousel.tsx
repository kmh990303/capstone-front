"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselPropsType {
  recommendedEvents: {
    uuid: string;
    name: string;
    imageUrl: string;
    place: string;
    period: string;
    detail: string;
  }[];
  setSelectedImproveIndex: React.Dispatch<React.SetStateAction<number>>; // setSelectedImproveIndex를 prop으로 받음
}

export function ImproveCarousel({
  recommendedEvents,
  setSelectedImproveIndex,
}: CarouselPropsType) {
  const [slideIdx, setSlideIdx] = useState<number>(0);

  useEffect(() => {
    setSelectedImproveIndex(slideIdx); // slideIdx가 변경될 때마다 부모 컴포넌트로 전달
  }, [slideIdx, setSelectedImproveIndex]);

  const handleNext = () => {
    // Next 버튼 클릭 시, 인덱스 증가 후 부모에게 업데이트
    const nextIdx = (slideIdx + 1) % recommendedEvents.length; // 배열의 끝에 도달하면 처음으로 돌아갑니다.
    setSlideIdx(nextIdx);
  };

  // const handlePrev = () => {
  //   // Previous 버튼 클릭 시, 인덱스 감소 후 부모에게 업데이트
  //   const prevIdx =
  //     (slideIdx - 1 + improveMethod.length) % improveMethod.length; // 배열의 처음에 도달하면 끝으로 돌아갑니다.
  //   setSlideIdx(prevIdx);
  // };

  return (
    <Carousel className="flex items-center mt-10 max-h-[80vh] max-w-[25vw] shadow-xl ml-14">
      <CarouselContent>
        {recommendedEvents.length > 0 &&
          recommendedEvents[0].imageUrl !== "" &&
          recommendedEvents.map((item) => (
            <CarouselItem key={item.uuid}>
              <Card className="h-full w-full">
                <CardContent className="h-full w-full">
                  <Image
                    key={slideIdx} // key 속성으로 슬라이드 인덱스를 사용해 새로 렌더링하도록 함
                    src={recommendedEvents[slideIdx].imageUrl}
                    alt={item.uuid}
                    className="max-h-[100%] w-full translate-y-4"
                    width={300}
                    height={300}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext onClick={handleNext} />
    </Carousel>
  );
}
