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
  capabilitiesSCS,
  redbanglewayThink,
  serviceVideos,
} from '@/content/services'
import { strategyPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'



const ServiceSCS = ({setisPopupOpen}) => {

  const _posts = strategyPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)

 const createTestimonialData = [
    {
      key: 0,
      quote:
        'Working with Red Bangle has been an excellent experience. Their team was able to effortlessly transform our communication needs into a well-crafted campaign. They have been perceptive in understanding our needs as a business, this is what I believe allowed them to come up with creative ideas for our campaign.',
      name: 'KALP PATEL & AYUSH PATEL',
      designation: 'FOUNDERS',
      company: 'L74 CRAFT CIDERS',
      image: {
        srcSet:
          '/img/testimonials/kalp-patel_ayush-patel-1.jpg 533w, /img/testimonials/kalp-patel_ayush-patel-1.jpg 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    ,
    {
      key: 1,
      quote:
        <>
          <div>
          Red Bangle was especially impressive with their creative strategy, design and copy. They took the colors, the quirky and iconic signages, and the energy of the local markets, and transformed them into a fresh, modern expression for our brand. Our customers are drawn to the unique identity, and it&apos;s translated into a love for the food itself. 

          </div>
        </>,
      name: 'KUNCHERIA MARATTUKALAM',
      designation: 'FOUNDER & DIRECTOR',
      company: 'MARATT GROUP',
      image: {
        srcSet:
          '/img/testimonials/kuncheria_marattukalam.jpg', 
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
      quote:
        'It has been a pleasure to work with the Red Bangle team on Project Loom. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
      name: 'SHOBA NARAYAN',
      designation: 'FOUNDER',
      company: 'PROJECT LOOMS',
      image: {
        srcSet:
          '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
        key: 3,
        quote:
          'We worked on 2 campaign films with Red Bangle and I can confidently say that the output exceeded our expectations. They were able to come up with concepts that combined the strong recall of popular culture and incorporated brand messaging clearly. I would highly recommend them as a kickass creative partner.',
        name: 'BHARAT VIRMANI',
        designation: 'Marketing Manager',
        company: 'Games24x7',
        image: {
          srcSet:
            '/img/testimonials/bharat.webp 533w, /img/testimonials/bharat.webp 1066w',
          sizes: '(max-width:768px) 533px, 1066px',
        },
      },
  ]
  const cards= [
    {
      id: 0,
      serviceTitle: 'DESIGN',
      serviceDescription:
        "From brand identity to experiential design - we help you break through the clutter, and build credibility and human connect. We don't just design; we sculpt masterpieces that defy convention and elevate your brand into a unique entity that amazes in every touch point.",
      serviceAmblem: '/img/services/design_asset.svg',
      bgColor: '#c60025',
      textColor: '#FFFFFF',
      href: '/brand-design-agency-india',
    },
    {
      id: 1,
      serviceTitle: 'CAMPAIGN',
      serviceDescription:
        'We take our cues from people and culture, turning creative insights into campaigns that cut through the noise. From bold ideas to flawless execution, we create work that gets your brand noticed, talked about, and loved.',
      serviceAmblem: '/img/services/campaigns_aset.svg',
      bgColor: ' #fd0238',
      textColor:'#FFFFFF',
      href: '/brand-campaign-agency-india',
    },
    {
      id: 2,
      serviceTitle: 'CONTENT',
      serviceDescription:
        'We create content that packs a punch. From binge-worthy brand IPs and scroll-stopping video series to interactive magic and influencer gold, our production game is built to scale. We build communities and drive real results.',
      serviceAmblem: '/img/services/content_aset.svg',
      bgColor: ' #fd406f',
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
      bgColor: ' #fcb4b4',
      textColor:'#FFFFFF',  
   href: '/immersive-experience-agency-india' ,
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
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('leap-explore'); // Replace 'section-id' with the ID of your section
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
        title="Red Bangle - Winning Brand Strategy for your B2C Business"
        description="Get brand strategy services that unlock growth for your B2C brand. Talk to Red Bangle for brand positioning, campaign strategy and content strategy."
      />
      <ServiceHeroSection
        className="bg-[#930000]"
        type="STRATEGY"
        video={serviceVideos.strategy.video}
        fullVideo={serviceVideos.strategy.fullVideo}
        ctaText="Strategise with us "
        ctaLink="/contact"
         textColor ='#FFFFFF'
        content={
          <>
            <h1 className="inline">We blend data, culture and marketing expertise to craft breakthrough strategies that launch memorable consumer brands, and nurture sticky campaigns and content. Unlock exponential brand growth with us.
            </h1>
           
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Marketing Agency</h2>
        <h2>Holistic Marketing</h2>
        <h2>Marketing Content Strategy</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Full Service Advertising Agency</h2>
      </div>
      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[620px]">
            Unlocking strategic growth for your business
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesSCS}
      />
      <RedbangleWaySection
        data={redbanglewayThink}
        image={{
          src: '/img/services/think-process.gif',
          alt:'think process',
          width: '500',
          height: '500',
        }}
      />
       <FeaturedWorkSection posts={_posts} href="/work/featured" title="Work that brands and consumers loved"/> 
 <Testimonials
        title={'WHAT OUR CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
        type="semi"
      />
      <div id="leap-explore">
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
export default ServiceSCS
