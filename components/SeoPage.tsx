import React, { useEffect } from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface SeoPageProps {
  data: any;
  setPage: (page: Page) => void;
  contactPhone: string;
  hideAuthor?: boolean;
}

const SeoPage: React.FC<SeoPageProps> = ({ data, setPage, contactPhone, hideAuthor }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title
    if (data.seoTitle) {
      document.title = data.seoTitle;
      const titleTag = document.querySelector('meta[name="title"]');
      if (titleTag) titleTag.setAttribute('content', data.seoTitle);
    }

    // Update meta description
    if (data.metaDesc) {
      const descTag = document.querySelector('meta[name="description"]');
      if (descTag) descTag.setAttribute('content', data.metaDesc);
    }
  }, [data]);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const pageAttr = target.getAttribute('data-page');
    if (pageAttr) {
      e.preventDefault();
      let targetPage: Page | null = null;
      
      // Look for a direct value match
      if (Object.values(Page).includes(pageAttr as any)) {
        targetPage = pageAttr as Page;
      } else {
        // Try uppercase/lowercase key mapping
        const matchedKey = Object.keys(Page).find(
          key => key === pageAttr || key.toLowerCase() === pageAttr.toLowerCase()
        );
        if (matchedKey) {
          targetPage = Page[matchedKey as keyof typeof Page];
        } else {
          // If the page attribute lacks the "seo_" prefix, try checking with and without prefix
          const lowerValue = pageAttr.toLowerCase();
          const matchedValue = Object.values(Page).find(
            val => val.toLowerCase() === lowerValue || val.toLowerCase() === 'seo_' + lowerValue
          );
          if (matchedValue) {
            targetPage = matchedValue as Page;
          }
        }
      }

      if (targetPage) {
        setPage(targetPage);
      } else {
        console.warn("Could not resolve page from data-page attribute:", pageAttr);
      }
    }
  };

  return (
    <div onClick={handleContentClick} className="bg-slate-50 min-h-screen pb-12 md:pb-20 pt-20">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "Service"],
            "headline": data.seoTitle || data.headline,
            "name": data.headline,
            "description": data.metaDesc || data.description.slice(0, 150),
            "author": {
              "@type": "Organization",
              "name": "Dynawatt Engineering"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dynawatt Engineering"
            },
            "areaServed": "Uganda",
            "publisher": {
              "@type": "Organization",
              "name": "Dynawatt Engineering",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dynawattengineering.com/dynawatt-engineering-logo.png"
              }
            }
          })
        }}
      />
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24 px-4 relative overflow-hidden">
        {data.heroImage ? (
          <>
            <img 
              src={data.heroImage} 
              alt={data.heroImageAlt || data.headline} 
              width="1200"
              height="400"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/25"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
          </>
        ) : (
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        )}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            {data.headline}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 md:mt-16">
        <div 
          onClick={handleContentClick}
          className="prose prose-lg prose-slate max-w-none mb-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          {data.description.split('\n\n').map((paragraph: string, idx: number) => (
            <p key={idx} className="text-slate-600 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        {/* Mid-Page Callout (High-performing lead-capture hook) */}
        {data.midPageCallout && (
          <div className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-md border border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex-grow z-10 text-left">
              <span className="inline-block text-[11px] font-black uppercase text-amber-500 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full mb-3 tracking-widest leading-none">
                Immediate Diagnostic Offer
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight tracking-tight">
                {data.midPageCallout.title}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                {data.midPageCallout.description}
              </p>
              {data.midPageCallout.priceText && (
                <p className="mt-3 text-amber-400 font-extrabold text-base md:text-lg flex items-center gap-2">
                  <Icons.Wallet className="h-5 w-5 text-amber-500" />
                  {data.midPageCallout.priceText}
                </p>
              )}
            </div>
            <div className="flex-shrink-0 z-10 flex flex-col gap-3 min-w-[210px] w-full md:w-auto">
              <a 
                href={data.midPageCallout.ctaLink} 
                className="bg-amber-500 text-slate-900 font-black text-center py-3.5 px-6 rounded-xl hover:bg-amber-400 active:scale-95 transition shadow-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Icons.Phone className="h-4.5 w-4.5 flex-shrink-0 text-slate-950" />
                {data.midPageCallout.ctaText}
              </a>
              <a 
                href={`https://wa.me/256751473830?text=Hello%20Dynawatt,%20I%27m%20visiting%20your%20site%20and%20would%20like%20to%20get%20professional%20assistance%20for%20a%20Yaka%20meter/electrical%20issue.`}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 border border-slate-705 text-amber-400 hover:text-white font-bold text-center py-3 px-5 rounded-xl hover:bg-slate-700 transition text-xs uppercase flex items-center justify-center gap-2"
              >
                <Icons.MessageSquare className="h-4 w-4 flex-shrink-0 text-amber-500" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        )}

        {/* Dynamic Pricing Tables for Cost Guides */}
        {(data.showWiringPricingTable || data.seoTitle?.toLowerCase().includes('bedroom') || data.headline?.toLowerCase().includes('cost to wire')) && (
          <div className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Icons.Shield className="h-6 w-6 text-amber-500 mr-2" />
              Estimated Residential Wiring Cost Guide (UGX)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 font-bold text-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left">Property Type</th>
                    <th className="px-6 py-4 text-left">Estimated Cost Range (UGX)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-650 font-medium whitespace-nowrap">
                  {(() => {
                    const is2Bed = data.seoTitle?.toLowerCase().includes('2-bedroom') || data.headline?.toLowerCase().includes('2-bedroom');
                    const is3Bed = data.seoTitle?.toLowerCase().includes('3-bedroom') || data.headline?.toLowerCase().includes('3-bedroom');
                    return (
                      <>
                        <tr className={`hover:bg-slate-50 transition-colors ${is2Bed ? 'bg-amber-50/30' : ''}`}>
                          <td className="px-6 py-4 flex items-center gap-2 flex-wrap">
                            <span className={is2Bed ? 'font-bold text-slate-900' : ''}>2-bedroom apartment (basic)</span>
                            {is2Bed && (
                              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded border border-amber-300">
                                Current Option
                              </span>
                            )}
                          </td>
                          <td className={`px-6 py-4 font-bold text-amber-600 ${is2Bed ? 'text-amber-700 font-extrabold text-base' : ''}`}>2,800,000 – 4,200,000</td>
                        </tr>
                        <tr className={`hover:bg-slate-50 transition-colors ${is2Bed ? 'bg-amber-50/70 border-y-2 border-amber-400' : 'bg-amber-50/10'}`}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={is2Bed ? 'font-black text-slate-950 text-base' : ''}>2-bedroom house (full wiring)</span>
                              {is2Bed && (
                                <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded shadow-sm border border-amber-600">
                                  ★ Active Page Target
                                </span>
                              )}
                            </div>
                          </td>
                          <td className={`px-6 py-4 font-bold text-amber-600 ${is2Bed ? 'text-amber-700 font-black text-base' : ''}`}>3,500,000 – 6,000,050</td>
                        </tr>
                        <tr className={`hover:bg-slate-50 transition-colors ${is3Bed ? 'bg-amber-50/30' : ''}`}>
                          <td className="px-6 py-4 flex items-center gap-2 flex-wrap">
                            <span className={is3Bed ? 'font-bold text-slate-900' : ''}>3-bedroom house (standard)</span>
                            {is3Bed && (
                              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded border border-amber-300">
                                Current Option
                              </span>
                            )}
                          </td>
                          <td className={`px-6 py-4 font-bold text-amber-600 ${is3Bed ? 'text-amber-700 font-extrabold text-base' : ''}`}>5,000,000 – 9,000,000</td>
                        </tr>
                        <tr className={`hover:bg-slate-50 transition-colors ${is3Bed ? 'bg-amber-50/70 border-y-2 border-amber-400' : 'bg-amber-50/10'}`}>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={is3Bed ? 'font-black text-slate-950 text-base' : ''}>3-bedroom house (with profile lighting)</span>
                              {is3Bed && (
                                <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded shadow-sm border border-amber-600">
                                  ★ Active Page Target
                                </span>
                              )}
                            </div>
                          </td>
                          <td className={`px-6 py-4 font-bold text-amber-600 ${is3Bed ? 'text-amber-700 font-black text-base' : ''}`}>7,000,000 – 14,000,000</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">4-bedroom / Large Home</td>
                          <td className="px-6 py-4 font-bold text-amber-600">10,000,000 – 20,000,000+</td>
                        </tr>
                      </>
                    );
                  })()}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-700 italic">
              * Disclaimer: Prices are estimates based on material costs and site conditions in 2026. A detailed, 100% free itemized Bill of Quantities (BOQ) is available on request.
            </p>
          </div>
        )}

        {(data.showCommercialPricingTable || data.seoTitle?.toLowerCase().includes('commercial')) && (
          <div className="mb-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Icons.Shield className="h-6 w-6 text-amber-500 mr-2" />
              Estimated Commercial Wiring Cost Guide (UGX)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 font-bold text-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left">Project Type</th>
                    <th className="px-6 py-4 text-left">Estimated Cost Range (UGX)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-650 font-medium">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">Retail shop or salon fit-out</td>
                    <td className="px-6 py-4 font-bold text-amber-600">2,500,000 – 6,000,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-amber-50/10">
                    <td className="px-6 py-4">Restaurant or hotel room block</td>
                    <td className="px-6 py-4 font-bold text-amber-600">6,000,000 – 20,000,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">Industrial unit / warehouse</td>
                    <td className="px-6 py-4 font-bold text-amber-600">8,000,000 – 30,000,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-amber-50/10">
                    <td className="px-6 py-4">3-phase power installation</td>
                    <td className="px-6 py-4 font-bold text-amber-600">3,500,000 – 12,000,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">Generator & Automatic Changeover System</td>
                    <td className="px-6 py-4 font-bold text-amber-600">4,000,000 – 15,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-700 italic">
              * Disclaimer: Prices are estimates based on material costs and site conditions in 2026. A detailed, 100% free itemized Bill of Quantities (BOQ) is available on request.
            </p>
          </div>
        )}

        {/* Services / Sections */}
        {data.sections && data.sections.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.sections.map((section: any, idx: number) => {
                const isHighlighted = section.highlighted || section.title.toLowerCase().includes('call an electrician');
                return (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-2xl shadow-sm border flex flex-col items-start leading-relaxed transition-all duration-350 ${
                      isHighlighted 
                        ? 'bg-amber-50/75 border-amber-300 ring-2 ring-amber-100 md:col-span-2' 
                        : 'bg-white border-slate-100 hover:shadow-md'
                    }`}
                  >
                    <div className={`${isHighlighted ? 'bg-amber-500 text-slate-900 animate-pulse' : 'bg-amber-100 text-amber-600'} p-3 rounded-full mb-4`}>
                      {React.cloneElement(section.icon as React.ReactElement, { className: "h-6 w-6" })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
                    <ul className="text-slate-600 flex-grow space-y-2 mb-4 w-full text-left">
                      {section.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <Icons.CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${isHighlighted ? 'text-amber-600 font-bold' : 'text-green-500'}`} />
                          <span className={isHighlighted ? 'text-slate-850 font-bold' : 'text-slate-650'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {isHighlighted && (
                      <div className="w-full pt-4 border-t border-amber-200/50 flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                          ⚠️ Hazard warning: Never attempt to open your Yaka meter seals
                        </span>
                        <a 
                          href={`https://wa.me/256751473830?text=${encodeURIComponent("Hello Dynawatt, I have an urgent electrical/Yaka meter issue that needs diagnosing.")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-black uppercase px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <Icons.MessageSquare className="h-4.5 w-4.5 text-white" />
                          Chat with Certified Repair Engineer
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Why Choose Us */}
        {data.whyChoose && data.whyChoose.length > 0 && (
          <div className="mb-16 bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-amber-500">{data.whyChooseTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whyChoose.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-3 bg-slate-800 p-4 rounded-xl">
                  <Icons.CheckCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Real Project Photo Showcase */}
        {data.projectPhoto && (
          <div className="mb-16 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Icons.ShieldCheck className="h-5 w-5 text-emerald-500 mr-2" />
              Dynawatt On-Site Project Showcase
            </h3>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 relative group">
              <img 
                src={data.projectPhoto} 
                alt={data.projectPhotoAlt || data.headline} 
                width="800"
                height="384"
                className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-[1.01]" 
                loading="lazy" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded border border-slate-700">
                VERIFIED INSTALLATION
              </div>
            </div>
            {data.projectPhotoCaption && (
              <p className="mt-3 text-center text-xs md:text-sm text-slate-500 font-medium italic">
                📷 {data.projectPhotoCaption}
              </p>
            )}
          </div>
        )}

        {/* What a Professional Wiring Quote Should Include */}
        {data.showQuoteSection && (
          <div className="mb-16 bg-amber-50/10 p-6 md:p-8 rounded-2xl border border-amber-200/50 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <Icons.Award className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" />
              What a Professional Wiring Quote Should Include
            </h2>
            <p className="text-slate-650 mb-4 leading-relaxed text-sm md:text-base">
              Any legitimate electrical contractor in Uganda should provide a written Bill of Quantities (BOQ) before starting work. At Dynawatt Engineering, every quote includes:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 pl-2 mb-4">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold select-none">•</span> Itemised conduit & trunking lengths
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold select-none">•</span> Distribution board spec with circuit count
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold select-none">•</span> Cable gauge specs per circuit (1.5mm, 2.5mm, etc)
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold select-none">•</span> Socket and switch counts by room
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold select-none">•</span> Earthing system specification & copper bonding
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold select-none">•</span> Written timeline with clear payment milestones
              </li>
            </ul>
            <div className="pt-3 border-t border-slate-100 flex items-start gap-2.5">
              <Icons.AlertTriangle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-rose-600 font-extrabold uppercase tracking-wide">
                Red flag warning: If a contractor gives you a verbal quote only — walk away.
              </p>
            </div>
          </div>
        )}

        {/* FAQs */}
        {data.faqs && data.faqs.length > 0 && (
          <div className="mb-16">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": data.faqs.map((faq: any) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.a
                    }
                  }))
                })
              }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {data.faqs.map((faq: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center">
                    <Icons.HelpCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Internal Links */}
        {data.internalLinks && data.internalLinks.length > 0 && (
          <div className="mb-16 bg-amber-50/50 p-6 md:p-8 rounded-3xl border border-amber-100/50">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Explore Related Services</h3>
            <div className="space-y-4">
              {data.internalLinks.map((link: any, idx: number) => (
                <div key={idx} className="flex items-start">
                  <Icons.ArrowRight className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-lg">
                    {link.text}{' '}
                    <button 
                      onClick={() => setPage(link.page)} 
                      className="text-amber-600 font-bold hover:underline"
                    >
                      {link.linkText}
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio Section (E-E-A-T builder) */}
        {!hideAuthor && data.author && (
          <div className="mb-16 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-150 flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-left">
            <div className="relative flex-shrink-0">
              {data.author.avatar ? (
                <img 
                  src={data.author.avatar} 
                  alt={data.author.name}
                  width="80"
                  height="80"
                  loading="lazy"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-slate-200 shadow-sm"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500 border border-amber-600 rounded-full flex items-center justify-center overflow-hidden font-black text-slate-950 text-xl font-mono shadow-xs">
                  {data.author.name === "Daniel Alemukori" ? "DA" : "JK"}
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full border border-white text-[10px]" title="Vetted Engineer">
                <Icons.ShieldCheck className="h-3 w-3" />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <h4 className="font-black text-slate-950 text-base md:text-lg leading-tight">{data.author.name}</h4>
                <span className="text-[10px] font-extrabold tracking-wider bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded uppercase">
                  {data.author.tag || "BS 7671 Expert"}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                {data.author.title} • BS 7671 Certified
              </p>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">
                {data.author.bio}
              </p>
              <div>
                <button 
                  onClick={() => setPage(Page.ABOUT)}
                  className="inline-flex items-center text-xs font-black uppercase text-amber-600 hover:text-amber-700 hover:underline transition-colors gap-1 group"
                >
                  View engineering credentials & about story
                  <Icons.ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-amber-500 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <p className="text-xl md:text-2xl font-bold text-slate-900 mb-8 max-w-2xl mx-auto">{data.cta}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`} className="bg-slate-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-800 transition shadow-lg inline-flex justify-center items-center">
              <Icons.Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <button onClick={() => setPage(Page.CONTACT)} className="bg-white text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-slate-50 transition shadow-lg inline-flex justify-center items-center">
              Get a Free Quote
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SeoPage;
