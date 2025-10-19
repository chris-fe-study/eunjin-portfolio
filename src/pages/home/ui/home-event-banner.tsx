import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { eventsQueries } from "../api";
import { useQuery } from "@tanstack/react-query";
import { DateBadge, SvgIcon } from "@/shared/ui";

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
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={slideRef}>
        <div className="embla__container flex">
          {banners?.map((banner) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0 rounded-2xl overflow-hidden relative"
              key={banner.id}
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-42 left-20 text-white text-2xl font-bold flex flex-col gap-2">
                <h2>{banner.title}</h2>
                <span className="text-neutral-400 text-sm font-normal font-['Inter'] flex items-center gap-1">
                  <DateBadge date={banner.date.start} />
                  부터
                  <DateBadge date={banner.date.end} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 왼쪽 화살표 버튼 */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-10 transition-all duration-200"
        onClick={scrollPrev}
        aria-label="이전 슬라이드"
      >
        <SvgIcon name="homeBannerPrev" />
      </button>

      {/* 오른쪽 화살표 버튼 */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-10 transition-all duration-200"
        onClick={scrollNext}
        aria-label="다음 슬라이드"
      >
        <SvgIcon name="homeBannerNext" />
      </button>
    </div>
  );
}
