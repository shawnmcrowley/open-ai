"use client";
import { Suspense } from "react";
import Chat from "./components/chat"
import Header from "./components/header"

export default function Page() {
  return (
    <section>
      <Header/>
       <Suspense fallback={<p>Loading Generation...</p>}>
       <Chat/>
       </Suspense>
    </section>
  )
}
