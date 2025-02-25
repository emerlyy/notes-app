"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";
import Input from "../ui/Input/Input";
import { IconSearch } from "../ui/icons";
import { useSearch } from "./useSearch";

type Props = {
  className?: string;
};

interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}
interface SearchFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

const Search = ({ className }: Props) => {
  const searchParams = useSearchParams();
  const initialValue = searchParams.get("q");

  const [value, setValue, search] = useSearch(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<SearchFormElements>) => {
    e.preventDefault();
    search(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className={clsx("search", className)}
        icon={<IconSearch width={18} height={18} />}
        placeholder="Search by title or tags..."
        name="search"
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
