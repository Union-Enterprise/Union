export default function FooterSection({ title = "", texts = [""] }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-semibold text-white text-xl">{title}</p>
      {texts.map((text, index) => (
        <p
          key={index}
          className="text-p-white hover:text-main-purple cursor-pointer w-fit"
        >
          {text}
        </p>
      ))}
    </div>
  );
}
