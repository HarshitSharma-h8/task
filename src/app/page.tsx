"use client";
// import RichTextEditor from "@/Components/RichTextEditor";
// import Counter from "@/Components/Counter";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@/Components/RichTextEditor"), { ssr: false });
const Counter = dynamic(() => import("@/Components/Counter"), { ssr: false });
const UserForm = dynamic(() => import("@/Components/useForm"), { ssr: false });
export default function Home() {
  return (
    <div className="p-10">
      <div className="md:flex justify-start md:h-[50vh] gap-10 mb-10">
        <div className="md:w-1/2 mb-10 md:mb-0 ">
          <Counter />
        </div>
        <div className="md:w-1/2">
          <RichTextEditor />
        </div>
      </div>
      <UserForm />
    </div>
  );
}
