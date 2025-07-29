import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { schemaccsCreate } from '@/components/schema/ccs-create-schema'
import { LineArrow } from '@/components/icons'
import { TrustedBrandsSection, WorkListHeroSection } from '@/components/shared'
import { Marquee } from '@/components/shared'

import { ContentPostCard } from '@/components/shared/Cards'
import { SEO } from '@/components/shared/SEO'

import { workPosts } from '@/utils/dummy'
import { Button } from '@/components/ui'
import Script from 'next/script'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export default function CCS({ selectedvalue = 'featured' }) {
  const router = useRouter()
  const _posts = workPosts

  const [visiblePosts, setVisiblePosts] = useState(6)

  const scrollRef = React.useRef(null)
  const [atLeftEnd, setAtLeftEnd] = useState(true)
  const [atRightEnd, setAtRightEnd] = useState(false)

  const handleTagClick = (tag) => {
    setSelectedTag(tag)
    // router.push(
    //   {
    //     pathname: '/work',
    //     query: { work: tag }, // changed 'tab' to 'work'
    //   },
    //   undefined,
    //   { shallow: true }
    // );
    router.push(`/work/${tag}`, undefined, { shallow: true })
  }

  useEffect(() => {
    const { work } = router.query // changed 'tab' to 'work'
    if (
      typeof work === 'string' &&
      caseStudyTags.some((tag) => tag.url === work)
    ) {
      setSelectedTag(work)
    }
  }, [router.query])

  useEffect(() => {
    const checkScroll = () => {
      const el = scrollRef.current
      if (!el) return
      setAtLeftEnd(el.scrollLeft === 0)
      setAtRightEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth)
    }

    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      checkScroll() // Initial check
    }

    return () => {
      if (el) el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (selectedvalue) {
      setSelectedTag(selectedvalue)
      setVisiblePosts(6);
    }
  }, [selectedvalue])

  const [selectedTag, setSelectedTag] = useState(selectedvalue)
  // const caseStudyTags = ['featured', 'content','campaign','design', 'experience ','integrated', ]

  const caseStudyTags = [
    {
      name: 'featured',
      url: 'featured',
    },
    {
      name: 'design',
      url: 'brand-design-agency-india',
    },
    {
      name: 'campaign',
      url: 'brand-campaign-agency-india',
    },
    {
      name: 'content',
      url: 'video-content-production-agency-india',
    },
    {
      name: 'experience',
      url: 'immersive-experience-agency-india',
    },
    {
      name: 'integrated',
      url: 'integrated-brand-campaign-agency-india',
    },
  ]
  const filteredPosts = _posts
    .filter((post) =>
      post.tabs
        ?.map((tab) => tab.toLowerCase())
        .includes(selectedTag.toLowerCase())
    )
    .slice(0, visiblePosts)
  return (
    <>
      <SEO
        title="Get Strategy, Creativity, technology and AI with Red Bangle"
        description="Check out featured work across brand strategy, design, campaigns, videos, AI Influencers, interactive experiences and more for B2C brands in India."
      />

      {/* <section className="py-14 md:py-23  overflow-hidden bg-rb-mercury text-rb-black "> */}
      <WorkListHeroSection
        className="!text-rb-black bg-rb-mercury md:py-24"
        type="WORK SHOWCASE"
        typeTwo="WORK SHOWCASE"
        // outlineClass="outline-text-scarlet"
        pillImg="/img/who-we-are/about-pill.webp"
        contentClassName="max-w-[1100px] w-full leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 cap-trim font-semibold md:!tracking-[-0.08rem] !tracking-[-0.56px] "
        content={
          <>
            Get big ideas, captivating design, technology magic and flawless
            production. We&apos;re the engine behind your brand&apos;s
            unstoppable ride to the top.
          </>
        }
        duration={45}
      />
      {/*       
    </section> */}
      {/* <section className="py-18 md:pt-23 md:pb-[162px] overflow-hidden bg-rb-mercury text-rb-black ">
                <Marquee duration={20}>
                    <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
                        WORK SHOWCASE

                        <img
                            className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
                            src="/img/who-we-are/about-pill.webp"
                            width="562"
                            height="210"
                            alt="about pill"
                        />
                    </div>
                    <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
                        WORK SHOWCASE

                        <img
                            className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
                            src="/img/who-we-are/about-pill-2.webp"
                            width="562"
                            height="210"
                            alt="about pill"
                        />
                    </div>


                </Marquee>
                <div className="container">
                    <div className="max-w-[1100px] w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-10 md:mt-18 text-rb-black font-semibold">
                        Get big ideas, captivating design, technology magic and flawless production. We&apos;re the engine behind your brand&apos;s unstoppable ride to the top.


                    </div>
                </div>

                <div className="container md:mt-16 mt-10">
                    <Button
                        href="/contact"
                        className="font-bold  w-full md:w-auto !inline-flex"
                        suffix={<LineArrow hover />}
                    >
                        Send a brief
                    </Button>

                </div>
            </section>

            <div style={{ display: 'none' }}>
                <h2>Creative Agency</h2>
                <h2>Creative Campaigns</h2>
                <h2>Brand Promotions</h2>
                <h2>Ad Campaigns</h2>
                <h2>Advertising Solutions</h2>
            </div> */}

      <div className="container relative bg-white">
        <div className="sticky top-0 bg-white z-[2] p-2 md:p-0 border-b border-gray-300  ">
          <div className="relative mt-0 py-[1.5rem] ">
            {/* Arrow buttons on top of tags
                {!atLeftEnd && (
                    <button
                        className="absolute -top-6   -left-2 z-10 text-rb-red md:hidden "
                        onClick={handleScrollLeft}
                    >
                        <FaArrowAltCircleLeft className="bg-white rounded-full text-2xl hover:scale-110 duration-700" />
                    </button>
                )}
                {!atRightEnd && (
                    <button
                        className="absolute -top-6 -right-2 z-10 text-rb-red md:hidden"
                        onClick={handleScrollRight}
                    >
                        <FaArrowAltCircleRight className="bg-white rounded-full text-2xl hover:scale-110 duration-700" />
                    </button>
                )} */}

            {/* Scrollable Tag List */}
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto overflow-y-hidden no-scrollbar md:justify-center md:gap-12 "
            >
              {caseStudyTags.map((tag) => (
                <a
                  key={tag.url}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTagClick(tag.url)
                  }}
                  href="#"
                  className={`inline-block align-top leading-[1] p-0 m-0 !mr-[9px] text-[32px] font-medium font-everett relative capitalize
    ${
      selectedTag === tag.url
        ? 'text-rb-red after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[7px]'
        : 'text-[#11101080] hover:text-rb-red'
    }`}
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 




                <div className="sticky top-0 bg-white z-[2] p-2 md:p-0 border-b border-gray-300  ">
                    <div className="relative mt-12">


                        {!atLeftEnd && (
                            <button
                                className="absolute -top-6   -left-2 z-10 text-rb-red md:hidden "
                                onClick={handleScrollLeft}
                            >
                                <FaArrowAltCircleLeft className="bg-white rounded-full text-2xl hover:scale-110 duration-700" />
                            </button>
                        )}
                        {!atRightEnd && (
                            <button
                                className="absolute -top-6 -right-2 z-10 text-rb-red md:hidden"
                                onClick={handleScrollRight}
                            >
                                <FaArrowAltCircleRight className="bg-white rounded-full text-2xl hover:scale-110 duration-700" />
                            </button>
                        )}

                    
                       <div
  ref={scrollRef}
  className="flex gap-3 mt-6 overflow-x-auto overflow-y-hidden no-scrollbar md:justify-center md:gap-8  "
>
                            {caseStudyTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={`!mr-[9px] !text-[32px] font-medium font-everett relative pb-[10px] capitalize
                                    ${selectedTag === tag
                                            ? 'text-rb-red after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[7px] after:bg-red-600 content-[""]'
                                            : 'text-[#11101080] hover:text-rb-red'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div> */}

        <div className="container">
          <div className="grid grid-cols-1  md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24 mt-16 md:mt-18">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((p) => (
                <ContentPostCard
                  key={p.key}
                  href={`/work/${selectedTag}/${p.case_study_title}`}
                  {...p}
                  page="work"
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No case studies available for &ldquo;{selectedTag}&ldquo;
              </p>
            )}
          </div>
        </div>
        {filteredPosts.length > 0 && (
          <div className="text-center">
            {(() => {
              const filteredLength =
                selectedTag === ''
                  ? _posts.length
                  : _posts.filter((post) =>
                      post.tabs
                        ?.map((tab) => tab.toLowerCase())
                        .includes(selectedTag.toLowerCase())
                    ).length

              if (filteredLength > 6 && visiblePosts < filteredLength) {
                return (
                  <Button
                    className="w-fit mx-auto mt-[30px] md:mt-15 focus:outline-none"
                    onClick={() => setVisiblePosts((prev) => prev + 6)}
                    suffix={<LineArrow />}
                  >
                    SEE MORE
                  </Button>
                )
              } else if (filteredLength > 6 && visiblePosts >= filteredLength) {
                return (
                  <Button
                    className="w-fit mx-auto mt-[30px] md:mt-15 focus:outline-none"
                    onClick={() => setVisiblePosts(6)}
                    suffix={<LineArrow />}
                  >
                    SEE LESS
                  </Button>
                )
              }

              return null
            })()}
          </div>
        )}
      </div>

      <div id="create-brand">
        <TrustedBrandsSection
          className="bg-white pt-7.5 pb-15 md:pt-24 md:pb-30"
          heading="Our Clients"
        />
      </div>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaccsCreate)}
      </Script>
    </>
  )
}
