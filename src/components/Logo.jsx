import { Briefcase } from "lucide-react";

const Logo = ({ className = "", size = "default", ...props }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl lg:text-3xl",
    large: "text-3xl lg:text-4xl xl:text-5xl"
  };

  return (
    <div
      className={`flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
        <Briefcase className="text-white w-6 h-6 lg:w-8 lg:h-8" />
      </div>
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Hierly
      </span>
    </div>
  );
};

export default Logo;