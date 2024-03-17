export default function GridItem({ colSpan = 1, rowSpan = 1, content = "" }) {
  return (
    <div
      className={`bg-blue-400 hover:rounded-xl hover:translate-y-[-15px] col-span-${colSpan} row-span-${rowSpan}`}
    >
      {content}
    </div>
  );
}
