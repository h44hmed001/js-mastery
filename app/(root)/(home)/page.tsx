"use client";
import React from "react";
import Hero from "./(components)/Hero";
import Filters from "./(components)/Filters";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import ResourceCard from "./(components)/ResourceCard";
import Header from "./(components)/Header";
const page = async ({ searchParams }: any) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  const resourcePlaylist = await getResourcesPlaylist();

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto">
      <main className="paddings flex flex-col mx-auto max-w-screen-2xl">
        <Hero />
      </main>
      <Filters />
      {(searchParams?.query || searchParams?.category) && (
        <div className="sm:mt-20 mt-6  ">
          <Header
            title="Resources"
            category={searchParams?.category}
            query={searchParams?.query}
          />
          <div className="mt-12 w-full flex flex-wrap justify-center gap-16 sm:justify-start">
            {resources.map((resource: any, i: number) => (
              <ResourceCard
                category={resource.category}
                downloadLink={resource.downloadLink}
                slug={resource.slug}
                views={resource.views}
                image={resource.image}
                key={i}
                title={resource.title}
              />
            ))}
          </div>
        </div>
      )}

      <div className="sm:mt-20 flex flex-col gap-16 mt-6">
        {resourcePlaylist.map((item: any) => (
          <div>
            <h1 className="heading3 text-white-800">{item.title}</h1>
            <div className="mt-12 w-full flex flex-wrap justify-center gap-16 sm:justify-start">
              {item.resources.map((resource: any) => (
                <ResourceCard
                  category={resource.category}
                  downloadLink={resource.downloadLink}
                  slug={resource.slug}
                  views={resource.views}
                  image={resource.image}
                  key={resource.slug}
                  title={resource.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
