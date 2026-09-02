"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Apex Global FinTech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    text: "Partnering with this team transformed our core banking portal. They shipped our production MVP in under 8 weeks with flawless SOC-2 compliance. Our daily transaction volume tripled within the first quarter.",
  },
  {
    id: 2,
    name: "David Sterling",
    role: "Founder & CEO",
    company: "PulseScale Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "The architectural depth and sprint velocity they brought to our SaaS platform was exceptional. They don't just write clean Next.js and backend code; they think like product owners focused on customer retention.",
  },
  {
    id: 3,
    name: "Dr. Maya Lin",
    role: "VP of Digital Products",
    company: "HealthSync Pro",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    text: "Building HIPAA-compliant telehealth applications requires zero tolerance for security oversights. Their team delivered our video consultation pipeline with 99.99% uptime and stunning user experience.",
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "Head of Growth & E-Commerce",
    company: "OmniRetail Global",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "Our previous agency struggled with mobile performance. This team rebuilt our storefront from the ground up, cutting page load speeds by 65% and instantly lifting our mobile conversion rate by 4.2x.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative border-t border-gray-800">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Executive Testimonials</h2>
          <p className="text-3xl md:text-4xl font-bold font-raleway">What Industry Leaders Say About Us</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="pb-16 max-w-4xl mx-auto"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700/60 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center">
                {/* 5-Star Rating */}
                <div className="flex text-primary mb-6 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current text-primary text-base" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base md:text-xl italic text-gray-200 leading-relaxed mb-8 font-light max-w-2xl">
                  "{t.text}"
                </p>

                {/* Avatar & Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary relative flex-shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-white">{t.name}</h3>
                    <p className="text-xs text-primary font-medium">{t.role}</p>
                    <p className="text-xs text-gray-400">{t.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
