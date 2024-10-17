import { colleagueReviews } from '../constants'

const Testimonials = () => {
  return (
    <section id="testimonials" className="c-space my-20">
      <h3 className="head-text !leading-normal">Hear from My Colleagues</h3>

      <div className="testimonial-container">
        {colleagueReviews.map(({ id, name, position, review, link }) => (
          <div key={id} className="testimonial-review">
            <div>
              <div className="flex flex-col max-md:p-4 gap-4">
                <p className="text-white tracking-wide font-light">{review}</p>
                <a
                  className="text-green-200 hover:text-green-400 transition-colors text-sm cursor-pointer underline underline-offset-2"
                  href={link}
                  target="_blank"
                >
                  See full Recommendation
                </a>
              </div>

              <div className="testimonial-content">
                <div className="flex gap-3">
                  <img
                    src="/assets/male-avatar.png"
                    alt={name}
                    className="w-12 h-12 object-contain bg-white-600 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-600 text-sm">{position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-4 h-4 opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
