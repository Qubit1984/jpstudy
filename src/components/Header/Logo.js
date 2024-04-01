import Image from "next/image";
import Link from "next/link";
import profileImgDark from "@/public/logo-dark.png";
import profileImgLight from "@/public/logo-light.png";

const Logo = ({ mode }) => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="  overflow-hidden   mr-2 md:mr-4">
        <Image
          src={mode === "dark" ? profileImgLight : profileImgDark}
          alt="JapaneseFrom0toN1 logo"
          className="  h-14 w-16"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold hidden lg:flex dark:font-semibold text-lg md:text-xl">
        JapaneseFrom0toN1
      </span>
    </Link>
  );
};

export default Logo;
