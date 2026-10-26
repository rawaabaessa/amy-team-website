import Image from "next/image";
import logo from "../../../public/images/amyLogo.png";

export function BrandLogo() {
  return (
    <span className="relative block h-10 w-24 overflow-hidden">
      <Image
        src={logo}
        alt="AMY"
        sizes="112px"
        preload
        className="absolute -top-3 -left-2 h-auto w-28 max-w-none brightness-30 dark:brightness-100"
      />
    </span>
  );
}
