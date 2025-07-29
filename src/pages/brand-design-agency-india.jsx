import { scsThinkSchema } from '@/components/schema/scs-think-schema'
import {
  ServiceCardSection,
  ServiceHeroSection,
  ExploreMoreSection,
  FeaturedWorkSection,
  Testimonials
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
capabilitiesDesign,
  serviceVideos,
} from '@/content/services'
import { designPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'



const ServiceSCS = ({setisPopupOpen}) => {

  const _posts = designPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)

 const createTestimonialData = [
   
    {
      key: 0,
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
        key: 1,
        quote:
          <>
            <div>
          From hand-drawn mascots to quirky doodles, and delicious copy that weaves in witty puns from popular song lyrics—every element of our new brand feels fun, indulgent, and effortlessly us. Red Bangle has given us a brand bursting with character and joy! Seeing customers connect with it at our dessert cafe feels incredible.

            </div>
          </>,
        name: 'NAKUL KULKARNI',
        designation: 'CO-FOUNDER',
        company: 'P.U. DINGDING',
        image: {
          srcSet:
            '/img/testimonials/nakul_1.jpg', 
          sizes: '(max-width:768px) 533px, 1066px',
        },
      },
   
  ]
  const cards= [
    {
        id: 0,
        serviceTitle: 'STRATEGY',
        serviceDescription:
          'Whether we’re shaping campaigns or content, we blend marketing expertise with data, consumer insights, and cultural nuances to craft laser-focused strategies that set the stage for successful brand communication.',
        serviceAmblem: '/img/services/strategy_asset.svg',
        bgColor: '#930000',
        textColor:'#FFFFFF',
        href: '/brand-strategy-agency-india',
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
      bgColor: '#fd406f',
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
      bgColor: '#fcb4b4',
      textColor:'#ffffff',
      href: '/immersive-experience-agency-india' ,
    },
    {
      id: 5,
      serviceTitle: 'PRODUCTION',
      serviceDescription:
        'Our full-service Production services handle everything—any format, any genre, any platform, any language. From the first draft to the final cut, we bring big ideas to life with punch, pace, and polish. No limits, no gaps—just end-to-end video magic, done right.',
      serviceAmblem: '/img/services/production_aset.svg',
      bgColor: ' #fddfdf',
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
        title="Red Bangle - Brand Design Agency for B2C Brands"
        description="Get winning brand design solutions for your B2C brand: from brand immersion workshops to identity design, websites, experiential, packaging, merchandise and more."
      />
      <ServiceHeroSection
        className="bg-[#c60025]"
        type="DESIGN"
        video={serviceVideos.design.video}
        fullVideo={serviceVideos.design.fullVideo}
        ctaText="Send a brief"
        ctaLink="/contact"
        textColor ='#FFFFFF'
        content={
          <>
            <h1 className="inline">From stunning brand design to engaging experiential design, illustrations, packaging, editorial design and motion that wows—our design solutions spark conversations and brand love with audiences. </h1>
           
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
            Design that’s tech-first, motion-first and future forward
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesDesign}
      />
      {/* <RedbangleWaySection
        data={redbanglewayThink}
        image={{
          src: '/img/services/think-process.gif',
          alt:'think process',
          width: '500',
          height: '500',
        }}
      /> */}
       <FeaturedWorkSection posts={_posts} href="/work/brand-design-agency-india" title="Work that brands and consumers loved"/> 
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
