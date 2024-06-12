import { FC } from "react";
import Image from "next/image";
import { testimonials } from "@/data";

interface TestimonialProps {
  name: string;
  quote: string;
  image: string;
  profession: string;
}

const Testimonial = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 py-12"
      id="testimonials"
    >
      <h1 className="mb-1 max-w-2xl text-center text-2xl font-semibold tracking-tighter text-gray-900 dark:text-gray-100 md:text-4xl">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <p className="max-w-2xl text-center text-sm font-light text-gray-600 dark:text-gray-400 md:text-base">
        This is a demo testimonial. A real testimonial will be added in the
        future.
      </p>
      <div className="relative mt-12 flex size-full flex-col items-center justify-center gap-5 md:flex-row">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="flex flex-col justify-center gap-4">
            {testimonials
              .slice(colIndex * 2, colIndex * 2 + 2)
              .map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialCard: FC<TestimonialProps> = ({
  name,
  quote,
  image,
  profession,
}) => {
  return (
    <div
      className={`relative flex h-auto max-w-[22rem] select-none flex-col items-start justify-center overflow-hidden rounded-2xl border border-neutral-100 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm dark:border-neutral-800 dark:hover:shadow-white/10`}
    >
      <div className="absolute right-0 top-0 size-24 rounded-2xl bg-gradient-to-r from-[#fb3a5d] to-[#fb3a5d]  opacity-20 blur-3xl"></div>
      <div className="mb-0 flex h-fit flex-row items-center gap-3">
        <Image
          className="m-0 block size-11 rounded-full object-cover"
          src={image}
          alt={image}
          width={120}
          height={80}
        />
        <div className="mb-0 flex h-fit flex-col items-start">
          <h3 className="m-0 text-base font-medium text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          <p className="m-0 text-center text-sm text-gray-600 dark:text-gray-400">
            {profession}
          </p>
        </div>
      </div>
      <p className="mb-0 mt-3 text-left text-sm font-light text-gray-600 dark:text-gray-400 md:text-base">
        {quote}
      </p>
    </div>
  );
};

export default Testimonial;
