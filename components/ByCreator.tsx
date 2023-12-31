import React from "react";
import Image from "next/image";

// source code courtesy of https://x.com/lawmbass

const ByCreator = ({
  profileImage,
  name,
  profileLink,
}: {
  profileImage: string;
  name: string;
  profileLink: string;
}) => {
  return (
    <a
      className="btn btn-ghost px-1"
      href={profileLink}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-row justify-center items-center gap-1 text-xs">
        <div className="avatar">
          <div className="relative w-10 rounded-full">
            <span className="absolute inset-0">
              <Image
                alt={name}
                src={profileImage}
                decoding="async"
                data-nimg="fill"
                className="absolute inset-0 w-full h-full object-cover"
                sizes="100vw"
                width="50"
                height="50"
              />
            </span>
          </div>
        </div>
        <div className="text-left leading-3">
          By <br />
          <span className="underline text-primary">{name}</span>
        </div>
      </div>
    </a>
  );
};

export default ByCreator;
