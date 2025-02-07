// InViewComponent.js
"use client";

import React, { lazy, Suspense } from "react";
import { InView } from "react-intersection-observer";
import Loading from "@/components/LazyLoading/Loading";

const InViewComponent = ({ children }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref}>
          {inView ? (
            <Suspense fallback={<Loading />}>{children}</Suspense>
          ) : (
            <div style={{ minHeight: "1px" }} /> // Empty div with minimum height
          )}
        </div>
      )}
    </InView>
  );
};

export default InViewComponent;
