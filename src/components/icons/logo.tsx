import Image from "next/image";

export function Logo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      src="/M.svg"
      alt="Mirai Collective Logo"
      width={24}
      height={24}
      className="h-6 w-6 object-contain p-0"
      {...props}
    />
  );
}
