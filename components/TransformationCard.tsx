import React, { useState } from 'react';
import { Icons } from './AppIcons';

interface TransformationItem {
  id: string;
  title: string;
  location: string;
  image: string;
  beforeImage?: string;
  beforeDesc: string;
  afterDesc: string;
  alt: string;
}

interface TransformationCardProps {
  item: TransformationItem;
}

export const TransformationCard: React.FC<TransformationCardProps> = ({ item }) => {
  const [viewAfter, setViewAfter] = useState(true);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-slate-950">
        {/* Render both image containers absolutely to avoid layout shifts and enable preloading */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${viewAfter ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <img 
            src={item.image} 
            alt={item.alt} 
            width={400}
            height={256}
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
            style={{ aspectRatio: '400/256' }}
          />
          <div className="absolute top-4 left-4 bg-emerald-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md z-20">
            ✅ AFTER (DYNAWATT)
          </div>
        </div>

        {item.beforeImage ? (
          <div className={`absolute inset-0 transition-opacity duration-300 ${!viewAfter ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <img 
              src={item.beforeImage} 
              alt={`Before: ${item.title}`} 
              width={400}
              height={256}
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
              style={{ aspectRatio: '400/256' }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-950/90 via-red-950/70 to-transparent p-4 text-left text-white z-20">
              <div className="flex items-center gap-1.5 text-red-400 font-extrabold text-xs tracking-wider uppercase mb-1">
                <Icons.AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
                <span>Previous Sub-standard System</span>
              </div>
              <p className="text-[11px] leading-relaxed text-red-100 font-medium max-w-sm">{item.beforeDesc}</p>
            </div>
            <div className="absolute top-4 left-4 bg-red-650 bg-red-600 text-white font-extrabold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md z-20">
              ❌ BEFORE
            </div>
          </div>
        ) : (
          <div className={`absolute inset-0 bg-slate-950 flex flex-col justify-center p-6 text-center text-slate-300 border-4 border-dashed border-red-500/30 m-2 rounded-xl transition-opacity duration-300 ${!viewAfter ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <Icons.AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-3 animate-pulse" />
            <h4 className="text-slate-200 font-bold mb-2">Previous Unvetted System</h4>
            <p className="text-xs leading-relaxed text-slate-400">{item.beforeDesc}</p>
            <div className="absolute top-4 left-4 bg-red-650 bg-red-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md z-20">
              ❌ BEFORE
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-slate-500 text-xs font-semibold mb-2">
          <Icons.MapPin className="h-4.5 w-4.5 text-amber-500 mr-1.5" />
          {item.location}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
        
        {/* Set a stable height for the description to avoid Cumulative Layout Shift (CLS) when toggling */}
        <div className="min-h-[100px] mb-6 flex-grow flex flex-col justify-start">
          <p className="text-slate-600 text-sm leading-relaxed">
            {viewAfter ? item.afterDesc : item.beforeDesc}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Compare installation:</span>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewAfter(false)}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all duration-200 ${!viewAfter ? "bg-red-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
            >
              Before
            </button>
            <button 
              onClick={() => setViewAfter(true)}
              className={`px-3 py-1.5 rounded-md text-xs font-extrabold transition-all duration-200 ${viewAfter ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
            >
              After
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
