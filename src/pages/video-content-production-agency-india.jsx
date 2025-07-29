import {
  LineHeading,
  ServiceCardSection,
  ServiceHeroSection,
  Testimonials,
  ExploreMoreSection,
  RedbangleAdvantageSection,
  FeaturedWorkSection
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  // approach,
  capabilitiesPlay,
  serviceVideos,
  playAdvantage,
} from '@/content/services'
import { formatPlayPosts } from '@/utils/formate'
import { ecsPlaySchema } from '@/components/schema/ecs-play-schema'
import Script from 'next/script'
import { getPlayWorks } from '@/utils/graphql'
import { useEffect, useState } from 'react'
import { useFilterObserver } from '@/hooks'
import { Button } from '@/components/ui'
import { contentSolutionPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import { ContentPostCard } from '@/components/shared/Cards'

const ServiceECS = ({ works, tags, setisPopupOpen }) => {
  const _posts = contentSolutionPosts.map(postsMapper)
  const { ref, ...filterProps } = useFilterObserver({
     threshold: 0.3,
   })
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
        'We take our cues from people and culture, turning creative insights into campaigns that cut through the noise. From bold ideas to flawless execution, we create work that gets your brand noticed, talked about, and loved.',
      serviceAmblem: '/img/services/campaigns_aset.svg',
      bgColor: ' #fd0238',
      textColor:'#FFFFFF',
    href: '/brand-campaign-agency-india',
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
      bgColor: ' #fddfdf',
    textColor:' #E5011C ',
     href: '/film-and-video-production-agency-india',
    },
  ]
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('play-explore'); // Replace 'section-id' with the ID of your section
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
        title="Get Brand Content for your B2C Business with Red Bangle"
        description="From video content to innovative interactive content and sticky original series – explore Red Bangle’s creative content solutions to fuel growth."
      />

      <ServiceHeroSection
        className="bg-[#fd406f]"
        type="VIDEO CONTENT"
        video={serviceVideos.content.video}
        fullVideo={serviceVideos.content.fullVideo}
        ctaText="WORK WITH US"
        ctaLink="/contact"
        textColor = '#FFFFFF'
        content={
          <>
          <div>
          Fuel brand growth with content that packs a punch. Our storytellers, producers, influencers and technology wizards build engaged brand communities and deliver ROI through IPs, series, unique videos and interactive content.
          </div>
          </>
        }
      />

      <div style={{ display: 'none' }}>
        <h2>Video Production Agency</h2>
        <h2>Corporate Video</h2>
        <h2>Explainer Video Companies</h2>
        <h2>Animated Video Explainer</h2>
        <h2>Ad Film Makers</h2>
      </div>
      {/* <StatsPlay data={playStats} className="pt-15 md:pt-30" /> */}
      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[700px]">
            From ideas to IPs and brand engagement
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesPlay}
        pageSpecificLayout="grid-cols-2"
      />
      <RedbangleAdvantageSection data={playAdvantage} />
      <FeaturedWorkSection posts={_posts} heading="EXPLORE WORK" href="/work/video-content-production-agency-india" title="Content that brands and consumers loved"/>
      {/* <FeaturedPlayWorkSection works={works ?? []} featuredTitle tags={tags} /> */}

      <Testimonials title={'WHAT OUR CLIENTS SAY'} className="py-7.5 md:py-15" type="semi"
         testimonialData={createTestimonialData} />
      <div id="play-explore">
        <ExploreMoreSection
          type="play"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={cards}
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(ecsPlaySchema)}
      </Script>
    </>
  )
}
// export async function getStaticProps() {
//   const { data } = await getFeaturedPlayWorks()

//   return {
//     props: {
//       works: formatPlayPosts(data?.works?.nodes),
//     },
//   }
// }
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)
  const tags = works.reduce((prev, w) => {
    w.tags?.forEach((t) => (prev[t.slug] = t.name))
    return prev
  }, {})
  const tagProp = Object.entries(tags).map(([k, v], index) => ({
    key: index,
    label: v,
    value: k,
  }))
  const filtered = tagProp.filter((f) => f.value != 'featured-work').sort()

  return {
    props: {
      works,
      tags: [tagProp.find((t) => t.value == 'featured-work'), ...filtered],
    },
  }
}
export default ServiceECS
