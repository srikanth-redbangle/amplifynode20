import {
  ServiceCardSection,
  ServiceHeroSection,
  Testimonials,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
} from '@/components/shared'
import { schemaScsCreate } from '@/components/schema/scs-create-schema'
import { SEO } from '@/components/shared/SEO'
import {
  capabilitiesCreate,
  redbanglewayCreate,
  serviceVideos,
} from '@/content/services'
import { campaignSimilarPosts,createTestimonialData } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'


const cards= [
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
    serviceTitle: 'CONTENT',
    serviceDescription:
      'We create content that packs a punch. From binge-worthy brand IPs and scroll-stopping video series to interactive magic and influencer gold, our production game is built to scale. We build communities and drive real results.',
    serviceAmblem: '/img/services/content_aset.svg',
    bgColor: ' #fd406f ',
    textColor:'#FFFFFF',
   href: '/video-content-production-agency-india',
  },
  {
    id: 3,
    serviceTitle: 'AI',
    serviceDescription:
      'Bowl your audience over with our AI-first campaigns, content, experiences and more. Take your brand into the future with our end-to-end AI solutions: concept, design, curation, development, AI training and more.',
    serviceAmblem: '/img/services/ai_aset.svg',
    bgColor: ' #fd96ad',
    textColor:'#ffffff',
    href: '/creative-ai-agency-india',
  },
   {
    id: 4,
    serviceTitle: 'EXPERIENCE',
    serviceDescription:
      'We bring the tech-fueled magic your brand needs to dominate the digital playground. From immersive virtual experiences to addictive games, branded apps, responsive websites and beyond.',
    serviceAmblem: '/img/services/tech_aset.svg',
    bgColor: ' #fcb4b4 ',
    textColor:'#ffffff',
    href: '/immersive-experience-agency-india',
  },
  {
    id: 5,
    serviceTitle: 'PRODUCTION',
    serviceDescription:
      'Our full-service Production services handle everything—any format, any genre, any platform, any language. From the first draft to the final cut, we bring big ideas to life with punch, pace, and polish. No limits, no gaps—just end-to-end video magic, done right.',
    serviceAmblem: '/img/services/production_aset.svg',
    bgColor: ' #fddfdf ',
    textColor:' #E5011C',
   href: '/film-and-video-production-agency-india',
  },
]

const ServiceCCS = ({setisPopupOpen}) => {
  const _posts = campaignSimilarPosts.map(postsMapper)
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
        title="Red Bangle - Creative Advertising Campaigns for your B2C Brand"
        description="Transform B2C brand growth with creative campaigns that start conversations & spark action. Talk to us for TV commercials, digital ads, interactive campaigns & more."
      />

      <ServiceHeroSection
        className="bg-[#fd0238]"
        type="campaign"
        video={serviceVideos.campaign.video}
        fullVideo={serviceVideos.campaign.fullVideo}
        ctaText="Create with us"
        ctaLink="/contact"
        textColor = '#FFFFFF'
        content={
          <>
            We take our cues from people and culture, turning real insights into relatable campaigns that align perfectly with your brand&apos;s communication goals. Our work starts conversations, sparks action, and resonates with the right audience. 
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Content Marketing Strategy</h2>
        <h2>Best Creative Agency</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Brand Campaigns</h2>
      </div>
      <ServiceCardSection
        tag="Our Capabilities"
        iconClassName="w-15 h-15"
        title={
          <>Creative campaigns that resonate deeply with audiences</>
        }
        cards={capabilitiesCreate}
        pageSpecificLayout="grid-cols-2"
      />
      <RedbangleWaySection
        title={
          <div className="md:max-w-[720px]">
            Our approach to crafting exceptional campaigns
          </div>
        }
        data={redbanglewayCreate}
        image={{
          src: '/img/services/the_rb_way_visual.jpg',
          alt: 'the red bangle way visual',
          width: '614',
          height: '774',
        }}
      />
      <FeaturedWorkSection posts={_posts} href="/work/brand-campaign-agency-india" title="Work that brands and consumers loved"/>
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
export default ServiceCCS
