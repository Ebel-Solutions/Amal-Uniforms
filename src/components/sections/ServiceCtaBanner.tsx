import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerData {
  bgImage: string;
  title: string;
  subtitle: string;
  primaryBtn: { text: string; href: string };
  secondaryBtn: { text: string; href: string };
}

interface ServiceCtaBannerProps {
  ctaBanner: CtaBannerData;
  primaryBtnClass: string;
  imageAlt?: string;
}

export default function ServiceCtaBanner({
  ctaBanner,
  primaryBtnClass,
  imageAlt = "Uniform image",
}: ServiceCtaBannerProps) {
  return (
    <section className="bg-navy-950 text-white relative overflow-hidden">
      {/* Mobile: image as full-section background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={ctaBanner.bgImage}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[220px]">
        {/* Desktop: image column with both-edge fade */}
        <div className="hidden lg:block relative lg:w-[42%] shrink-0 overflow-hidden">
          <Image
            src={ctaBanner.bgImage}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="42vw"
          />
          {/* Fade left edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/20 to-transparent" />
          {/* Fade right edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950 via-navy-950/20 to-transparent" />
        </div>

        {/* Text & Buttons */}
        <div className="relative flex-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:py-14 lg:pl-10 lg:pr-10 space-y-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
            {ctaBanner.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
            {ctaBanner.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={ctaBanner.primaryBtn.href}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${primaryBtnClass} font-bold text-sm rounded-xl transition-colors shadow-md group`}
            >
              <span>{ctaBanner.primaryBtn.text}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={ctaBanner.secondaryBtn.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-white/40 font-medium text-sm rounded-xl hover:bg-white/10 transition-colors group"
            >
              <span>{ctaBanner.secondaryBtn.text}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
