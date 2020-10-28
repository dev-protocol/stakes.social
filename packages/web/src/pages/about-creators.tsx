import React, { Fragment } from 'react'
import styled, { CSSProperties } from 'styled-components'
import { Col, Row, Card } from 'antd'
import { Header } from 'src/components/organisms/Header'
import { Footer } from '../components/organisms/Footer/index'
import Meta from 'antd/lib/card/Meta'
import { useEffectAsync } from 'src/fixtures/utility'
import { Twitter, Discord, Telegram, Spectrum, Medium } from '../components/atoms/SocialButtons/index'

const hColor = '#ff1493'
const primaryColor = '#5E81F4'
const centerAlign = {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)'
} as CSSProperties

const Article = styled.article`
  background-color: #0f0f0f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%23551a5e'/%3E%3Cstop offset='1' stop-color='%23360518'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(197,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23440728'/%3E%3Cstop offset='1' stop-color='%231a1030'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;

  section {
    background: white;
  }

  .animateAll {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .ant-row {
    max-width: 1300px;
    margin: auto;
    text-align: left;
    padding: 5%;
  }

  h3 {
    color: ${hColor};
    font-size: 1.9rem;
    text-align: center;
    width: 100%;
    margin-bottom: 2.5rem;
  }

  .howTo {
    .ant-col {
      padding: 10px;
    }

    .ant-card {
      background: #ffffff;
      box-shadow: -15px 40px 100px rgba(66, 0, 255, 0.04), -20px 40px 100px rgba(88, 92, 98, 0.04);
      border-radius: 30px;
      border: 0px solid;

      img {
        width: 128px;
        margin: auto;
      }

      .ant-card-cover {
        padding: 2rem;
        background: #fff0ed;
        border-radius: 28px;
        height: 180px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
      }

      .ant-card-meta-description {
        height: 140px;
      }

      .ant-card-meta-title {
        text-overflow: unset;
        height: 50px;
        white-space: break-spaces;
      }
    }
  }
`

const Head = styled.div`
  height: 100vh;
  color: white;

  h1 {
    font-size: 2rem;
    text-align: left;
  }

  p {
    font-size: 1.1rem;
    max-width: 500px;
  }

  img {
    width: 100%;
    max-width: 430px;
  }
`

const Title = styled.h1`
  text-align: center;
  color: ${hColor};
`
const TextSection = styled.section`
  padding: 1rem 0;
  .ant-row {
    max-width: 900px;
    margin: auto;
  }
`
const Section = styled.section`
  img {
    width: 100%;
  }

  .text-panel {
    padding: 25px 10%;
  }

  h1 {
    text-align: left;
    margin-bottom: 20px;
    color: ${primaryColor};
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .hideOnSmall {
      display: none;
    }
  }
`

const ThinButton = styled.a`
  margin: auto;
  margin-top: 40px;
  background: #ffffff;
  border: 2px solid #5e81f4;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  height: 50px;
  color: ${primaryColor};
  padding: 0.8rem;
  cursor: pointer;
  line-height: 20px;
`

const FButton = styled.a`
  background: ${primaryColor};
  margin: auto;
  margin-top: 40px;
  border: 2px solid #5e81f4;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  height: 50px;
  color: white;
  display: inline-block;
  padding: 0.8rem;
  cursor: pointer;
  line-height: 0px;
  box-shadow: 1px 1px 6px 2px rgb(94 129 244 / 0.7);
  margin-right: 20px;
  width: 140px;
  text-align: center;
  line-height: 20px;

  :hover {
    background: #1048ff;
    border: 2px solid #1048ff;
  }
`
const grayBtn = {
  background: 'lightgray',
  boxShadow: '0px 0px 0px',
  border: '0px',
  color: '#383838'
} as CSSProperties

const metaMaskBtn = {
  height: '35px',
  marginTop: '10px',
  padding: '5px',
  display: 'block',
  textAlign: 'center',
  lineHeight: '15px'
} as CSSProperties

