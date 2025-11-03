import Image from 'next/image';

interface SponsorTier {
  name: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  isActive?: boolean;
}

interface Sponsor {
  id: number;
  logoSrc?: string;
  logoAlt?: string;
  tier: string;
  url?: string;
}

interface SponsorTiersProps {
  tiers?: SponsorTier[];
  sponsors?: Sponsor[];
  backgroundColor?: string;
}

const defaultTiers: SponsorTier[] = [
  {
    name: 'PLATINUM',
    bgColor: 'bg-[#e5e7eb]',
    hoverColor: 'hover:bg-gray-200',
    textColor: 'text-gray-800',
  },
  {
    name: 'GRANT',
    bgColor: 'bg-[#fbbf24]',
    hoverColor: 'hover:bg-yellow-400',
    textColor: 'text-gray-800',
    isActive: true,
  },
];

const defaultSponsors: Sponsor[] = [
  // Platinum Sponsors
  {
    id: 1,
    logoSrc: "/images/sponsors/happyfox.png",
    logoAlt: "HappyFox",
    tier: 'platinum',
    url: 'https://www.happyfox.com/'
  },
  // Grant Sponsors
  {
    id: 2,
    logoSrc: "/images/sponsors/django.png",
    logoAlt: "Django Software Foundation",
    tier: 'grant',
    url: 'https://www.djangoproject.com/foundation/'
  },
];

export default function SponsorTiers({
  tiers = defaultTiers,
  sponsors = defaultSponsors,
  backgroundColor = '#ed9a15',
}: SponsorTiersProps) {
  // Group sponsors into rows
  const getRowSponsors = () => {
    const rows = [];
    // First 3 rows: 4 sponsors each
    for (let i = 0; i < 3; i++) {
      rows.push(sponsors.slice(i * 4, (i + 1) * 4));
    }
    // Last 2 rows: 3 sponsors each (centered)
    rows.push(sponsors.slice(12, 15));
    rows.push(sponsors.slice(15, 18));
    return rows;
  };

  const rowSponsors = getRowSponsors();

  return (
    <section
      id="sponsor-tiers-section"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: backgroundColor }}
    >
      {/* Decorative Clouds - Hidden on mobile to prevent overlap */}
      <div className="hidden md:block absolute top-8 right-16 w-32 lg:w-36 opacity-90 z-20">
        <Image
          src="/images/cloud1.png"
          alt="Cloud"
          width={150}
          height={100}
          className="object-contain"
          priority
        />
      </div>
      <div className="hidden md:block absolute bottom-20 right-48 w-24 lg:w-28 opacity-80 z-20">
        <Image
          src="/images/cloud2.png"
          alt="Cloud"
          width={120}
          height={80}
          className="object-contain"
          priority
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12 text-white drop-shadow">
          Our Sponsors
        </h2>

        {/* Platinum Sponsor */}
        <div className="mb-16">
          <div className="mb-6">
            <div className="bg-[#e5e7eb] hover:bg-gray-200 transition-colors duration-300 px-6 py-3 rounded-lg shadow-md border-2 border-[rgba(0,0,0,0.4)] inline-block">
              <span className="text-gray-800 font-bold text-lg">
                PLATINUM
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-2xl">
            {sponsors.filter(s => s.tier === 'platinum').map((sponsor) => (
              <div key={sponsor.id} className="w-full">
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-[#f4c2a1] hover:bg-[#f0b894] transition-colors duration-300 rounded-lg p-8 shadow-lg min-h-[200px] flex items-center border-2 border-[rgba(0,0,0,0.4)]">
                      {sponsor.logoSrc && (
                        <div className="relative w-full h-40">
                          <Image
                            src={sponsor.logoSrc}
                            alt={sponsor.logoAlt || `Sponsor ${sponsor.id}`}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="bg-[#f4c2a1] hover:bg-[#f0b894] transition-colors duration-300 rounded-lg p-8 shadow-lg min-h-[200px] flex items-center border-2 border-[rgba(0,0,0,0.4)]">
                    {sponsor.logoSrc && (
                      <div className="relative w-full h-40">
                        <Image
                          src={sponsor.logoSrc}
                          alt={sponsor.logoAlt || `Sponsor ${sponsor.id}`}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grant Sponsor */}
        <div>
          <div className="mb-6">
            <div className="bg-[#fbbf24] hover:bg-yellow-400 transition-colors duration-300 px-6 py-2 rounded-lg shadow-md border-2 border-[rgba(0,0,0,0.4)] inline-block">
              <span className="text-gray-800 font-bold">
                GRANT
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-xl">
            {sponsors.filter(s => s.tier === 'grant').map((sponsor) => (
              <div key={sponsor.id} className="w-2/3">
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-[#f4c2a1] hover:bg-[#f0b894] transition-colors duration-300 rounded-lg p-4 shadow-lg min-h-[120px] flex items-center border-2 border-[rgba(0,0,0,0.4)]">
                      {sponsor.logoSrc && (
                        <div className="relative w-full h-24">
                          <Image
                            src={sponsor.logoSrc}
                            alt={sponsor.logoAlt || `Sponsor ${sponsor.id}`}
                            fill
                            className="object-contain p-3"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="bg-[#f4c2a1] hover:bg-[#f0b894] transition-colors duration-300 rounded-lg p-4 shadow-lg min-h-[120px] flex items-center border-2 border-[rgba(0,0,0,0.4)]">
                    {sponsor.logoSrc && (
                      <div className="relative w-full h-24">
                        <Image
                          src={sponsor.logoSrc}
                          alt={sponsor.logoAlt || `Sponsor ${sponsor.id}`}
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}