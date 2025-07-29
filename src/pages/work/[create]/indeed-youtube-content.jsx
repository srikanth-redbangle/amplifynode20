import { SCSLayout } from '@/components/Layout'
import { Twitter, Linkedin } from '@/components/icons'
import {
  LineHeading,
  SEO,
  StatsSection,
  WorkHeroSection,
  Testimonials,
  RollupNumber,
} from '@/components/shared'

import { CommercialSection } from '@/components/pages/work'
import { useRouter } from 'next/router'
import styles from '@/styles/sections/StatsSection.module.scss'

export const similarPostsData = [
  {
    key: 0,
    name: 'An ode to the Security Personnel who Guard our Homes',
    company: 'MyGate',
    image: '/img/works/heros-mygate.jpg',
    alt: 'heros at mygate ad',
    tags: ['Digital Campaign', 'Video Content', 'B2C SAAS'],
    href: '/work/brand-campaign-agency-india/mygate-case-study',
  },
  {
    key: 1,
    name: "Campaign films: Season's EXTRA Earnings",
    company: 'Swiggy',
    image: '/img/works/Swiggy_NYE.png',
    alt: 'Swiggy NYE',
    tags: ['Digital Campaign', 'Ad Film', 'Quick Commerce'],
    href: '/work/brand-campaign-agency-india/swiggy-extra-earning-case-study',
  },
  {
    key: 2,
    name: 'Never sweat the first game Campaign Films',
    company: ' My 11 Circle',
    image: '/img/works/my-11-circle.jpg',
    alt: 'my 11 circle ',
    tags: ['Digital Campaign', 'Ad Film', 'Fantasy Games'],
    href: '/work/brand-campaign-agency-india/my11circle-case-study',
  },
]

const testimonialsDefault = [
  {
    key: 0,
    quote:
      'We partnered with Red Bangle to create video content for our internal campaigns. They get the brief to the tee, every time and deliver at lightning speed! They’re clued in on the latest trends and are always experimental and open to feedback. They’re an amazing lot to work with!',
    name: 'Lissa Smith',
    designation: 'Marketing Manager',
    company: 'FORTUNE 100 ITES ENTERPRISE',
    image: {
      srcSet:
        '/img/testimonials/fortune-100.webp 533w, /img/testimonials/fortune-100.webp 1066w',
      sizes: '(max-width:768px) 533px, 1066px',
    },
  },
]

const pageData = {
  logo: {
    src: '/img/logos/indeed.webp',
    alt: 'Xiaomi Redmi Buds 5C',
    width: '260',
    height: '105',
  },
  tags: ['Hiring Platform', 'YouTube Content'],
  image: '/img/case-study/indeed_youtube_content_banner_visual.png',
  featured: {
    src: '/img/works/ccs_2x.webp',
    width: '2880',
    height: '1544',
  },
  commercials: {
    type: 'video',
    sources: [
      {
        key: 0,
        duration: 15,
        vimeoId: '1094971279/384add2cc6',
        name: 'Organic Subscriber Growth for Indeed | Case Study',
        company: 'Indeed',
        thumbnail: {
          width: 642,
          height: 430,
          src: '/img/case-study/indeed_youtube_content_video_thumbnail.png',
        },
        // url: 'https://vimeo.com/1075654763/8a9b3f855b?share=copy',
      },
      {
        key: 1,
        duration: 15,
        vimeoId: '1095871951/98a0648924',
        name: 'Career Tip',
        company: 'Indeed',
        thumbnail: {
          width: 642,
          height: 430,
          src: '/img/case-study/indeed_career_tips.png',
        },
        // url: 'https://vimeo.com/1075654763/8a9b3f855b?share=copy',
      },
      {
        key: 2,
        duration: 15,
        vimeoId: '1095875469/84240b4698',
        name: 'Career Journey',
        company: 'Indeed',
        thumbnail: {
          width: 642,
          height: 430,
          src: '/img/case-study/career_journey.png',
        },
        // url: 'https://vimeo.com/1075654763/8a9b3f855b?share=copy',
      },
      {
        key: 3,
        duration: 15,
        vimeoId: '1095887302/c522702854',
        name: 'Product Overview',
        company: 'Indeed',
        thumbnail: {
          width: 642,
          height: 430,
          src: '/img/case-study/indeed_product_overview.png',
        },
        // url: 'https://vimeo.com/1075654763/8a9b3f855b?share=copy',
      },
    ],
  },
}

