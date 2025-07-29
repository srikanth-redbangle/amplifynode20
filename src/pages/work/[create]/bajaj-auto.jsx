import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  SimilarPosts,
  WorkHeroSection,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router';

export const similarPostsData = [
  {
    key: 0,
    name: 'An ode to the Security Personnel who Guard our Homes',
    company: 'MyGate',
    image: '/img/works/heros-mygate.jpg',
    alt:'heros at mygate ad',
    tags: ['Digital Campaign', 'Video Content', 'B2C SAAS'],
    href: '/work/case-study/mygate-case-study',
  },
  {
    key: 1,
    name: "Campaign films: Season's EXTRA Earnings",
    company: 'Swiggy',
    image: '/img/works/Swiggy_NYE.png',
    alt: 'Swiggy NYE',
   tags: ['Digital Campaign', 'Ad Film', 'Quick Commerce'],
    href: '/work/case-study/swiggy-extra-earning-case-study',
  },
  {
    key: 2,
    name: 'Never sweat the first game Campaign Films',
    company: ' My 11 Circle',
    image: '/img/works/my-11-circle.jpg',
    alt:'my 11 circle ',
     tags: ['Digital Campaign', 'Ad Film', 'Fantasy Games'],
    href: '/work/case-study/my11circle-case-study',
  },

]

const pageData = {
  logo: {
    src: '/img/logos/bajaj_logo.png',
    alt:'metro wholesale ad',
    width: '180px',
    height: '10px',
  },
  image: '/img/case-study/bajaj_pulsar_banner.webp',
  tags: ['Augmented Reality', 'Website Design and Development', 'Gamified Experience', 'Interactive Tech', 'Automotive'],
//   desktopVideo: '/img/works/metro-wholesale-big2.mp4',
//   mobileVideo: '/img/works/metro-wholesale.mp4',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
  commercials: {
    title: (
      <>
        Portfolio of video projects that&nbsp;elevated brands and exceeded
        client expectations.
      </>
    ),
    excerpt:
      'Unlock the full potential of your brand with our commercial adaptations. We combine innovative ideas, expert production, and strategic messaging to create captivating commercials that leave a lasting impression.',
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1050711781',
        name: 'AR powered Print AD for Bajaj Pulsar',
        company: 'Bajaj Auto',
        thumbnail: {
          width: 446,
          height: 265,
          src: '/img/case-study/bajaj_ppulsar.webp',
        },
      }
    ],
  },
}

function BajajAuto() {
 const router = useRouter();
 const fullUrl = `https://www.b2c.redbangle.com${router.asPath}`;
  const { logo, tags, commercials, image } = pageData
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
      title="Case Study: bajaj | Red Bangle" 
      />
      <WorkHeroSection
      title={'Augmented Reality that brought the automobile alive'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
      />
      <section className="bg-white overflow-hidden md:pb-[56px] pb-[36px]">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6">
            <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                To captivate a new generation of riders and breathe life into traditional 
                print advertising, Bajaj Pulsar embarked on an innovative campaign leveraging the power of AR.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[36px]">
                We transformed static print ads into immersive 3D experiences, allowing potential customers to explore powerful 
                features of the new NS 400Z in unprecedented detail.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%]">
                Built on a cutting&ndash;edge WebAR platform, this groundbreaking campaign eliminated the need
                for app downloads, ensuring seamless accessibility across devices. Through optimized 3D modeling,
                lighting, and responsive motion controls, we created an interactive experience that brought the 
                Pulsar to life, allowing users to examine every angle and appreciate its design intricacies from 
                the comfort of their own homes. This innovative approach not only elevated the brand experience but also provided a unique and engaging touchpoint for potential customers, driving deeper brand affinity and ultimately inspiring test rides.
              </p>
            </div>
          </div>
        </div>

        <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
      </section>

    </>
  )
}
BajajAuto.PageLayout = SCSLayout
export default BajajAuto
