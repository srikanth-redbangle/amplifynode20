import { scsThinkSchema } from '@/components/schema/scs-think-schema'
import {
  ServiceCardSection,
  ServiceHeroSection,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
  Testimonials
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  capabilitiesTech,
  redbanglewayThinkTech,
  serviceVideos,
} from '@/content/services'
import { technologySolutionPosts, createTestimonialData } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useFilterObserver } from '@/hooks'

const ServiceTech = ({ setisPopupOpen }) => {


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
      bgColor: ' #c60025 ',
      textColor: '#FFFFFF',
      href: '/brand-design-agency-india',
    },
    {
      id: 2,
      serviceTitle: 'CAMPAIGN',
      serviceDescription:
        'We take our cues from people and culture, turning creative insights into campaigns that cut through the noise. From bold ideas to flawless execution, we create work that gets your brand noticed, talked about, and loved.',
      serviceAmblem: '/img/services/campaigns_aset.svg',
      bgColor: ' #fd0238',
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
      serviceTitle: 'PRODUCTION',
      serviceDescription:
        'Our full-service Production services handle everything—any format, any genre, any platform, any language. From the first draft to the final cut, we bring big ideas to life with punch, pace, and polish. No limits, no gaps—just end-to-end video magic, done right.',
      serviceAmblem: '/img/services/production_aset.svg',
      bgColor: ' #fddfdf ',
      textColor: ' #E5011C',
      href: '/film-and-video-production-agency-india'
    },
  ]
  const _posts = technologySolutionPosts.map(postsMapper)
  const { ref, ...filterProps } = useFilterObserver({
    threshold: 0.3,
  })
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('tech-explore'); // Replace 'section-id' with the ID of your section
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
        title="Get Technology Solutions for your B2C Brand | Red Bangle"
        description="From responsive websites and gamified apps to immersive content and interactive experiences - choose Red Bangle’s technology services for your B2C brand."
      />


      <ServiceHeroSection
        className="bg-[#fcb4b4]"
        type="Experience"
        video={serviceVideos.technology.video}
        fullVideo={serviceVideos.technology.fullVideo}
        ctaText="Send us a brief"
        ctaLink="/contact"
        textColor='#ffffff'
        content={
          <>
            We blend technology and creativity to craft cutting-egde digital experiences
            for B2C brands. From AI-driven creative solutions to responsive website design
            and development - we inspire and engage every audience.
          </>
        }
      />

      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[620px]">
            Unforgettable Immersive Experiences for your Audience
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesTech}
      />
      <RedbangleWaySection
        data={redbanglewayThinkTech}
        image={{
          src: '/img/services/tech_think_process.gif',
          alt: 'think process',
          width: '500',
          height: '500',
        }}
        title='
We turn brand communications into immersive digital experiences'
      />
      <FeaturedWorkSection posts={_posts} href="/work/immersive-experience-agency-india" />
      <Testimonials
        title={'WHAT OUR CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
        type="semi"
      />
      <div id="tech-explore">
        <ExploreMoreSection
          type="think"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={cards}
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(scsThinkSchema)}
      </Script>
    </>
  )
}
export default ServiceTech
