import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-10 sticky top-0 flex justify-between items-center px-[1.125rem] py-[2rem] bg-base-100">
      <Image
        src="/static/images/shared/desktop/logo.svg"
        width={"163px"}
        height="18px"
      />
      <button>
        <Image
          src="/static/images/shared/mobile/icon-hamburger.svg"
          height={"16px"}
          width="15px"
        />
      </button>
    </nav>
  );
}
