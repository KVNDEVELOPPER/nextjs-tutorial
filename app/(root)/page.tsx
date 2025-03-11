import Hello from "@/app/components/Hello";

export default function Home() {
  console.log("Hello whoa I AM ?");
  return (
    <>
      <h1 className="text-red-600">Hello World</h1>
      <Hello />
    </>
  );
}
