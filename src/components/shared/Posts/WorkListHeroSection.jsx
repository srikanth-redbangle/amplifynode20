import { Marquee } from '../Marquee'

export const WorkListHeroSection = ({
  type,
  content,
  className = '',
  contentClassName = '',
  pillImg,
  typeTwo,
  alt='',
  multipleClasses='',
  duration=20
}) => {
  return (
    <section
      className={`py-14 md:py-23 text-white overflow-hidden ${className}`}
    >
      <div className="hidden">{type}</div>
      <Marquee duration={duration}>
        <div className={`flex items-center uppercase text-[48px] leading-none md:text-[120px] mr-6 md:mr-10 font-medium ${type === 'WORK SHOWCASE' ? 'cap-trim  !tracking-[-1.92px] font-everett md:leading-[112px]':' md:leading-[148px] '}`}>
          {type}
          <img
            className={`max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10  relative bottom-[5px] md:bottom-[4px]
 ${multipleClasses}`}
            src={pillImg ? pillImg : '/img/pill-marq.webp'}
            width="562"
            height="210"
            alt={alt||'ad for pill production company'}
          />
        </div>
        {typeTwo ? (
 <div className={`flex items-center uppercase text-[48px] leading-none md:text-[120px] mr-6 md:mr-10 font-medium ${type === 'WORK SHOWCASE' ? 'cap-trim !tracking-[-1.92px] font-everett md:leading-[112px]':' md:leading-[148px]'}`}>
            {typeTwo}
            <img
              className={`max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 relative bottom-[5px] md:bottom-[4px]
 ${multipleClasses}`}
              src={pillImg ? pillImg : '/img/pill-marq.webp'}
              width="562"
              height="210"
              alt="pill marq"
            />
          </div>
        ) : (
          ''
        )}
      </Marquee>
      <div className="container">
        <div
          className={`w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 ${contentClassName}`}
        >
          {content}
        </div>
      </div>
    </section>
  )
}
