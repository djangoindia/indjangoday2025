import Image from 'next/image';

interface Speaker {
  id: number;
  name: string;
  designation: string;
  imageSrc: string;
  imageAlt: string;
}

interface KeynoteSpeakersProps {
  speakers?: Speaker[];
}

const defaultSpeakers: Speaker[] = [
  {
    id: 1,
    name: 'Sarah Abderemane',
    designation: 'Vice President, Django Software Foundation & Software Engineer at Kraken Tech',
    imageSrc: '/images/sarah-abd.jpeg',
    imageAlt: 'Picture of Sarah Abderemane',
  },
  // {
  //   id: 2,
  //   name: 'ABC',
  //   designation: 'Designation',
  //   imageSrc: '/images/speaker2.jpg',
  //   imageAlt: 'Speaker 2',
  // },
];

export default function KeynoteSpeakers({ speakers = defaultSpeakers }: KeynoteSpeakersProps) {
  return (
    <section
      id="keynote-speakers"
      className="relative w-full min-h-screen flex flex-col items-center justify-start py-16 sm:py-20 bg-gradient-to-b from-[#2ca6a4] to-[#e8f7f6] overflow-hidden"
    >
      {/* Mandalas (decorative corners) */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 lg:w-80 opacity-70 sm:opacity-80 pointer-events-none">
        <Image
          src="/images/sec-3-top-left.png"
          alt="Mandal Top Left"
          width={400}
          height={300}
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute bottom-0 right-0 w-28 sm:w-40 md:w-56 lg:w-72 opacity-70 sm:opacity-80 pointer-events-none">
        <Image
          src="/images/sec-3-bottom-right.png"
          alt="Mandal Bottom Right"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>

      {/* Section Title */}
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white bg-[#1a7a78]/90 border-2 border-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg mb-10 sm:mb-14 tracking-wide text-center leading-snug">
        KEYNOTE SPEAKERS
      </h2>

      {/* Speakers Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto w-full px-4 sm:px-6">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-[calc(50%-0.75rem)]"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={speaker.imageSrc}
                alt={speaker.imageAlt}
                width={500}
                height={600}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="text-white text-base sm:text-lg font-bold mb-1 drop-shadow-lg">
                {speaker.name}
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-medium drop-shadow-md">
                {speaker.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}