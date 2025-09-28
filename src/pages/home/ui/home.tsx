import { SvgIcon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import { DatePicker } from "@/shared/ui/date-picker";
import HomeEventBanner from "./home-event-banner";
import Category from "./category";
import HomeCardList from "./home-card-list";

export default function HomePage() {
  return (
    <div className="w-full h-full px-7 py-5 bg-neutral-900 ">
      {/* 카테고리 탭 */}
      <div className="h-12 flex justify-between items-center">
        <div className="h-9 flex justify-start gap-1">
          <Category />
        </div>
        <DatePicker
          trigger={
            <Button size="icon" variant="ghost">
              <SvgIcon name="calendar" className="fill-gray-500" />
            </Button>
          }
        />
      </div>
      {/* 다가오는 행사 */}
      <HomeEventBanner />

      {/* 행사 정보 */}
      <section className="py-10">
        <h2 className="h-10 px-5 justify-start text-white text-lg font-bold font-['Inter']">
          행사 정보
        </h2>
        <HomeCardList />
      </section>
    </div>
  );
}
