import {
  ServiceCardSection,
  ServiceHeroSection,
  Testimonials,
  ExploreMoreSection,
  RedbangleWaySection,
  StatsSection,
  FeaturedPlayWorkSection
} from '@/components/shared'
import { schemaScsCreate } from '@/components/schema/scs-create-schema'
import {
  capabilitiesProduction,
  serviceVideos,
} from '@/content/services'
import { createTestimonialData } from '@/utils/dummy'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getPlayWorks } from '@/utils/graphql'
import { formatPlayPosts } from '@/utils/formate'
import { SEO } from '@/components/shared/SEO'

const cards = [
  {
    id: 0,
    serviceTitle: 'STRATEGY',
    serviceDescription:
      'Whether we’re shaping campaigns or content, we blend marketing expertise with data, consumer insights, and cultural nuances to craft laser-focused strategies that set the stage for successful brand communication.',
    serviceAmblem: '/img/services/strategy_asset.svg',
    bgColor: '#930000',
    textColor: '#FFFFFF',
    href: '/brand-strategy-agency-india',
  },
  {
    id: 1,
    serviceTitle: 'DESIGN',
    serviceDescription:
      "From brand identity to experiential design - we help you break through the clutter, and build credibility and human connect. We don't just design; we sculpt masterpieces that defy convention and elevate your brand into a unique entity that amazes in every touch point.",
    serviceAmblem: '/img/services/design_asset.svg',
    bgColor: ' #c60025',
    textColor: '#FFFFFF',
    href: '/brand-design-agency-india',
  },
  {
    id: 2,
    serviceTitle: 'CAMPAIGN',
    serviceDescription:
      "We take our cues from people and culture, turning creative insights into campaigns that cut through the noise. From bold ideas to flawless execution, we create work that gets your brand noticed, talked about, and loved.",
    serviceAmblem: '/img/services/campaigns_aset.svg',
    bgColor: ' #fd0238 ',
    textColor: '#FFFFFF',
    href: '/brand-campaign-agency-india',
  },
  {
    id: 3,
    serviceTitle: 'CONTENT',
    serviceDescription:
      'We create content that packs a punch. From binge-worthy brand IPs and scroll-stopping video series to interactive magic and influencer gold, our production game is built to scale. We build communities and drive real results.',
    serviceAmblem: '/img/services/content_aset.svg',
    bgColor: ' #fd406f ',
    textColor: '#FFFFFF',
    href: '/video-content-production-agency-india',
  },
    {
    id: 4,
    serviceTitle: 'AI',
    serviceDescription:
      'Bowl your audience over with our AI-first campaigns, content, experiences and more. Take your brand into the future with our end-to-end AI solutions: concept, design, curation, development, AI training and more.',
    serviceAmblem: '/img/services/ai_aset.svg',
    bgColor: ' #fd96ad',
    textColor:'#ffffff',
    href: '/creative-ai-agency-india',
  },
  {
    id: 5,
    serviceTitle: 'EXPERIENCE',
    serviceDescription:
      'We bring the tech-fueled magic your brand needs to dominate the digital playground. From immersive virtual experiences to addictive games, branded apps, responsive websites and beyond.',
    serviceAmblem: '/img/services/tech_aset.svg',
    bgColor: '  #fcb4b4',
    textColor: '#ffffff',
    href: '/immersive-experience-agency-india',
  },

]
const stats = [
  {
    id: 0,
    countUpProps: {
      value: 60,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <span className="md:max-w-[188px]">
        clients
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 4,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: (
      <>
        successful
        <br />projects
      </>
    ),
  },
  {
    id: 2,
    countUpProps: {
      value: 25,
      suffix: (
        <span className="inline-flex">
          <span className="text-rb-red">+</span>
        </span>
      ),
    },
    text: <>
      countries<br />
      filmed in
    </>,
  },
  {
    id: 3,
    countUpProps: {
      value: 30,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <>
        formats
        <br />
        produced
      </>
    ),
  },
]
export const ourCapabilities = [
  {
    key: '0',
    heading: 'Storyboards & Narramatics',
    content: "We translate scripts into detailed photoboards, sketches and - where required - narramatics to plan framing, camera movements, scene transitions, effectiveness testing and more.",
  },
  {
    key: '1',
    heading: 'Celebrities & Casting',
    content: "We identify, negotiate, and secure talent that aligns with the campaign goal — ensuring the right mix of credibility, relatability, and performance capability.",
  },
  {
    key: '2',
    heading: 'Art Direction & Styling',
    content: "From set design to costume styling, we ensure aesthetic consistency and alignment with the brand and the campaign or content.",
  },
  {
    key: '3',
    heading: 'Music & Sound',
    content: "From curating and sourcing tracks or composing original music that lands the desired emotion to jingles that are unforgettable and sound design for every moment - we do it all.",
  },
  {
    key: '4',
    heading: 'Animation, CGI & VFX',
    content: "From custom-illustrated characters and 2D animation to realistic CGI creatures in stunning environments - we support high quality visuals and special effects for campaigns and content.",
  },
  {
    key: '5',
    heading: 'Production & Post',
    content: "Production that scales with the ideas, post production that brings alive engaging stories, and limitless translations, dubs and adapts to help you reach your every audience.",
  },
  // {
  //   key: '6',
  //   heading: 'Scalable Production ',
  //   content: "Whether it is one campaign film or multiple, dozens of content pieces in one city or hundreds across the country – we excel at production processes, talent management, scheduling, and maintaining creative integrity.",
  // },
  // {
  //   key: '7',
  //   heading: 'Editing & Grading',
  //   content: "Our deep understanding of the Director’s vision, combined with the expertise of our editors, color graders, and audio engineers, allows us to seamlessly stitch together the desired narratives and deliver polished outputs—ready to present to your consumers.",
  // },
  // {
  //   key: '8',
  //   heading: 'Versioning & Adapts',
  //   content: "Looking to make a national campaign in 8 languages? Or publish content across multiple platforms? We support local-language scripting and dubbing, aspect ratio adapts, thumbnail adapts and more!",
  // },
]

const ServiceCCS = ({ works, tags, setisPopupOpen }) => {
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('create-explore'); // Replace 'section-id' with the ID of your section
        if (section && window.scrollY > section.offsetTop) {
          setisPopupOpen(true);
          setstopVisible(true)
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [stopVisible]);
  return (
    <>

      <SEO
        title="Get Full-Service Film and Video Production with Red Bangle"
        description="Create engaging live action ad films, YouTube series and animated brand content with Red Bangle. Grow your B2C brand with our film and video production services."
      />
      <ServiceHeroSection
        className="bg-[#fddfdf]"
        type="Production"
        video={serviceVideos.production.video}
        fullVideo={serviceVideos.production.fullVideo}
        ctaText="Work with us"
        ctaLink="/contact"
        textColor='#E5011C'
        content={
          <>
            Lights, camera, magic! We produce campaigns and content that steal the spotlight. From live action ad films to YouTube series and animated brand stories, our Producers bring big ideas to life across screens, genres, formats and languages.
          </>
        }
      />
      <StatsSection
        tag="OUR PRODUCTION FOOTPRINT"
        className="pt-15 md:pt-30 pb-9 md:pb-15"
        data={stats}
      />

      <RedbangleWaySection
        heading="OUR CAPABILITIES"
        title={
          <div className="md:max-w-[720px]">
            Production solutions that set all eyes on your brand
          </div>
        }
        data={ourCapabilities}
        image={{
          src: '/img/services/production-process.gif',
          alt: 'the red bangle way visual',
          width: '614',
          height: '774',
        }}
      />
      <ServiceCardSection
        tag="The Red Bangle Advantage"
        title={
          <div className="md:max-w-[620px]">
            Film, series and video production at scale
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesProduction}
      />
      <FeaturedPlayWorkSection tags={tags} works={works} initialTab='featured-work-new' featuredTitle="Work that brands and consumers loved" />
      <Testimonials
        title={'WHAT OUR CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
        type="semi"
      />
      <div id="create-explore">
        <ExploreMoreSection
          type="create"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={cards}
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaScsCreate)}
      </Script>
    </>
  )
}
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes).reverse()
  const tags = works.reduce((prev, w) => {
    w.tags?.forEach((t) => {
      if (['featured-work-new'].includes(t.slug)) {
        prev[t.slug] = t.name;
      }
    });
    return prev;
  }, {});
  const tagProp = Object.entries(tags).map(([k, v], index) => ({
    key: index,
    // label: v,
    value: k,
  }))
  const filtered = tagProp.filter((f) => f.value != 'featured-work-new').sort()

  return {
    props: {
      works,
      tags: [tagProp.find((t) => t.value == 'featured-work-new'), ...filtered],
    },
  }
}
export default ServiceCCS
