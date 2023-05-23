import Image from "next/image";
interface Item {
  name: string;
  image: string;
  dscp: string;
}

export default function Collection({ name, image, dscp }: Item) {
  // console.log("julie imaghe", props);
  return (
    <div className=" first:mt-[13px] relative overflow-hidden flex flex-col items-center">
      <Image
        className="object-contain w-max"
        src={image}
        height={151}
        width={200.29}
        alt=""
      />
      <h3 className="mt-6 text-center text-[#333D4B] font-black text-2xl">
        {name}
      </h3>
      <p className="text-neutral mt-4">{dscp}</p>
    </div>
  );
}
