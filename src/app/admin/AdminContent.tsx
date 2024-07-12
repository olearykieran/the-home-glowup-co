"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Orders from "./Orders";

function AdminContentInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const secret = searchParams.get("secret");
    if (secret === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      setAuthorized(true);
    } else {
      router.push("/");
    }
  }, [searchParams, router]);

  if (!authorized) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Orders />
    </div>
  );
}

export default function AdminContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminContentInner />
    </Suspense>
  );
}
