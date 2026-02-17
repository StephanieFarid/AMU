import { Image, StaticImageData } from 'next/image';
import Logo from '../public/logo.jpg';

interface FullPageImageProps {
  src?: string | StaticImageData;
  alt?: string;
  priority?: boolean; // Set to true if this is the LCP image
}

const FullPageImage = ({ src, alt, priority = true }: FullPageImageProps) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src={Logo}
        alt={"AMU logo"}
        fill
        priority={priority}
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        className="z-0"
      />
      
      {/* Optional: Content Overlay
      <div className="relative z-10 flex h-full items-center justify-center bg-black/20">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
        </h1>
      </div> */}
    </div>
  );
};

export default FullPageImage;