const BASE_IMGURL = 'https://github.com/dev-protocol/asset.stakes.social/blob/main/public/about-creators/'

const AboutCreator = () => {
  useEffectAsync(async () => {
    const imgs = document.querySelectorAll('img')

    imgs.forEach(imgElement => {
      imgElement.classList.add('animateAll')

      const options = {
        root: null,
        rootMargin: '50px',
        threshold: 1
      }

      // Construct Intersection Observer.
      const observer = new IntersectionObserver(entries => {
        let observedImg: any = entries[0]

        if (!observedImg) {
          return
        }

        !observedImg.isIntersecting
          ? (observedImg.target.style.transform = 'translate3d(0, -20%, 0)')
          : (observedImg.target.style.transform = ' translate3d(0, 0, 0)')
        !observedImg.isIntersecting ? (observedImg.target.style.opacity = 0) : (observedImg.target.style.opacity = 1)
      }, options)

      if (imgElement) {
        observer.observe(imgElement)
      }
    })
  }, [])

  return (
    <>
      <main>
        <Header />
        <Article>
          <Head>
            <Row style={centerAlign}>
              <Col style={{ marginBottom: '20px' }} sm={{ span: 24 }} md={{ span: 12 }}>
                <Title>Make Creative Work Sustainable!</Title>
                <p>
                  Stakes.social is the easiest way in the world to authenticate your open assets on the blockchain and
                  earn revenue. Open assets can be anything from open source software, Youtube videos, or Spotify music.
                </p>
                <FButton href="https://stakes.social/auth">Get started now!</FButton>
                <FButton href="#works" style={grayBtn}>
                  How it works?
                </FButton>
              </Col>

              <Col sm={{ span: 24 }} md={{ span: 12 }} style={{ padding: '20px' }}>
                <img src={`${BASE_IMGURL}about_creative.png?raw=true`} />
              </Col>
            </Row>
          </Head>

          <TextSection>
            <Row>
              <h3>Why Stakes.social?</h3>
              <div>
                Today, creators don’t capture the value they create and rely on infrequent donations. Stakes.social’s
                solution allows for both creators and supporters to simultaneously earn money for supporting each other.
                The result is a highly sustainable economy for creators.
              </div>
              <ThinButton href="https://stakes.social/auth">Start Monetizing Now!</ThinButton>
            </Row>
          </TextSection>

          <TextSection>
            <Row>
              <h3>How it works?</h3>
              <div>
                Stakes.social allows creators to authenticate their assets on the blockchain. Creator’s assets are then
                put into an asset pool where supporters can stake DEV tokens. When DEV tokens are staked in the asset
                pool new DEV tokens are minted as a reward for the creator and supporter. Both parties are rewarded
                based on the current interest rates. Everyone wins with staking!
              </div>
            </Row>
          </TextSection>

          <Section>
            <Row>
              <h3 style={{ margin: '4rem 0px' }}>Stakes.social Features</h3>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <img src={`${BASE_IMGURL}about_earn.png?raw=true`} />
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div style={centerAlign}>
                  <div className="text-panel">
                    <Title>Earn revenue</Title>
                    You and your supporters earn revenue by staking DEV tokens in an asset pool.
                  </div>
                </div>
              </Col>
            </Row>
          </Section>

          <Section>
            <Row>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div style={centerAlign}>
                  <div className="text-panel">
                    <Title>Manage assets</Title>
                    You can tokenize your software, social media accounts, art, and more. You own the asset token
                    (ERC20) and have full control over them.
                  </div>
                </div>
              </Col>
              <Col className="hideOnSmall" sm={{ span: 24 }} md={{ span: 12 }}>
                <img src={`${BASE_IMGURL}about_manage.png?raw=true`} />
              </Col>
            </Row>
          </Section>

          <Section>
            <Row>
              <Col className="hideOnSmall" sm={{ span: 24 }} md={{ span: 12 }}>
                <img src={`${BASE_IMGURL}about_share.png?raw=true`} />
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div style={centerAlign}>
                  <div className="text-panel">
                    <Title>Share revenue</Title>
                    You can share the asset token with collaborators, rights-sharers, and investors to automatically
                    distribute the rewards. Its your choice who receives the asset token.
                  </div>
                </div>
              </Col>
            </Row>
          </Section>

          <Section style={{ background: '#B4E2EF' }}>
            <Row>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div>
                  <h1
                    style={{
                      color: 'white',
                      fontSize: '2rem'
                    }}
                  >
                    Are You Ready To Authenticate Your Assets?
                  </h1>
                  <FButton>Create an asset!</FButton>
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }} sm={{ span: 24 }} md={{ span: 12 }}>
                <img style={{ width: '312px' }} src={`${BASE_IMGURL}about_cubic.png?raw=true`} />
              </Col>
            </Row>
          </Section>

          <Section id="works">
            <Row className="howTo" style={{ maxWidth: '1000px' }}>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="example" src={`${BASE_IMGURL}about_how_build.png?raw=true`} />}
                >
                  <Meta
                    title="Create an asset on Stakes.social"
                    description={
                      <Fragment>
                        <span>
                          {' '}
                          Connect your wallet, authenticate, and name your asset. (Dont have a crypto wallet yet?){' '}
                        </span>
                        <ThinButton href="https://metamask.io/" style={metaMaskBtn}>
                          {' '}
                          Metamask is easy!
                        </ThinButton>
                      </Fragment>
                    }
                  />
                </Card>
              </Col>
              <Col style={{}} sm={{ span: 24 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="example" src={`${BASE_IMGURL}about_how_share.png?raw=true`} />}
                >
                  <Meta
                    title="Share it with your community!"
                    description="Share your asset pool link to your community and have them stake DEV tokens. "
                  />
                </Card>
              </Col>
              <Col style={{}} sm={{ span: 24 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="example" src={`${BASE_IMGURL}about_how_earn.png?raw=true`} />}
                >
                  <Meta
                    title="Withdraw rewards and manage them."
                    description="You can withdraw creator rewards anytime and sell some on uniswap. 
                  Or stake your rewards in other creators to earn even more."
                  />
                </Card>
              </Col>
            </Row>
          </Section>

          <Section style={{ background: '#EBF2F8' }}>
            <Row>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <img src={`${BASE_IMGURL}about_organize.png?raw=true`} />
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div>
                  <div className="text-panel">
                    <Title style={{ fontSize: '1.8rem' }}>Organizations in need of help with COVID-19</Title>
                    <div>
                      Stakes.social offers a sustainable option compared to donations. Contact the Dev Protocol team to
                      discuss how we can help your organization with your cause.
                    </div>
                    <FButton href="https://devprtcl.com/">Contact Us!</FButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Section>

          <TextSection>
            <Row>
              <img
                style={{ margin: 'auto', marginBottom: '40px', maxWidth: '500px', width: '100%' }}
                src={`${BASE_IMGURL}about_connect.png?raw=true`}
              />

              <h3>Connect with us.</h3>
              <div>
                Stakes.social is the first app created by the Dev Protocol team. To stay up to date with our progress
                join our community!
              </div>
            </Row>
          </TextSection>

          <Section>
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <Discord />
              <Telegram />
              <Medium />
              <Spectrum />
              <Twitter />
            </div>
          </Section>

          <Section style={{ background: 'transparent' }}>
            <Row>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <div style={centerAlign}>
                  <div style={{ color: 'white' }}>
                    <h3 style={{ textAlign: 'left', fontSize: '2rem' }}>Join us</h3>
                    Stakes.social helps your community grow. Let’s keep your creative activity going.
                  </div>
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }} sm={{ span: 24 }} md={{ span: 14 }}>
                <img style={{ maxWidth: '356px' }} src={`${BASE_IMGURL}about_join.png?raw=true`} />
              </Col>
            </Row>
          </Section>
        </Article>
        <Footer />
      </main>
    </>
  )
}

export default AboutCreator
