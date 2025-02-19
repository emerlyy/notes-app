"use client";

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/notes");
  return <div className="home"></div>;
}
