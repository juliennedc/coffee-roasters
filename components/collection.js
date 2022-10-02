import Image from "next/future/image";

export default function Collection(props) {
  console.log("julie imaghe", props);
  return (
    <div className=" first:mt-[13px] relative overflow-hidden flex flex-col items-center">
      <Image
        className="object-contain w-max"
        src={props.item.image}
        height={151}
        width={200.29}
      />
      <h3 className="mt-6 text-center text-[#333D4B] font-black text-2xl">
        {props.item.name}
      </h3>
      <p className="text-neutral mt-4">{props.item.dscp}</p>
    </div>
  );
}
