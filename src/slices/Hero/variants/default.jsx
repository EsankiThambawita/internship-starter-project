import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Main = ({ slice }) => {
  return (
    <section className="relative min-h-[90vh] flex items-start justify-center bg-gray-50 overflow-hidden py-8">
      <div className="py-[40px] md:py-[60px] xl:p-[80px] px-[16px] md:px-[40px] max-w-[1400px] mx-auto flex flex-col items-center gap-[20px] xl:flex-row">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-start text-center px-4 sm:px-8 md:px-16 w-full xl:order-[3] xl:text-left xl:items-start">
          <div className="max-w-3xl mx-auto">
            {slice.primary.title && (
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="text-5xl md:text-6xl font-bold !text-black mb-[40px] xl:text-left">
                      {children}
                    </h1>
                  ),
                }}
              />
            )}

            {slice.primary.description && (
              <PrismicRichText
                field={slice.primary.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-lg md:text-xl !text-black leading-relaxed max-w-2xl mb-[40px] xl:text-left">
                      {children}
                    </p>
                  ),
                }}
              />
            )}
          </div>

          {slice.primary.ctatext && slice.primary.ctalink && (
            <a
              href={slice.primary.ctalink}
              className="inline-block px-[20px] py-[16px] bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 xl:text-left"
            >
              {slice.primary.ctatext}
            </a>
          )}
        </div>

        {/* Background Image */}
        {slice.primary.image && (
          <PrismicNextImage
            field={slice.primary.image}
            className="inset-0 w-full h-full object-cover brightness-100 max-w-[500px] xl:order-[1]"
            alt={slice.primary.image.alt ?? ""}
          />
        )}
      </div>
    </section>
  );
};

export default Main;
