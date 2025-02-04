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
      <div className="flex justify-start h-[50vh] gap-10 mb-10">
        <div className="w-1/2">
          <Counter />
        </div>
        <div className="w-1/2">
          <RichTextEditor />
        </div>
      </div>
      <UserForm />
    </div>
  );
}
