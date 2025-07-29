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
    src: '/img/logos/xiaomi-logo.webp',
    alt: 'Xiaomi Redmi Buds 5C',
    width: '260',
    height: '105',
  },
  image: '/img/works/xiaomi-bread-trimmer-banner.webp',
    tags: [
      'Consumer Electronics', 'Ad Film', 'Digital Campaign', 'Product Launch Campaign'
    ],
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '867138400',
        name: 'Xiaomi Beard Trimmer 2C',
        company: 'Xiaomi',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/works/xiaomi-video-thumbnail-1.webp',
        },
      },
    
    ],
  },
}


function XiaomiBreadTrimmer() {
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
        title="Case Study: Xiaomi Beard Trimmer 2C"
        description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
      />
      <WorkHeroSection
        title={'A Trimmer Launch Campaign that’s as Sharp as the Product'}
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
         Using a cutting–edge suite of 3D animation tools, we created a stunning 3D billboard animation for Mumbai Indians that pushes creative boundaries. Set against the Gateway of India for amplified emotional recall, the animation elevates the logo as a bold, three–dimensional spectacle with photorealistic water simulations, and dynamic camera movements. Optimized for high–impact visibility, this innovation sets a new benchmark for immersive logo–led storytelling.
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
XiaomiBreadTrimmer.PageLayout = SCSLayout
export default XiaomiBreadTrimmer
