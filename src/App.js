import { lazy, Suspense } from "react";
const User = lazy(() => import("./User"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <User userId={1} />
        <User userId={2} />
        <User userId={3} />
      </Suspense>
    </div>
  );
}
