import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
    SEO,
    Testimonials,
    WorkHeroSection,
    RollupNumber
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';


// const jewelsTestimonialData = [
//   {
//     key: 0,
//     quote:
//       'It has been a pleasure to work with the Red Bangle team. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
//     name: 'SHOBA NARAYAN',
//     designation: 'FOUNDER',
//     image: {
//       srcSet:
//         '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
//       sizes: '(max-width:768px) 533px, 1066px',
//     },
//   }
// ]

const pageData = {
    logo: {
        src: '/img/logos/tata-logo.svg',
        alt: "tata motors",
        width: '300',
        height: '150',
    },
    image: '/img/works/women-at- Tata-autocomp-banner.webp',
    tags: [
        'Manufacturing', 'Employer Branding', 'Corporate Communication', 'Diversity & Inclusion'
    ],
    commercials: {
        type: 'video',
        sources: [
            {
                key: 0,
                duration: 15,
                vimeoId: '867137618',
                name: 'Women at Tata Autocomp Systems',
                company: 'Tata Motors',
                thumbnail: {
                    width: 446,
                    height: 265,
                    src: '/img/works/womens-at-tata-autocamp-video-thumbnail.webp',
                },
            },

        ],
    },
}


function TataMotors() {
    const router = useRouter();
    const fullUrl = `https://www.b2c.redbangle.com${router.asPath}`;
    const { logo, tags, commercials, desktopVideo, mobileVideo, image } = pageData
    const socials = [
        {
            key: 0,
            href: `https://twitter.com/intent/tweet?text=${fullUrl}`,
            color: '#000',
            icon: <Twitter />,
        },

        {
            type: 'linkedin',
            key: 1,
            href: fullUrl,
            color: '#006699',
            icon: <Linkedin />,
        },
    ]
    return (
        <>
            <SEO
                title="Case Study: Women at Tata Autocomp"
                description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
            />
            <WorkHeroSection
                title={"Celebrating Rural Women in India's Auto Manufacturing"}
                logo={logo}
                socials={socials}
                tags={tags}
                desktopVideo={desktopVideo}
                mobileVideo={mobileVideo}
                image={image}
            />
        <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
                <div className="container ">
                    <div className="cs-content max-w-[914px]">
                        <div className="mt-6 ">


                            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                                This film celebrates TATA AutoComp’s commitment to empowering and including rural Indian women in the automotive sector. We capture inspiring stories from the factory floor and the villages around Pune - highlighting the mothers who encouraged their daughters to go to school, the daughters who braved working in the city - far from their villages, and the young working women who now inspire a whole generation of girls to aspire for careers even in otherwise male-dominated sectors.
                            </p>



                        </div>

                    </div>
                </div>




                <CommercialSection
                    sources={commercials?.sources}
                    type={commercials?.type}
                />
                {/* <Testimonials
          title={'WHAT OUR CLIENT SAYS'}
          testimonialData={jewelsTestimonialData}
          className="pt-14 md:pt-24 md:pb-30 pb-16"
        /> */}
            </section>

        </>
    )
}
TataMotors.PageLayout = SCSLayout
export default TataMotors
