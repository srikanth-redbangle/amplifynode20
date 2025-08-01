import { TwitterShareButton, LinkedinShareButton } from 'react-share';

export const WorkHeroSection = ({
  logo,
  alt='',
  socials = [],
  tags = [],
  desktopVideo,
  mobileVideo,
  title = null,
  image = null,
}) => {
  const copyPageUrl = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href)
    const copyPopup = document.querySelector('.copy-link-popup')

    copyPopup.classList.add('show')

    setTimeout(() => {
      copyPopup.classList.remove('show')
    }, 2000)
  }

  return (
    <section className="bg-white pt-10 md:pt-16 pb-[1.875rem] overflow-hidden">
      <div className="container">
        <div className="rb-row md:mt-8.5 mb-12 md:mb-16">
          <div className="w-full md:w-9/12 text-2xl md:leading-9.5 text-rb-black/80">
            <img
              alt={alt||logo.alt||''}
              loading="lazy"
              {...logo}
              className="max-w-[160px] md:max-w-full"
            />
            <h1 className="text-black font-medium mt-6 uppercase text-3xl md:text-[54px] lg:leading-14 font-everett">{title}</h1>
            <div className="flex flex-wrap gap-2 mb-7.5 md:mb-0 mt-10 text-xs leading-5 font-semibold text-rb-black">
              {tags.map((t, i) => (
                <div
                  className={`inline-block px-3 py-1.5 md:px-4 md:py-2 border rounded-full border-rb-dune h-max`}
                  key={i}
                >
                  {t}
                </div>
              ))}
              {/* {tags?.length > 4 && (
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 border rounded-full border-rb-dune h-max md:hidden">
                  +{tags.length - 4}
                </div>
              )} */}
            </div>
          </div>
          <div className="w-full md:w-3/12 md:self-end">
            <div className="md:float-right">
              <div className="font-everett text-lg md:leading-6 font-medium mb-2 md:mb-3">
                Share:
              </div>
              <div className="flex gap-2 md:gap-4 flex-wrap relative">
                {socials.map(({ key, href, icon, color, type }) => (
                  <div key={key}>
                    {
                      href.includes('twitter') &&
                      <TwitterShareButton url={href}>
                        <a
                          data-rb-cursor-state="invisible"
                          href={href}
                          style={{ '--text-color': color }}
                          key={key}
                          className={`w-10 h-10 rounded-full overflow-hidden bg-white border border-rb-dune/80 text-rb-dune/80 hover:text-[var(--text-color)] hover:border-[var(--text-color)] transition-all grid place-content-center`}
                        >
                          {icon}
                        </a>
                      </TwitterShareButton>
                    }
                    {
                      type === 'linkedin' &&
                      <LinkedinShareButton url={href}>
                        <a
                          data-rb-cursor-state="invisible"
                          href={href}
                          style={{ '--text-color': color }}
                          key={key}
                          className={`w-10 h-10 rounded-full overflow-hidden bg-white border border-rb-dune/80 text-rb-dune/80 hover:text-[var(--text-color)] hover:border-[var(--text-color)] transition-all grid place-content-center`}
                        >
                          {icon}
                        </a>
                      </LinkedinShareButton>
                    }
                  </div>
                ))}

                <a
                  data-rb-cursor-state="invisible"
                  href=''
                  onClick={copyPageUrl}
                  className={`relative w-10 h-10 rounded-full overflow-hidden bg-white border border-rb-dune/80 text-rb-dune/80 hover:text-[var(--text-color)] hover:border-[var(--text-color)] transition-all grid place-content-center`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4.16797 12.5003H3.33464C2.89261 12.5003 2.46868 12.3247 2.15612 12.0122C1.84356 11.6996 1.66797 11.2757 1.66797 10.8337V3.33366C1.66797 2.89163 1.84356 2.46771 2.15612 2.15515C2.46868 1.84259 2.89261 1.66699 3.33464 1.66699H10.8346C11.2767 1.66699 11.7006 1.84259 12.0131 2.15515C12.3257 2.46771 12.5013 2.89163 12.5013 3.33366V4.16699M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z"
                      stroke="#5C5C5C"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <div className="copy-link-popup absolute bg-rb-black p-2 text-white text-xs rounded right-0 -bottom-12">
                  Link copied to clipboard
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          <>
            <div className={`relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)] md:w-full -mx-4 md:mx-0 ${!desktopVideo || !mobileVideo ? 'hidden' : ''}`}>
              <video
                autoPlay
                loop
                muted
                playsInline
                src={desktopVideo}
                className="w-full h-full md:h-auto object-cover hidden md:block"
              />
              <video
                autoPlay
                loop
                muted
                playsInline
                src={mobileVideo}
                className="w-full h-full md:h-auto object-cover block md:hidden"
              />
            </div>
            <div className={`relative aspect-auto md:aspect-auto w-[calc(100%_+_2rem)] md:w-full -mx-4 md:mx-0 ${!image ? 'hidden' : ''}`}>
              <img src={image} alt={alt} srcset=""/>
            </div>
          </>
        }
      </div>
    </section>
  )
}
