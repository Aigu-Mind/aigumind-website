import Image from "next/image";

export default function WhyChooseUsCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 flex flex-col items-start shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-blue-400/50 hover:bg-gray-800/60 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="mb-4 p-2">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed text-left">
        {description}
      </p>
    </div>
  );
}
