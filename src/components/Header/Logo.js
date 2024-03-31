import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="  overflow-hidden   mr-2 md:mr-4">
        <Image
          src={profileImg}
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
