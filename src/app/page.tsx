import Counter from "@/Components/Counter";
import RichTextEditor from "@/Components/RichTextEditor";
import UserForm from "@/Components/useForm";

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
