import { scsThinkSchema } from '@/components/schema/scs-think-schema'
import {
    ServiceCardSection,
    ServiceHeroSection,
    ExploreMoreSection,
    RedbangleWaySection,
    ContactSection
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
    capabilitiesAI,
    redbanglewayAI,
    serviceVideos,
} from '@/content/services'
import { strategyPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Accordion, Button } from '@/components/ui'
import GetUpdates from './getupdates'


const ServiceSCS = ({ setisPopupOpen }) => {

    const _posts = strategyPosts.map(postsMapper)
    const [stopVisible, setstopVisible] = useState(false)

    const TNC = [

        {
            key: 1,
            title: 'What types of AI solutions do you offer?',
            content:
                'We offer AI avatars, conversational agents, hyper-personalized video/image content, AR try-on tools, robotic brand ambassadors, and more—all built to emotionally connect with your audience.',
        },
        {
            key: 2,
            title: 'Can AI really create personalized content?',
            content:
                'Yes. We design and develop AI systems that generate images, videos and interactive journeys tailored to each of your audience using demographic data, personal preferences and even live inputs. Our solutions help boost relevance, shareability, and conversion for your brand campaigns and content.',
        },
        {
            key: 3,
            title: 'Do you build branded AI avatars or AI hosts?',
            content:
                'Absolutely. We create AI avatars and digital twins that represent your brand. Our scope includes scripting dialogues, tonality training, and enabling real-time interaction across platforms.',
        },
        {
            key: 4,
            title: 'How will conversational AI work for my brand?',
            content:
                'We design and deploy smart chat/voice agents trained on your brand language, products/solutions, FAQs, and tonality to deliver intelligent, on-brand conversations across web, WhatsApp, and more.',
        },
        {
            key: 5,
            title: 'Is it possible to integrate AR try-ons into our website?',
            content:
                'Yes. We design and build or curate and adapt, and seamlessly integrate virtual try-on tools to your website or app. Our solution ensures frictionless, interactive shopping experiences on mobile or camera-enabled browsers.',
        },


        {
            key: 6,
            title: 'What are robotic brand ambassadors?',
            content:
                'They’re physical robots programmed to run on your brand and product messaging. They can be used in-store and at events to attract and inform customers, and to create memorable brand interactions.',
        },
        {
            key: 7,
            title: 'Will your solutions integrate with our CRM?',
            content: 'Our solutions use APIs and integration frameworks to sync with a wide range of CRMs and marketing platforms. Our experts ensure continuous data and campaign performance tracking for you.',
        },
        {
            key: 8,
            title: 'How do you ensure privacy and compliance?',
            content: 'We build AI experiences with data protection at the core—following GDPR/CCPA guidelines, using encryption, and ensuring user consent for personalization or data use.',
        },
        {
            key: 9,
            title: 'Do you localize content for multiple regions?',
            content: 'Absolutely, we support multilingual content generation and culturally tailored visuals—so your brand feels locally relevant.',
        },
        {
            key: 10,
            title: 'How do you measure campaign success?',
            content: 'For every project we work on, we first define success KPIs. Throughout the campaign tenure, we track engagement, conversions and interaction metrics via an integrated analytics dashboard. And at the end of the project, we ship out a campaign report to you.',
        },
    ]

  
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
            bgColor: '#c60025',
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
            bgColor: ' #fd406f',
            textColor: '#FFFFFF',
            href: '/video-content-production-agency-india',
        },
        {
            id: 4,
            serviceTitle: 'EXPERIENCE',
            serviceDescription:
                'We bring the tech-fueled magic your brand needs to dominate the digital playground. From immersive virtual experiences to addictive games, branded apps, responsive websites and beyond.',
            serviceAmblem: '/img/services/tech_aset.svg',
            bgColor: ' #fcb4b4',
            textColor: '#FFFFFF',
            href: '/immersive-experience-agency-india',
        },
        {
            id: 5,
            serviceTitle: 'PRODUCTION',
            serviceDescription:
                'Our full-service Production services handle everything—any format, any genre, any platform, any language. From the first draft to the final cut, we bring big ideas to life with punch, pace, and polish. No limits, no gaps—just end-to-end video magic, done right.',
            serviceAmblem: '/img/services/production_aset.svg',
            bgColor: ' #fddfdf ',
            textColor: ' #E5011C',
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
                className="bg-[#fd96ad]"
                type="ARTIFICIAL INTELLIGENCE (AI)"
                video={serviceVideos.ai.video}
                fullVideo={serviceVideos.ai.fullVideo}
                ctaText="Talk AI with us  "
                ctaLink="/contact"
                textColor='#FFFFFF'
                content={
                    <>
                        <h1 className="inline">Bowl your audience over with our AI-powered campaigns, content, ecommerce, experiences, social and more.
                            Let your brand leap into the present with our end to end AI solutions—concept, design, AI curation, AI development, AI training and more.

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
                        Artificial Intelligence applied for your brand
                    </div>
                }
                iconClassName="w-15 h-15"
                cards={capabilitiesAI}
            />
            <RedbangleWaySection
                title='How we craft inspiring AI solutions for your brand'
                data={redbanglewayAI}
                image={{
                    src: '/img/services/ai-process.gif',
                    alt: 'ai process',
                    width: '500',
                    height: '500',
                }}
            />
           
            {/* <FeaturedWorkSection posts={_posts} href="/work/featured" title="Work that brands and consumers loved"/> 
 <Testimonials
        title={'WHAT OUR CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
        type="semi"
      /> */}
            <div id="leap-explore">
                <ExploreMoreSection
                    type="think"
                    className="pt-7.5 md:pt-15 pb-15 md:pb-30"
                    cards={cards}
                />
            </div>
            {/* <GetUpdates/> */}
            <section className="bg-white py-12 md:py-24">
                <div className="container">
                    <div className="rb-row">
                        <div className="w-full md:w-5/12">
                            <div className="static md:sticky top-[100px]">
                                <h3 className="max-w-[250px] mb-8 text-title-md-tight font-everett text-rb-black">
                                    Frequently Asked Questions
                                </h3>
                                {/* <div className="text-[16px] md:text-[20px] leading-[1.5] text-rb-black/80">
                        For any queries please contact us at{' '}
                        <a className="text-rb-red" href="mailto:hello@redbangle.com">
                          hello@redbangle.com
                        </a>
                      </div> */}
                            </div>
                        </div>
                        <div className="w-full md:w-7/12">
                      
                            <Accordion
                                data={TNC?.map((c) => ({
                                    key: `${c.key}`,
                                    heading: c?.title,
                                    content: c?.content,
                                }))}
                            />



                        </div>
                    </div>
                </div>
            </section>
            <Script id="schema" type="application/ld+json">
                {JSON.stringify(scsThinkSchema)}
            </Script>
        </>
    )
}
export default ServiceSCS
