import Link from "next/link";

export default function Button({ text = "" }) {
  return (
    <Link
      key={""}
      href={""}
      className="bg-black py-3 px-8 w-fit rounded-sm hover:border-tertiary-blue hover:bg-transparent border-2 hover:text-tertiary-blue"
    >
      <p>{text}</p>
    </Link>
  );
}
