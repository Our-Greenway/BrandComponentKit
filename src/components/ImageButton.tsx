interface ImageButtonProps {
  image: string;
  bgColour: string;
  name: string;
  link: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ image, bgColour = "#4a7c59", name, link }) => {
  return (
    <div className="w-full max-w-md">
      <a href={link}>
      <div className=" relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-105">
        <div className="aspect-[4/3] relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 flex items-center justify-start px-6 transition-all duration-300 group-hover:h-24"
          style={{ backgroundColor: bgColour }}
        >
          <h3 className="text-white text-2xl font-bold tracking-wide">
            {name}
          </h3>
        </div>
      </div>
      </a>
    </div>
  );
};

export default ImageButton