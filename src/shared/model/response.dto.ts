export type ResponseDto<T> = {
  data: T;
};

export type PaginatedResponseDto<T> = {
  data: T;
  pageInfo: {
    total: number;
    currentPage: number;
  };
};
