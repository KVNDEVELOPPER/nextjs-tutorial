"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Captured error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-900">
        <h2 className="text-2xl font-bold">Une erreur est survenue !</h2>
        <p className="mt-2">{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}