const stats = [
  {
    id: 0,
    countUpProps: {
      value: 2,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: (
      <span className="md:max-w-[188px]">
        hours watch <br />
        time
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 1.32,
      suffix: (
        <div className="inline-flex">
          M<span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: <>total reach</>,
  },
  {
    id: 2,
    countUpProps: {
      value: 220,
      suffix: (
        <div className="inline-flex">
          <span className="text-rb-red">%</span>
        </div>
      ),
    },
    text: (
      <>
        growth in <br />
        subscribers
      </>
    ),
  },
]

function IndeedYouTubeContent() {
  const router = useRouter()
  const fullUrl = `https://www.b2c.redbangle.com${router.asPath}`
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
        title="Case Study: Indeed YouTube Content | Red Bangle"
        description="Explore how Red Bangle, a holistic marketing communication & creative advertising agency, crafted an impactful creative advertising campaign for Metro Wholesale using b2c marketing campaign strategy."
      />
      <WorkHeroSection
        title={'220% Organic YouTube Subscriber Growth in India'}
        logo={logo}
        socials={socials}
        tags={tags}
        image={image}
      />
      <section className="bg-white overflow-hidden pb-15 md:pb-30">
        <div className="container">
          <div className="cs-content max-w-[914px]">
            <div className="mt-6">
              <LineHeading className="mb-6 md:mb-9">
                Background & Objective
              </LineHeading>
              <h3 className="mb-4 md:mb-6 md:!text-[32px] !text-black md:!leading-10 !tracking-normal !text-xl">
                India&apos;s Rising Demand for Light-Skilled Workers
              </h3>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                India’s light-skilled workforce is one of the country’s
                fastest-growing talent pools.
                <a
                  href="https://www.cnbctv18.com/education/blue-and-grey-collar-job-vacancies-see-4x-growth-in-2022-trend-to-continue-quesscorp-report-15603231.htm"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {' '}
                  Vacancies grew 4x{' '}
                </a>{' '}
                in 2022 alone, and by 2030,
                <a
                  href="https://economictimes.indiatimes.com/jobs/hr-policies-trends/blue-collar-jobs-to-drive-70-pc-of-indias-new-job-growth-by-2030-report/articleshow/109433609.cms?from=mdr"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {' '}
                  70% of all new jobs{' '}
                </a>
                in the country are expected to fall in this category. While
                demand for talent continues to rise, this segment of job seekers
                still lacks structured career support.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                India’s young light-skilled workforce needs better access to
                opportunities, practical career guidance, and reliable,
                easy-to-understand information. Indeed saw a clear opportunity:
                to become a helpful, trusted voice, and the hiring platform of
                choice for light-skilled job seekers across the country.
              </p>
              <h3 className="mb-4 md:mb-6 md:!text-[32px] !text-[20px] !text-black !tracking-normal">
                Why YouTube{' '}
              </h3>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                <a
                  href="https://kstatic.googleusercontent.com/files/45fedbf71b2dd6e7a59b4990a731b6b8067a434accfdc9c6c15df18177e63b4a2f454fe1a165ca47b78412325386c1a101d950355e4811d5e09cb363cb9f3d77"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                > {' '} 59% of Indian job seekers {' '}
                </a>
                  
                use YouTube to build new skills, and 63% rely on it to learn practical,
                hands-on tasks. For light-skilled workers, YouTube is a default
                learning space.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                This behaviour made the platform a natural choice for what
                Indeed set out to do: connect with this audience early in their
                journey, offer them useful content, and do it in a way that felt
                relatable - through Hinglish-first videos.
              </p>
              <h3 className="mb-4 md:mb-6 md:!text-[32px] !text-[20px] !text-black !tracking-normal">
                The Brief
              </h3>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The client’s brief to us was sharp: grow Indeed India’s YouTube
                channel by 10,000 new subscribers through a mix of long-form
                videos and Shorts, and drive relevant traffic to the job
                platform.
              </p>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">Strategy</LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                The starting point was to understand the audience deeply. We
                studied how light skilled workers use YouTube - what they watch,
                how they search, when they engage - and paired that with
                competitive mapping and keyword research to get a holistic
                understanding of the space.
              </p>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                From there, we laid down the foundations:
              </p>
              <ol className="list-decimal ml-10 space-y-4 mb-[30px]">
                <li className="font-opensans text-[20px] text-rb-black/80 leading-[28px] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-[-0.5px] !mb-7.5 pl-2">
                  What kind of content would cut through?
                </li>
                <li className="font-opensans text-[20px] text-rb-black/80 leading-[28px] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-[-0.5px] !mb-7.5 pl-2">
                  What gaps existed in the category?
                </li>
                <li className="font-opensans text-[20px] text-rb-black/80 leading-[28px] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-[-0.5px] !mb-7.5 pl-2">
                  How do we make videos that are easy to find and rank well on
                  search?
                </li>
              </ol>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                This led to 12 months of content creation backed by audience
                affinity, YouTube SEO, and content discoverability.
              </p>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">
                Creative Approach
              </LineHeading>

              <div className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                  We crafted three content formats designed to drive engagement
                  and build long-term value for the channel:
                </p>
                <ol className="list-decimal ml-10 space-y-4 mb-[30px]">
                  <li className="font-opensans text-[20px] text-rb-black/80 leading-[28px] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-[-0.5px] !mb-7.5 pl-2">
                    <a
                      href="https://www.youtube.com/watch?v=maBibk9EFmQ&list=PLcvQzcJ5HTR7146Jx-YOCnzl8QTgaB_95&index=1"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Career Tips{' '}
                    </a>
                    – crisp, practical advice to help job seekers overcome
                    common challenges across different job profiles and take the
                    next step with confidence.
                  </li>
                  <li className="font-opensans text-[20px] text-rb-black/80 leading-[28px] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-[-0.5px] md:!mt-0 !mb-7.5  pl-2">
                    <a
                      href="https://www.youtube.com/watch?v=tYgJnlta2TI&list=PLcvQzcJ5HTR58s0RMrdutB7B4QWmHdjmP&index=1"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Career Journeys{' '}
                    </a>
                    – real stories that gave viewers a window into different
                    professions and what growth actually looks like.
                  </li>
                  <li className="font-opensans text-[20px] text-rb-black/80 leading-[28px] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-[-0.5px] md:!mt-0 !mb-7.5 pl-2">
                    <a
                      href="https://www.youtube.com/playlist?list=PLcvQzcJ5HTR6QUX5L-LQhvAizx4rjLUIp"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      App How-Tos{' '}
                    </a>
                    – quick, focused Youtube Shorts that showed how to use
                    Indeed’s features to find relevant jobs, faster.
                  </li>
                </ol>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                  To strengthen brand recall, we built the content around two
                  thematic series:{' '}
                  <span class="font-bold italic">
                    Shuruvaat kar Indeed Par{' '}
                  </span>
                  and <span class="font-bold italic">Career ki baat</span>,
                  <span class="font-bold italic"> Indeed ke saath</span>. These
                  recurring hooks helped create familiarity while reinforcing
                  Indeed’s role as a trusted career guide.
                </p>
                <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                  We also looked at the channel as a connected ecosystem. Topics
                  were cross-referenced across formats to encourage longer watch
                  times and better discovery. Throughout, we kept the brand
                  consistent. The tone stayed friendly and grounded, while the
                  visual identity remained clean and recognisable.
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-20">
              <LineHeading className="mb-6 md:mb-9">Execution</LineHeading>

              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We developed a system that balanced consistency with
                flexibility: a clear roadmap, a scalable format mix, and the
                agility to respond to what the audience was engaging with.
              </p>
              <p className="text-base md:text-2xl text-rb-black/80 !leading-[150%] mb-[30px]">
                We delivered 111 videos, including Shorts, all anchored in the
                brand’s voice and audience needs.
              </p>
            </div>
          </div>
        </div>

        {/* <StatsSection
          tag=" Impact"
          className="mt-6 md:mt-20 pb-0 md:pb-2"
          data={stats}
        /> */}
        <section
          className={`bg-white overflow-hidden mt-6 md:mt-20`}
        >
          <div className="container px-0 md:block hidden">
            <LineHeading className="mb-6 md:mb-7.5">IMPACT</LineHeading>
            <div className="grid lg:flex grid-cols-1 gap-x-5 md:gap-x-[240px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none">
              {stats.map((s, i) => (
                <div
                  className={`text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline} after:visible after:right-[-110px]`}
                  key={s.id}
                >
                  <div className={`${i === 2 ? 'lg:ml-auto lg:mr-0' : ''}`}>
                    <div className="flex items-center gap-2 lg:block lg:w-fit">
                      <RollupNumber {...s.countUpProps} />
                      <div
                        className={`text-sm lg:mt-4 lg:ml-0 leading-[15.54px] md:text-2xl md:leading-7 tracking-[-.56px] md:tracking-[-0.96px] text-rb-black ${
                          s.id === 1 ? 'mt-[21px]' : 'mt-[5px]'
                        } md:mt-4 font-medium font-everett
                      ${s.id === 0 ? 'ml-[113px]' : ''}
                      ${s.id === 1 ? 'ml-[28px]' : ''}
                      ${s.id === 2 ? 'ml-[65px]' : ''}`}
                      >
                        {s.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container md:hidden block">
            <LineHeading className="mb-6 md:mb-7.5">IMPACT</LineHeading>
            <div className="flex flex-col lg:flex lg:flex-row grid-cols-2 md:justify-start lg:relative lg:right-16 gap-x-5 md:gap-x-[124px] gap-y-8 md:gap-y-6 max-w-full md:max-w-none">
              {stats.map((s, i) => (
                <div
                  className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.caseline}`}
                  key={s.id}
                >
                  <div
                    className={`lg:w-fit flex lg:flex lg:flex-col lg:mx-auto ${
                      s.id === 1 ? 'md:!ml-12' : ''
                    } ${s.id === 0 ? 'md:!ml-32' : ''} ${
                      s.id === 2 ? 'md:!ml-12' : ''
                    }`}
                  >
                    <div>
                      <RollupNumber
                        {...s.countUpProps}
                        className="font-medium !tracking-[-0.768px]"
                      />
                    </div>
                    <div
                      className={`text-[14px] lg:mt-0 lg:ml-0 leading-[15.54px] md:text-2xl md:leading-7 tracking-[-0.56px] md:tracking-[-0.96px] text-rb-black ${
                        s.id === 1 ? 'mt-7' : 'mt-4'
                      } md:mt-4 font-medium font-everett
                      ${s.id === 0 ? 'ml-[105px]' : ''}
                      ${s.id === 1 ? 'ml-[20px]' : ''}
                      ${s.id === 2 ? 'ml-[57px]' : ''}
                      `}
                    >
                      {s.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CommercialSection
          sources={commercials?.sources}
          type={commercials?.type}
        />
        </section>

        

        {/* <Testimonials
          title={'WHAT OUR CLIENTS SAY'}
          className="py-7.5 md:py-15"
          testimonialData={testimonialsDefault}
          type="semi"
        /> */}
      </section>

      {/* <SimilarPosts
        tag="EXPLORE MORE CASE STUDIES"
        className="py-15 md:pb-30"
        posts={similarPostsData}
      /> */}
    </>
  )
}
IndeedYouTubeContent.PageLayout = SCSLayout
export default IndeedYouTubeContent
