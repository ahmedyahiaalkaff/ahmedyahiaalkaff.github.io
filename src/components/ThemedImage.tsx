'use client';
import { useThemeContext } from "@/contexts/ThemeContext";

const ThemedImage = ({className, image, darkImage} : {className: string, image: string, darkImage?: string}) => {

  const {theme} = useThemeContext();
  const imageSrc = darkImage ? (theme === 'dark' ? darkImage : image) : image;
  return (
    <>
      {theme && <img src={imageSrc} alt="project" className={className}/>}
      {!theme && <img src='/image_placeholder.png' alt="project" className={className} />}
    </>
  )
}

export default ThemedImage;