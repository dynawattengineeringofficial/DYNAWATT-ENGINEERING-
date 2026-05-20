import React, { useEffect } from 'react';
import { Icons } from './Icons';
import { Page } from '../types';

interface SeoPageProps {
  data: any;
  setPage: (page: Page) => void;
  contactPhone: string;
}

const SeoPage: React.FC<SeoPageProps> = ({ data, setPage, contactPhone }) => {
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

  return (
    <div className="bg-slate-50 min-h-screen pb-12 md:pb-20 pt-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            {data.headline}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 md:mt-16">
        <div className="prose prose-lg prose-slate max-w-none mb-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          {data.description.split('\n\n').map((paragraph: string, idx: number) => (
            <p key={idx} className="text-slate-600 mb-4 whitespace-pre-wrap">{paragraph}</p>
          ))}
        </div>

        {/* Services / Sections */}
        {data.sections && data.sections.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.sections.map((section: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start leading-relaxed">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-full mb-4">
                    {React.cloneElement(section.icon as React.ReactElement, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
                  <ul className="text-slate-600 flex-grow space-y-2">
                    {section.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <Icons.CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

        {/* FAQs */}
        {data.faqs && data.faqs.length > 0 && (
          <div className="mb-16">
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
