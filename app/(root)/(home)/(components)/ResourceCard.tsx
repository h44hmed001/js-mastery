import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
interface ResourceCardProps {
  category: string;
  downloadLink: string;
  image: string;
  slug: string;
  title: string;
  views: number;
}

const ResourceCard = ({
  category,
  downloadLink,
  image,
  slug,
  title,
  views,
}: ResourceCardProps) => {
  return (
    <Card className="w-full max-w-fit p-0 m-0 border-0 bg-transparent sm:max-w-[356px]">
      {/* <Link href={``}> */}
      <CardHeader>
        <Image width={384} alt={title} height={440} src={image} />
        <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
          {title}
        </CardTitle>
      </CardHeader>
      {/* </Link> */}
      <CardContent>
        <div className="flex-between">
          <div className="text-white flex gap-1 flex-center ">
            <Image alt="" width={20} height={20} src="/downloads.svg" />
            <span>{views}</span>
          </div>
          <div className="flex body-semibold gap-1.5 text-gradient_purple-blue">
            <span>Download Now</span>
            <Image alt="" width={13} height={10} src="/arrow-blue.svg" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
