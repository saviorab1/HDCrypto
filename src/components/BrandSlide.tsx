import brand_logo from "@/assets/logo_hdbank_white.png";
import bitcoin_logo from "@/assets/btc.png";

export default function BrandSlide() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-red-500 to-orange-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/25 rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-white p-12 w-full">
        {/* Brand Logo - Large on top */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            <img
              src={brand_logo}
              alt="HD Bank Logo"
              className="h-24 w-auto drop-shadow-lg"
            />
          </div>
        </div>

        {/* Content Section with Bitcoin next to text */}
        <div className="text-center max-w-2xl">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-left">
              <h1 className="text-5xl font-bold leading-tight">
                HD Bank
                <span className="block text-3xl font-medium text-white/90 mt-2">
                  Hackathon 2025
                </span>
              </h1>
            </div>

            {/* Bitcoin Visual next to text */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src={bitcoin_logo}
                  alt="Bitcoin"
                  className="w-20 h-20 drop-shadow-lg"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-white/15 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Crypto Web Design
            <span className="block text-lg mt-2 text-white/80">
              Powered by AI & Blockchain Technology
            </span>
          </p>

          {/* Feature Highlights */}
          {/* <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="font-semibold">AI Trading</div>
              <div className="text-white/80">Smart Analytics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="font-semibold">Secure</div>
              <div className="text-white/80">Bank-Grade</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
