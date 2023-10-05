"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { urlQuery } from "@/sanity/utils";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const debouncing = setTimeout(() => {
      let newUrl = "";
      if (search) {
        newUrl = urlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search,
        });
      } else {
        newUrl = urlQuery({
          params: searchParams.toString(),
          keysToDelete: ["query"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 500);
    return () => clearTimeout(debouncing);
  }, [search]);

  return (
    <form className="mt-10 flex-center mx-auto w-full  sm:-mt-10">
      <label className="relative w-full flex-center  max-w-3xl">
        <Image
          width={32}
          height={32}
          alt=""
          className="absolute left-8"
          src="/magnifying-glass.svg"
        />
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="bg-black-400 pl-20 base-regular text-white-800 pr-6 py-10 placeholder:text-white-800 outline-none !ring-0 border-none !ring-offset-0"
        />
      </label>
    </form>
  );
};

export default SearchForm;
