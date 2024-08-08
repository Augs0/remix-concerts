import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Gigs = {
  id: number;
  artist: string;
  venue: string;
  date: string;
};

const pastGigs: Gigs[] = [
  {
    id: 1,
    artist: "Maneskin",
    venue: "Royal Arena Copenhagen",
    date: "2023-05-04",
  },
  {
    id: 2,
    artist: "GoA",
    venue: "Manchester Club Academy",
    date: "2023-11-28",
  },
  {
    id: 3,
    artist: "Maneskin",
    venue: "AO Arena Manchester",
    date: "2023-12-17",
  },
];

export const loader = () => {
  return json({ pastGigs });
};

export const meta: MetaFunction = () => {
  return [
    { title: "Past gigs" },
    { name: "description", content: "Past gigs" },
  ];
};

export default function PastGigs() {
  const data = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto">
      <h1>Past gigs</h1>
      <ul className="flex flex-col justify-around my-4 mx-auto flex-wrap md:flex-row">
        {data.pastGigs.map((gig) => (
          <li className="bg-white p-4 m-3 rounded" key={gig.id}>
            <p className="lead text-lg">{gig.artist}</p>
            <p>{gig.venue}</p>
            <p>{gig.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
