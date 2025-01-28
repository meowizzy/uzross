import { useState } from "react";

export function usePageChange(page?: number) {
  const [_page, setPage] = useState<number>(page ?? 1);

  const onChange = (page: number) => {
    setPage(page);
  };

  return {
    onChange,
    page,
  };
}
