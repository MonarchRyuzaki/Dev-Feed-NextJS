"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center py-10 text-red-600">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="mt-4 underline">
        Try again
      </button>
    </div>
  );
}
