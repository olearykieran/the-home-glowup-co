// src/app/success/page.tsx

import dynamic from "next/dynamic";
import { Suspense } from "react";

const SuccessContent = dynamic(() => import("./SuccessContent"), { ssr: false });

export default function Success() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
