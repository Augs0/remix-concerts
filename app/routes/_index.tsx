import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "GigTracker" },
    { name: "description", content: "GigTracker" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1>GigTracker</h1>
      <ul className="flex justify-evenly">
       <li>
        <Link to="/gigs/past-gigs">View gigs you have attended</Link>
      </li>
      <li>
      <Link to="/gigs/future-gigs">View gigs you will attend</Link>
      </li>
      </ul>
    </main>
  );
}
