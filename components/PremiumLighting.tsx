import React from 'react';
import { Icons } from './AppIcons';

const PremiumLighting: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full">
              <Icons.Sparkles className="h-5 w-5 text-amber-600 mr-2" />
              <span className="text-amber-800 font-semibold text-sm">Luxury Illumination</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Premium Aluminum Profile Lighting in Uganda
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Elevate your property's aesthetic with seamless, dot-free continuous lighting. We specialize in bespoke architectural lighting installations that blend perfectly into ceilings, walls, and staircases.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-600">
                    <Icons.Check className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Staircase & Wall Lighting</h4>
                  <p className="mt-1 text-slate-500">Motion-activated floating staircase lights and ambient wall washes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-600">
                    <Icons.Check className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Luxury Ceiling Profiles</h4>
                  <p className="mt-1 text-slate-500">Recessed and surface-mounted seamless linear illumination.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-600">
                    <Icons.Check className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Hotel & Commercial Lighting</h4>
                  <p className="mt-1 text-slate-500">Sophisticated ambient lighting for lobbies, Airbnbs, and high-end retail.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <a href="#quote" className="inline-flex justify-center items-center px-6 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-600 transition shadow-lg hover:shadow-xl">
                Book Lighting Consultation
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-3xl transform translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 opacity-30"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <img 
                  src="/ceiling-linear-lighting.jpg" 
                  alt="Modern false ceiling with recessed linear LED lighting, warm cove lighting, and decorative chandelier installation in Kampala, Uganda by Dynawatt Engineering" 
                  loading="lazy"
                  className="rounded-2xl h-48 md:h-64 mt-8 object-cover w-full shadow-lg"
                />
                <img 
                  src="/profile-lighting-uganda.jpg" 
                  alt="Pristine completed architectural ceiling with glowing embedded LED aluminum profiles and warm ambient light design by Dynawatt Engineering in Kampala, Uganda" 
                  loading="lazy"
                  className="rounded-2xl h-48 md:h-64 object-cover w-full shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="/staircase-profile-lighting.jpg" 
                  alt="Modern staircase profile lighting integrated into wooden steps with custom ambient linear lighting by Dynawatt Engineering in Kampala, Uganda" 
                  loading="lazy"
                  className="rounded-2xl h-64 md:h-80 object-cover w-full shadow-lg"
                />
                <div className="bg-amber-600 rounded-2xl p-6 shadow-lg flex flex-col justify-center text-white h-32 md:h-48">
                  <span className="text-3xl md:text-4xl font-black mb-1">100+</span>
                  <span className="text-sm md:text-base font-medium opacity-90">Premium Projects Completed</span>
                </div>
              </div>
            </div>
            
            {/* Before / After Label */}
            <div className="absolute -left-4 md:-left-8 top-1/4 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center border border-slate-100">
              <Icons.Shield className="h-6 w-6 text-green-500 mr-2" />
              <span className="font-bold text-slate-800 text-sm">Flawless Finish Guaranteed</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PremiumLighting;
