import Image from "next/image";

export interface props {
  src: string;
  height: number;
  width: number;
  alt: string;
  style: {};
}

const Avatar = (props: props) => {
  const { src, height, width, alt, style } = props;

  // @ts-ignore
  return (
    <>
      <Image src={src} width={width} height={height} alt={alt} style={style} />
    </>
  );
};

export default Avatar;
