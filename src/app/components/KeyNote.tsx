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
    name: 'XYZ',
    designation: 'Designation',
    imageSrc: '/images/speaker1.jpg',
    imageAlt: 'Speaker 1',
  },
  {
    id: 2,
    name: 'ABC',
    designation: 'Designation',
    imageSrc: '/images/speaker2.jpg',
    imageAlt: 'Speaker 2',
  },
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
        KEY NOTE SPEAKERS
      </h2>

      {/* Speakers Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl w-full px-4 sm:px-8 md:px-12">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="relative bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={speaker.imageSrc}
              alt={speaker.imageAlt}
              width={500}
              height={600}
              className="w-full h-64 sm:h-72 md:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white drop-shadow-md">
              <h3 className="text-base sm:text-lg font-bold">{speaker.name}</h3>
              <p className="text-xs sm:text-sm">{speaker.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}