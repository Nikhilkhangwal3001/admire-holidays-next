import Link from "next/link";
import React from "react";

const Query = () => {
  return (
    <div className="fixed z-10 right-0 bottom-20">
      <button
        className="rounded-l-md bg-gray-200 text-black px-3 sm:px-2 py-1 text-sm sm:py-4 font-semibold "
        style={{ writingMode: "vertical-rl" }}
      >
        <Link
          href={"/query"}
          style={{ display: "block", transform: "rotate(-180deg)" }}
        >
          Suggestions/Complaints
        </Link>
      </button>
    </div>
  );
};

export default Query;
