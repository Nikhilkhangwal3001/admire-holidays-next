import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCommentDots, FaRegFolderOpen } from "react-icons/fa";
import "../../styles/custom.css";

const BlogPageCard = ({
  imageUrl,
  title,
  date,
  comment,
  detail,
  author,
  imageUrl1,
  imageUrl2,
  content,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="blog-page-card ">
      <img src={imageUrl} className="w-full h-full" alt="" />
      <h1 className="card-title">{title}</h1>
      <div className="flex flex-col ">
        <div className="font-bold ">
          <p>by {author}</p>
        </div>
        <div className="text-sm">
          <p>published on {date}</p>
        </div>
      </div>
      <div>
        <p className="sm:text-base text-sm">{detail}</p>
      </div>
      <div className="flex flex-col py-10 gap-5">
        <img src={imageUrl1} className="w-full h-full" alt="" />
        <div className="sm:pt-5">
          {content.map((item, i) => (
            <div className="flex py-5 flex-col gap-1" key={i}>
              <h1 className="text-xl font-bold">{item.subheading}</h1>
              <p className="md:text-base text-sm">{item.text}</p>
              <img src={item.imageUrl} className="w-full h-full" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPageCard;
