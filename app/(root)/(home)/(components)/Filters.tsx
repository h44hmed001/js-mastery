"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { urlQuery } from "@/sanity/utils";

const Filters = () => {
  const [active, setActive] = useState("");
  const links = ["all", "next 13", "Frontend", "backend", "fullstack"];
  const searchParams = useSearchParams();

  const router = useRouter();
  const handleClick = (link: string) => {
    let newUrl = "";
    if (active === link) {
      setActive("");
      newUrl = urlQuery({
        params: searchParams.toString(),
        keysToDelete: ["category"],
      });
    } else {
      setActive(link);
      newUrl = urlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <ul
      className={`text-white-800 mt-8 no-scrollbar max-w-full sm:max-w-2xl overflow-auto  flex max-md:px-5 justify-between  mx-auto w-full`}
    >
      {links.map((link) => (
        <button
          onClick={() => handleClick(link)}
          className={`capitalize whitespace-nowrap px-8 py-2.5 rounded-lg ${
            active == link ? "gradient_blue-purple " : ""
          }`}
          key={link}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
