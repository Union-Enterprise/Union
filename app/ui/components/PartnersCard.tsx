import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { url } from "inspector";

export default function PartnersCard({
  name = "",
  href = "",
  src = "",
}) {
  return (
    <Link
      key={name}
      href={href}
      style={{ backgroundImage: `url(${src})` }}
      className="bg-no-repeat bg-contain bg-center h-full w-[800px] flex-shrink-0 border-2 border-[#e7e7e7] radius-md overflow-hidden group rounded-md"
    >
      <div className="*:text-white text-3xl font-thin opacity-0 group-hover:opacity-100 w-full bg-[rgba(0,0,0,0.6)] h-full justify-center items-center flex gap-5">
        <p>{name}</p>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </div>
    </Link>
  );
}
