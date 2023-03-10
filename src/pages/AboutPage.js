import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            In 1979 our founder, started his business in the great outdoors,
            making tents in South Korea. Eventually, he moved style loft into
            the home and has provided mattresses ,decor and furniture for more
            than 25 million happy customers in over 15 countries around the
            world. We’re committed to helping everyone bring happiness home.
            That’s why style loft products are easy to afford, assemble, and
            enjoy. We design tiny reminders that life is good. From humble
            beginnings to over 25 million happy customers. Learn what makes
            Style Loft the right choice for your home.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
