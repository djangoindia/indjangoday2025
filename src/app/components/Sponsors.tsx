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
    name: 'GOLD',
    bgColor: 'bg-[#fbbf24]',
    hoverColor: 'hover:bg-yellow-400',
    textColor: 'text-gray-800',
    isActive: true,
  },
  {
    name: 'SILVER',
    bgColor: 'bg-[#e5e7eb]',
    hoverColor: 'hover:bg-gray-200',
    textColor: 'text-gray-800',
  },
  {
    name: 'ASSOCIATE',
    bgColor: 'bg-[#d4a574]',
    hoverColor: 'hover:bg-amber-600',
    textColor: 'text-white',
  },
];

const defaultSponsors: Sponsor[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  tier: 'gold',
}));

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
      {/* Decorative Clouds */}
      <div className="absolute top-8 right-16 w-24 md:w-32 lg:w-36 opacity-90 z-20">
        <Image
          src="/images/cloud1.png"
          alt="Cloud"
          width={150}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-20 right-48 w-20 md:w-24 lg:w-28 opacity-80 z-20">
        <Image
          src="/images/cloud2.png"
          alt="Cloud"
          width={120}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 left-[10%] -translate-x-1/2">
        {/* Sponsor Tier Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`${tier.bgColor} ${tier.hoverColor} transition-colors duration-300 px-4 py-3 rounded-lg shadow-md border-2 border-[rgba(0,0,0,0.4)]`}
            >
              <span className={`${tier.textColor} font-bold text-sm text-center block`}>
                {tier.name}
              </span>
            </div>
          ))}
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          {rowSponsors.map((row, rowIndex) => (
            row.map((sponsor, colIndex) => {
              const isLastTwoRows = rowIndex >= 3;
              const gridColClass = isLastTwoRows && colIndex === 0 ? 'col-start-2' : '';

              return (
                <div
                  key={sponsor.id}
                  className={`${gridColClass} bg-[#f4c2a1] hover:bg-[#f0b894] transition-colors duration-300 rounded-lg p-4 shadow-lg min-h-[80px] flex items-center justify-center border-2 border-[rgba(0,0,0,0.4)]`}
                >
                  {sponsor.logoSrc ? (
                    <Image
                      src={sponsor.logoSrc}
                      alt={sponsor.logoAlt || `Sponsor ${sponsor.id}`}
                      width={100}
                      height={60}
                      className="object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-[#8b4513] font-semibold text-xs opacity-70">
                        Logo {sponsor.id}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ))}
        </div>
      </div>
    </section>
  );
}