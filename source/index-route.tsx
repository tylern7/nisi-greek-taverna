import { createFileRoute } from "@tanstack/react-router";
import { NisiPage } from "@/components/nisi-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nisi Greek Taverna | Lakeside Greek dining in Burlington" },
      {
        name: "description",
        content:
          "Nisi Greek Taverna on Lakeshore Road in downtown Burlington. Greek cuisine with a twist, lake views, OpenTable reservations and Uber Eats.",
      },
    ],
  }),
  component: NisiPage,
});
