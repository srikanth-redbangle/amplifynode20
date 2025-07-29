import { aboutSchema } from '@/components/schema/about-schema'
import {
  Marquee,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import { AboutNewsRoom } from '@/components/shared/sections/ArticleSection/AboutNewsRoom'
// import  AboutNewsRoom  from '@/components/shared/sections/ArticleSection/AboutNewsRoom'
import Script from 'next/script'
import React from 'react'

const NewsRoom = () => {
  return (
    <>
      <SEO
        title="Red Bangle Press Room | News & Authored Articles"
        description="Read the latest articles, press mentions, and thought leadership pieces from Red Bangle’s experts. Stay informed on the growth of our brand solutions agency."
      />


      <section className="py-14 md:py-23  overflow-hidden bg-rb-mercury text-rb-black ">
        <Marquee duration={20}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
          NEWSROOM
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 rounded-[90px]"
              src="/img/news-room/newsroom_page_hero1.jpg"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
          NEWSROOM
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 rounded-[90px]"
              src="/img/news-room/newsroom_page_hero1.jpg"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
        </Marquee>
        <div className="container">
          {/* <div className="max-w-[1100px] w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 text-rb-black">
            We&apos;re a content agency with zero chill for the ordinary. We drive 
            brand growth armed with the power of an important question: WHY NOT? 
          </div> */}
        </div>
      </section>
     
      <div className="pb-30 pt-24">
        <AboutNewsRoom
        hideSubscribe
        lineheading="Latest Stories"
        heading="Media Highlights and Press Roundup"
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default NewsRoom
