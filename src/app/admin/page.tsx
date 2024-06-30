"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Orders from "./Orders";

export default function AdminPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check for the secret query parameter on the client side
    const secret = searchParams.get("secret");
    if (secret === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      setAuthorized(true);
    } else {
      router.push("/"); // Redirect to home if not authorized
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
