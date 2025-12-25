"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SectionCardProps {
  title: string;
  image: string;
  href: string;
  imageAlt?: string;
}

const DashboardCard = ({ title, image, href, imageAlt }: SectionCardProps) => {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-500/50"
    >
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex items-center justify-between gap-3">
        <div className="flex-shrink-0 size-9 rounded-full bg-gray-500/10 text-gray-600 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-600 group-hover:text-white group-hover:translate-x-1">
          <ArrowRight className="size-5" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
};
export default DashboardCard;
