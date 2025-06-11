import { useItenaryContext } from "@/context/itenary-details/ItenaryDetailsContext";
import React from "react";

function TripHiglights() {
    const {itenaryDetails} = useItenaryContext();
  return (
    <section className="bg-white">
      <div className="mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-blue-900-600 mb-6 border-b-4 border-blue-900 inline-block">
          Trip Highlights
        </h2>

        {itenaryDetails.tour_highlight ? (
          <ul className="list-disc list-inside text-red-800 space-y-2 text-lg">
            <li>{itenaryDetails.tour_highlight.replace(/<[^>]*>/g, "")}</li>
          </ul>
        ) : (
          <p className="text-red-800 text-lg">No highlights available</p>
        )}
      </div>
    </section>
  );
}

export default TripHiglights;
