// /src/app/admin/page.tsx

import dynamic from "next/dynamic";
import { Suspense } from "react";

const AdminContent = dynamic(() => import("./AdminContent"), { ssr: false });

export default function Admin() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminContent />
    </Suspense>
  );
}
