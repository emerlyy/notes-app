"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SEARCH_PATH = "/search";

export const useSearch = (initialValue?: string | null) => {
  const { replace } = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState<string>(initialValue || "");

  const performSearch = (query: string) => {
    replace(`${SEARCH_PATH}?q=${query}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!value || pathname !== SEARCH_PATH) return;
      performSearch(value);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return [value, setValue, performSearch] as const;
};
