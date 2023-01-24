import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import { Routes } from "~/utils/routesHome";

export const meta: MetaFunction = () => ({
  title: "Learning Remix | Loader and useLoaderData"
});

export default function Index() {
  return (
    <>
      <Navigation pathNames={[Routes.CHARACTERS, Routes.LOCATIONS, Routes.EPISODES]} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
