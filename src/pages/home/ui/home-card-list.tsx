import Card from "./card";
import { useState } from "react";
import { eventsQueries } from "../api";
import { useQuery } from "@tanstack/react-query";
import { initialPage, pageLimit } from "../config";
import {
  Pagination,
  PaginationNumberList,
  PaginationNumberItem,
} from "@/shared/ui";

export default function HomeCardList() {
  const [page, setPage] = useState(initialPage);
  const {
    data: events,
    isSuccess,
    isPending,
  } = useQuery(eventsQueries.getEvents({ page, limit: pageLimit }));

  const pageNumbers = Math.ceil((events?.pageInfo.total ?? 0) / pageLimit);

  if (isPending) return <div>Loading...</div>;
  if (!isSuccess) return null;

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {/* 콘텐츠 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {events.data.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            date={card.date}
            description={card.description}
            tags={card.tags}
            image={card.imageUrl}
            className="p-2"
          />
        ))}
      </div>
      <Pagination>
        <PaginationNumberList>
          {Array.from({ length: pageNumbers }).map((_, index) => {
            return (
              <PaginationNumberItem
                key={index}
                className="text-white"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationNumberItem>
            );
          })}
        </PaginationNumberList>
      </Pagination>
    </>
  );
}
