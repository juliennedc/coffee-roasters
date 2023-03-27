import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-10 sticky top-0 flex justify-between items-center px-[1.125rem] py-[2rem] bg-base-100">
      <Image
        className="h-auto"
        src="/static/images/shared/desktop/logo.svg"
        width={163}
        height={18}
        alt=""
      />
      <button>
        <Image
          alt=""
          className="h-auto"
          src="/static/images/shared/mobile/icon-hamburger.svg"
          height={16}
          width={15}
        />
      </button>
    </nav>
  );
}
