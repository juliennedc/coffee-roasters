import Image from "next/future/image";

export default function Card(props) {
  return (
    <div className="rounded-lg bg-primary flex flex-col items-center px-3 py-12">
      <Image width={72} height={72} src={props.item.icon} />
      <h3 className=" text-center text-2xl">{props.item.title}</h3>
      <p className="max-w-full text-center mt-6">{props.item.dscp}</p>
    </div>
  );
}
