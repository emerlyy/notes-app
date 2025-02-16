"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Input from "../ui/Input/Input";
import { IconSearch } from "../ui/icons";

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
  const { replace } = useRouter();

  const handleSubmit = (e: FormEvent<SearchFormElements>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.search.value;
    replace(`/?${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className={clsx("search", className)}
        icon={<IconSearch width={18} height={18} />}
        placeholder="Search by title or tags..."
        name="search"
        autoComplete="off"
      />
    </form>
  );
};

export default Search;
