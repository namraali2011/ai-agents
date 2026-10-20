import Image from "next/image";

export default function Home() {
  return (
    <figure className="md:flex bg-purple-600 rounded-xl p-8 md:p-0">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/img.jpeg" alt="Image" width={384} height={512} />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-5xl font-medium text-white">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>

        <figcaption className="font-medium">
          <div className="text-sky-200">
            Namra Ali
          </div>

          <div className="text-white">
            AI Engineer, Sargodha
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
