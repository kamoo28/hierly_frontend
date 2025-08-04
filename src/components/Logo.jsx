import { Briefcase } from "lucide-react";

const Logo = ({ className = "", size = "default", ...props }) => {
  const sizeClasses = {
    small: "text-lg",
    default: "text-xl lg:text-2xl",
    large: "text-2xl lg:text-3xl xl:text-4xl"
  };

  return (
    <div
      className={`flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
        <Briefcase className="text-white w-5 h-5 lg:w-6 lg:h-6" />
      </div>
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
        Hierly
      </span>
    </div>
  );
};

export default Logo;