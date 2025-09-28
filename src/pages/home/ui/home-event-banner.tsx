import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { eventsQueries } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function HomeEventBanner() {
  const [slideRef, slideApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { data: banners } = useQuery(eventsQueries.getEventsBanner());

  const scrollPrev = useCallback(() => {
    if (slideApi) slideApi.scrollPrev();
  }, [slideApi]);

  const scrollNext = useCallback(() => {
    if (slideApi) slideApi.scrollNext();
  }, [slideApi]);

  // const [current, setCurrent] = useState(1);
  // const [transition, setTransition] = useState(true);
  // const timeoutRef = useRef<number | null>(null);

  // // 자동 슬라이드
  // useEffect(() => {
  //   timeoutRef.current = window.setTimeout(() => {
  //     setCurrent((prev) => prev + 1);
  //     setTransition(true);
  //   }, 3000);
  //   return () => {
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //   };
  // }, [current]);

  // // 무한 루프 처리
  // useEffect(() => {
  //   if (current === total + 1) {
  //     setTimeout(() => {
  //       setTransition(false);
  //       setCurrent(1);
  //     }, 700);
  //   }
  //   if (current === 0) {
  //     setTimeout(() => {
  //       setTransition(false);
  //       setCurrent(total);
  //     }, 700);
  //   }
  // }, [current, total]);

  // // 트랜지션 복구
  // useEffect(() => {
  //   if (!transition) {
  //     setTimeout(() => setTransition(true), 20);
  //   }
  // }, [transition]);

  // const goTo = (idx: number) => {
  //   setCurrent(idx + 1);
  //   setTransition(true);
  // };

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={slideRef}>
        <div className="embla__container flex">
          {banners?.map((banner) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0 rounded-2xl overflow-hidden relative"
              key={banner.id}
            >
              {/*타이틀하고 날짜 정보 구현*/}
              {/* prev, next 버튼 구현*/}
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev text-white" onClick={scrollPrev}>
        prev
      </button>
      <button className="embla__next text-white" onClick={scrollNext}>
        next
      </button>
    </div>
  );

  //   <div className="w-full mx-auto h-72 overflow-hidden rounded-lg bg-black">
  //     <div
  //       className={`flex w-full h-full ${
  //         transition ? "transition-transform duration-700" : ""
  //       }`}
  //       style={{ transform: `translateX(-${current * 100}%)` }}
  //     >
  //       {slides.map((src, idx) => (
  //         <img
  //           key={idx}
  //           src={src.imageUrl}
  //           alt={`slide-${idx}`}
  //           className="w-full h-full object-cover flex-shrink-0"
  //           style={{ minWidth: "100%" }}
  //         />
  //       ))}
  //     </div>
  //     <button
  //       onClick={prevSlide}
  //       className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10 hover:bg-black/70"
  //       aria-label="이전 슬라이드"
  //     >
  //       {"<"}
  //     </button>
  //     <button
  //       onClick={nextSlide}
  //       className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10 hover:bg-black/70"
  //       aria-label="다음 슬라이드"
  //     >
  //       {">"}
  //     </button>
  //     <div className="absolute bottom-17 left-13 flex flex-col gap-2">
  //       {(() => {
  //         let actualIndex = current - 1;
  //         if (current === 0) actualIndex = total - 1;
  //         if (current === total + 1) actualIndex = 0;

  //         const currentEvent = events[actualIndex] || events[0];

  //         return (
  //           <div>
  //             <h2 className="text-white text-2xl font-bold font-['Inter']">
  //               {currentEvent.title}
  //             </h2>
  //             <div className="flex justify-start items-center gap-1">
  //               <DateBadge date={currentEvent.date.start} />
  //               <span className="text-gray-300 text-neutral-400 text-sm font-normal font-['Inter']">
  //                 부터
  //               </span>
  //               <DateBadge date={currentEvent.date.end} />
  //               <span className="text-gray-300 text-neutral-400 text-sm font-normal font-['Inter']">
  //                 까지
  //               </span>
  //             </div>
  //           </div>
  //         );
  //       })()}
  //     </div>
  //     <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
  //       {events.map((_, idx) => (
  //         <button
  //           key={idx}
  //           onClick={() => goTo(idx)}
  //           className={`transition-all duration-300
  //       ${
  //         current === idx + 1
  //           ? "w-8 h-2 bg-white rounded-full"
  //           : "w-2 h-2 bg-gray-500 rounded-full"
  //       }
  //     `}
  //         />
  //       ))}
  //       1
  //     </div>
  //   </div>
  // );
}
