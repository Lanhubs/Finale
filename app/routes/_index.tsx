import type { MetaFunction } from "@remix-run/node";
import Meet from "~/Component/Pages/_index";

export const meta: MetaFunction = () => {
  return [
    { title: "Ismail" },
    { name: "description", content: "A Virtual classroom!" },
  ];
};

export default function Index() {
  return (
    <>
    <Meet/>
    </>
  );
}
