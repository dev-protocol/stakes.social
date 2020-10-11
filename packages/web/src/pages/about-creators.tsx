import React, { Fragment } from 'react'
import styled, { CSSProperties } from 'styled-components'
import { Col, Row, Button, Card } from 'antd';
import { Header } from 'src/components/organisms/Header';
import { Footer } from '../components/organisms/Footer/index';
import Meta from 'antd/lib/card/Meta';
import { useEffectAsync } from 'src/fixtures/utility';

const hColor = '#e91e63'
const primaryColor = '#5E81F4'
const centerAlign = {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-65%)'
} as CSSProperties

const Article = styled.article`

  background-color: #0f0f0f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%23551a5e'/%3E%3Cstop offset='1' stop-color='%23360518'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(197,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23440728'/%3E%3Cstop offset='1' stop-color='%231a1030'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;

  section{
    background: white;
  }

  .animateAll{
      -webkit-transition: all .5s ease-in-out;
      -moz-transition: all .5s ease-in-out;
      -o-transition: all .5s ease-in-out;
      transition: all .5s ease-in-out;
  }

  .ant-row{
    max-width: 1300px;
    margin: auto;
    text-align: left;
    padding:5%;
  }

  h3{
    color:${ hColor };
    font-size: 1.9rem;
    text-align: center;
    width: 100%;
    margin-bottom: 2.5rem;
  }

  .howTo{
    .ant-col{
      padding: 10px;
    }

    .ant-card{
      background: #FFFFFF;
      box-shadow: -15px 40px 100px rgba(66, 0, 255, 0.04), -20px 40px 100px rgba(88, 92, 98, 0.04);
      border-radius: 30px;
      border: 0px solid;

      img{
        width: 128px;
        margin:auto;
      }

      .ant-card-cover {
        padding: 2rem;
        background: #FFF0ED;
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

  
  h1{
    font-size: 2rem;
    text-align: left;
  }

  p{
    font-size: 1.1rem;
    max-width: 500px;
  }

  img{
    width:100%;
    max-width:430px;
  }
`

const Title = styled.h1`
  text-align: center;
  color: ${ hColor };
`
const TextSection = styled.section`
  padding: 1rem 0;
  .ant-row{
    max-width: 900px;
    margin: auto;
  }
`
const Section = styled.section`

  img{
    width: 100%;
  }

  .text-panel{
    padding: 25px 10%;
  }

  h1{
    text-align: left;
    margin-bottom:20px;
    color: ${ primaryColor };
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .hideOnSmall{
      display: none;
    }
  }
`

const ThinButton = styled.button`
  margin: auto;
  margin-top: 40px;
  background: #FFFFFF;
  border: 2px solid #5E81F4;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  height: 50px;
  color: ${ primaryColor };
  padding: .8rem;
  cursor: pointer;
  line-height: 0px;
`

const FButton = styled.button`
  background: ${ primaryColor };
  margin: auto;
  margin-top: 40px;
  border: 2px solid #5E81F4;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  height: 50px;
  color: white;
  padding: .8rem;
  cursor: pointer;
  line-height: 0px;
  box-shadow: 1px 1px 6px 2px rgb(94 129 244 / 0.7);
  margin-right: 20px;
  width: 150px;

  :hover
  {
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

const SocialButton = styled.button`
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #6b6b6b;
  padding: 2px 1.4rem;
  cursor: pointer;
  box-shadow: -11px 3px 50px 2px #f4f4f4;

  svg{
    width: 26px;
  }

  span{
    vertical-align: top;
    line-height: 37px;
    font-size: 0.7rem;
    padding-left: 10px;
  }
`

const AboutCreator = () => {

  useEffectAsync(async () => {

    const imgs = document.querySelectorAll('img')

    imgs.forEach(imgElement => {

      imgElement.classList.add('animateAll')

      const options = {
        root: null,
        rootMargin: '10px',
        threshold: 1,
      };

      // Construct Intersection Observer.
      const observer = new IntersectionObserver((entries, observer) => {
        let observedImg: any = entries[0];

        if (!observedImg) {
          return;
        }

        !observedImg.isIntersecting ? observedImg.target.style.transform = 'translate3d(0, -20%, 0)' : observedImg.target.style.transform = ' translate3d(0, 0, 0)'
        !observedImg.isIntersecting ? observedImg.target.style.opacity = 0 : observedImg.target.style.opacity = 1
      }, options);

      if (imgElement) {
        observer.observe(imgElement);
      }
    });
  }, [])


  return (
    <>
      <main>
        <Header />
        <Article>

          <Head>
            <Row style={centerAlign}>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <Title>Make Creative Work Sustainable!</Title>
                <p>Stakes.social is the easiest way in the world to authenticate your open assets on the blockchain and earn revenue.
                Open assets can be anything from open source software, Youtube videos, or Spotify music.</p>
                <FButton>Get started now!</FButton>
                <FButton style={grayBtn}>How it works?</FButton>
              </Col>

              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <img src="https://lh3.googleusercontent.com/bOCnl8wlMjQ3e6FN72liAfD4m6Ah0eORv6nABI1gdhID-X_2L2Z7ivLuXlCtJxakHJXg21bn69jPexLDkGvt6jlWWeIFvoz7RhkH9AfGVxRf5Xk22IOF7aesnW92ZqNbrxHTNjI62YfbLMjrBF-Gd5tvI9VIeYSL8-ljVvGfgiaM3Q51hHVqcRBDQztOOIB5q57WBaeKw4Dg4T9XkREyDujLIDw0GwaYJZTFt77bdCODJfZbXG1i1q85CMM8d5WoCf1p0Uaa5aRiChFgAX8FixHHURmQeVThkADtOt-YnzjE-RmYCDno6jDe2dt1rWOM9macyh3Jn7fxmVIvJofmGudtvH6rbaBnaJAa7VnMOoqhPeqk-Cd5ddq1jhMbnLsHZu_NTnr2CrZlCpgdpafC6mNyGLUiv0hLQKsx6vQEMuSIClDD_kBhiGmxAOs8f7EEDn8QTR2rg0G-nP2WiVe2fGa5GbxrLKN7HzNk8xb-0q-2KgSvm-f95O3SR02mR_PNJkzRJ7TJon3bdoIsFAvD4cbXJNvxMHZvYPBKD-Ps1Idt54GpitQOex46qbfcw1ssPKVL20gSfb_9W86mFMt2ihvPmw-ze95PjEdHdK4zs9NZvg5CrtgUINcPswm4WvzEmpe_JeMpp6WSZADa2aFMspBei_MZCvxq5V6MMhWnJiPdP1wOzRSLYoX3l3k=w658-h361-no?authuser=0" />
              </Col>
            </Row>
          </Head>

          <TextSection>
            <Row>
              <h3>Why Stakes.social?</h3>
              <div>
                Today, creators don’t capture the value they create and rely on infrequent donations.
                Stakes.social’s solution allows for both creators and supporters to simultaneously earn money for supporting each other.
                The result is a highly sustainable economy for creators.
              </div>
              <ThinButton>Start Monetizing Now!</ThinButton>
            </Row>
          </TextSection>

          <TextSection>
            <Row>
              <h3>How it works?</h3>
              <div>
                Stakes.social allows creators to authenticate their assets on the blockchain.
                Creator’s assets are then put into an asset pool where supporters can stake DEV tokens.
                When DEV tokens are staked in the asset pool new DEV tokens are minted as a reward for the creator and supporter.
                Both parties are rewarded based on the current interest rates. Everyone wins with staking!
            </div>
            </Row>
          </TextSection>

          <Section>
            <Row>
              <h3 style={{ margin: '4rem 0px' }}>Stakes.social Features</h3>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <img src="https://lh3.googleusercontent.com/9wYtg_vdD2B1HSzc5W_7IXuIGZgW74oTKdJhRx5GOg3JMl8A7ITp0Z8jQQ607H1lbpRuBMLncG-4He6mQqFYzOjxxv8LElR7FqjStD3CA4eJ2D84poAtvudtNhf5s9V_t2mA1Zjl8CCHPwcQuGsbtw4UnvV9GSzijzERRIcTUxb_H7VZq0jC8-KOaMaNOb0XQdGUh7euiUbr5_7xAGiAU6XOQ2jupNgVgiZLYlKUzdmw8n97PYI3SUZMh5s-7466oRog4fHqji8dJI4Qe93wnlp6QxCIfZ631iun-qFaCRzPC8MtNjCz1GmQfL1bQZ8YXfNBq9EgEFW4sC3-JA8r2cCoZtOot855GhW1i_D2qeFEkyccG6c46uu4simwJCCshHIXujBBfmkk2BraAON61x4o2VFkvYf4CdF7MH45Je035SJrSOmICni5lrvqMcCPPwRebcNKx_pD2SKgZIEjWGNbRAh2j7uZW8XvgldN9eN_Umaer1-BKhDgMBI4D7-TKajlKs7l2RBiIa_OhzRoJAY87kShAYzsY65WvVEWq2naYBuBraUsdPm4gS2zSPaMn1C1-WCT6usnSmFrRXEEhCSfEGWcLhbFHZFZufaisy_Ymz3v9dVclFXhY6Fv8G1RHVnX64eI5Y3JMMvu__L0nZuUEBfpoXaZ8qyRuaK1PJSC0Sh-EiK2See6Pbo=w797-h497-no?authuser=0" />
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
                    You can tokenize your software, social media accounts, art, and more. You own the asset token (ERC20) and have full control over them.
                  </div>
                </div>
              </Col>
              <Col className="hideOnSmall" sm={{ span: 24 }} md={{ span: 12 }}>
                <img src="https://lh3.googleusercontent.com/sL5ivzmbRey72w4x_D7n7bW_psv9z7SESvoWM89EQod3vKB7OijzhLm4i3WaIN3jZhV38p4wkN_M3LCHHYc5XDBORaiLjI6KcuDj7hn0uJnqJzkXYLFacsDqirrzNMRpf0csGIHQ8D3ePzI8FWU8kV4H-3Bk9ITZoPabOEbrarRcCdIz4P7xFZW55wVzWiceb5K06bc8v2k_HuAj64BwPiMo6xxI_yLBE5K6bxF3o01Zes1dfz_x4fv_tCnO2EDW4ck3TuGhfUi7UR8HalL5fQkTzrdNH1K0UQ_2V1USWY3f6MmhcC1AMpusYkKun0feoDiaaOCqJFb3I_UXK44x5I4PmPz2SpZZOx7z3dIIHXE7gaziCAbZ03y4SeDk9byuRw1VbmPHHEyvgmIoKCUe4ikvQ30AqGz1aXeiu9sspweZwSgA4Iq1atuCyz7o54l4YsC-FRiaOM0-wflP4kirok8Av9HytdTXCShUhsK2pZ6Nkwxq9ZRC70gqdPYUe7Dp7EKxHj7plzUsjTX5Ay0J6Chg-qMrS-0Zl70eqwRAMgGiE-O0KjhU9UmAGA4csMf-GCJv2AqlpDA4ifF332_T3FssO5N3W0j8ZT32hFBYXwOs3fm_CCO9vUvrOmbFX_pYVEqNQOCsC2UwCYwbk3aeWxctM6YKfXvZfDII00uAcQOJWBqDpliu-JBHPk8=w685-h482-no?authuser=0" />
              </Col>
            </Row>
          </Section>

          <Section>
            <Row>
              <Col className="hideOnSmall" sm={{ span: 24 }} md={{ span: 12 }}>
                <img src="https://lh3.googleusercontent.com/YYgFj2D8ypvqj5Eq6g2bRPpnjQVPF_3FWuxY14vSPvMaDJ4N6vyTN2NXC4PM6jhzAT7dF90Yn4pnwWQOVEBMl8sq4o0O6cepG1dUiDqZcx2OSvAtZkYIV1nKZY7iiDllV2uAEQhRgV8CX5q-pvN6W-F4DRhPhtAOtoGQLv1iw6LEU7KX3Yh-R1TkP2pvC-b5EF2DMdMUjF7hfG9P4HLmDLDsswPWsbrZ2egQmEzHsYjIObR-cRVUsvfGeYZ9JkkWJXmjQwWQgD-Al651UxX-uI_cJtQECezijkVsbGdrDM6bIyGRCNWGOKe0bkos8ITDOWEg8poe6tvkef6Zi7P1ThDm4fPxST1syuHGYFsou9_DaZXtLRQtLEeKxPpJLsOHP8htiNe-1hlUjrKMkyWyBSV6kp1Jr9g_5CxrCRBwJ1d6nvZzcnmKrxLP7BlJfh569bOamX6i73tG1jbnYjQR1cSY_n_ZkO9V2DvsR2j846LFO8LgHrQ8DXIC0B163Vx5LmCFYyp6Rkve6d8rBWh6agriU2qqsVpgx5TNNYtgJx5lsA7EoC7TveWy5_uw4glZI-czq-RP-aqX_mBhazSdNyN9hERXNZvamOr-jw2XQaBvX8mmFgVn6aiYobX0Tqma088V0RxTIhcNqWgMEyIwgvpjorgqFbC1XjpY1siyXzJIId6OSH8JjoLhg1c=w570-h387-no?authuser=0" />
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div style={centerAlign}>
                  <div className="text-panel">
                    <Title>Share revenue</Title>
                    You can share the asset token with collaborators, rights-sharers, and investors to automatically distribute the rewards.
                     It's your choice who receives the asset token.
                    </div>
                </div>
              </Col>
            </Row>
          </Section>

          <Section style={{ background: '#B4E2EF' }}>
            <Row>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div>
                  <h1 style={{
                    color: 'white',
                    fontSize: '2rem'
                  }}>Are You Ready To Authenticate Your Assets?</h1>
                  <FButton>Create an asset!</FButton>
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }} sm={{ span: 24 }} md={{ span: 12 }}>
                <img style={{ width: '312px' }} src="https://lh3.googleusercontent.com/lwevJuYLZz11rWk33dLxZEX_5_e6ZRYMWXk3stHAg-zAE4WEwuJAKx7PjxRmZy1_mMzbsbt_3HAtloe1FWpbjwPDkG-VML61GizKtAjLyEwGBlChs4x7CCZJVhQq_diJ8N3viPUsu5ndEjaSeurjm2rOPgm56vkxmjQiFhrdnqMExdOWpUb3YFhL7HdvRDspwq559vUMDjc-KAYsQzK8G9JYm_u-vlQSDHqmbIx8nYDtYLuAZE1HwOxtErIoC_xocZQGnRd27lqgTvOVLD0wKLeufly_6vjPPUyymRb1YmK3FhZXQOlkTbrePAVx_pJMmtbmasYBsTXa6VivuRFeAaCFq-SETL6ORcltw1wPJxwebtnshjNwWjoR-fuO38XQ0BNM8yHV96rXm4k1LtfU86_E_z9XP-SA7f9M96tbRz_Xc4qziiicHeX98NUMsHc9NBYQGoIHdnm7tMjq8Y2QmX-3FY_WkbANBvnGlzVkeGTHSbfU4BfNMKssadNMy83AwmjVrzlirbdPij16GZiVuQ88oWdsemCReoGg-xezzam_TvxlMNVHe97sn0zvm1J7PuAlpTkC30Ft6xM8WaOgczPYE78Iy1uvzcRe7NnWOQ8xyjY6hVcTo_ZiBplM-ICIk_KnaYXiYWOkEFSdTdHVEQHOV9uZpZilW4sih9iRlgKPFCLsAVAmopoLLg0=w497-h261-no?authuser=0" />
              </Col>
            </Row>
          </Section>

          <Section>
            <Row className="howTo" style={{ maxWidth: '1000px' }}>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="example" src="https://lh3.googleusercontent.com/gEJ3fJM93t2sY6vFxaKV5n4BjWYuQho5BZC_VoCdYu0pKffs_npRnbWRFzIrIXkqj-ZdfyVYdTG_Cvm6k-i0Te7OYO-ytnsTdRckR3p5Y7GFEdX3E2Zriuz_6WsWf0hhBLGK_kjhVjihqgmmDeFYQFYEDJyfV2tbPSMr3jDijB9YHkC65t_nmI5XJ93yIHdMrCTn6YbWVS63Dvqo1E2PwYZWY46XJ00DQdArUwzX3HX0eOlkRIU-9zjGBMdXlvg8YPmxtlJ-swJ3S1_W2Vu1eDl4dG0h9vLxJ32WB94EVn9boI9vrJ75bMnaWev4Y4iH4PYuLnsJ7hGBqfxg4ylfWDE0kid_m9hGkXPZPwWQmnDPLFECEdWqNcc54ly-AQBxIyVXFbMzucU5YHsRarGDhxdLi8C-ibS6k5cxx7FmTkeGVkV0zRtri3FltTqLyAnXUzHzqIxq86eQPwJtE83noFFOeyTuHHNDv0-svFu2P4KMl7HzBCNb6I3uERjK--xOfM5RiFtV8H6XW0moX7wpr2tWhYzKuyz6Zhe34NUL6SqYOjIroZdmRn8D23weVKUUeaI3T4MFZ_kx30v02CDVzEvfxWrCRo1gTMlyuN46niFrH1tLOY4TO7EM7HrF-wIIlVEP_97pX_d2KUFTMOVNOpmcpR8Yd4wS-4oshZdH5cLY63YH16zk9Rzrn2w=w160-h157-no?authuser=0" />}
                >
                  <Meta title="Create an asset on Stakes.social" description={
                    <Fragment>
                      <span>  Connect your wallet, authenticate, and name your asset.  (Don't have a crypto wallet yet?) </span>
                      <ThinButton style={{ height: '35px', marginTop: '10px' }}> Metamask is easy!</ThinButton>
                    </Fragment>
                  } />
                </Card>
              </Col>
              <Col style={{}} sm={{ span: 24 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="example" src="https://lh3.googleusercontent.com/lz3YoUkLcj6hPM8JcQGKGdmtu4dGVNx1KfK7EXHKnsrNwYv284Iyb1v8bcOalHH-ghiRs1Tc7s8pTOfCxlM39O6O-DnxyibjZLz1dD8O_4OJoWxORHlsy6fylxSY4J1zG85RUgftfn_ny-76rm0jK5awqCpomMwrsrdS0jKpzsKp9rHJQXQhf4pOAKYjB38R4Dj58Ld08eUVvOvr4JKBcC3_B6_EdBLF_hCL2I1gp_jrS1Eh248CvOe_xCESp2ZfyCErljhwBZwPoRtcL_UBdFS55H8W9rUURhmPTLTdQE9Okie3TyK2fgxLAK5IrDGtFp0XxBVjHGV2guy0z91mesR2eBuLKEpt63cn0HQcCHNjQmbLjPMWw2hoCSrOQUyvwUk5GM991kF2KN1sMe3VH2rn1GIcjXMkWUcWjd-lRj3A5QJGNvjeTdPaoIarq7kdTyRNme_E3sJRZWCpiq-g8w9bXD1zQ7pDbMgm57HU-tvXlrPTJQXZpY42ElBUxr3qYaa6A8U2cvl6Ox5j030_mfQ9ZVb3Mxy0XXrUpkPJGipgNNkYMAbmEx0g1JXdoy_74eayVBttoACh3azBgdm95m94ydCCGIeQr2-xpNGIqMnLN6hLvchUu4X76eNzBbYKUiIg1Vv9JLpkvTPKXWU7C-7oAdSAEjHDyA7Fg0RZsGjYXFsIvHSB6Ku1TXc=w201-h165-no?authuser=0" />}
                >
                  <Meta title="Share it with your community!" description="Share your asset pool link to your community and have them stake DEV tokens. " />
                </Card>
              </Col>
              <Col style={{}} sm={{ span: 24 }} md={{ span: 8 }}>
                <Card
                  hoverable
                  style={{}}
                  cover={<img alt="example" src="https://lh3.googleusercontent.com/wfi4Chr6ofvnbKPZ7jxJKOrSFOXhw7f_1hi4ZlRfiTV-6UJ1t9iNWBZhqyi9GArwaTgmpGfVAToIJ5uweIjNGKkNxmUbxtqo2HCdF91h8qv3ZKS5IDn-uykI7DKikyFMwe7hTa_mYd40fG0cI5SOGvZYjnx7zYGqZe6qBdduMPwi9uOnDAgEod3VTDW2DHTYUYhouB9BtSG8dN-kBfiqnxWpBPwCYW76L3wV9ZkDHBdN01YZgJeA8U8UVeDUBzYBmAnyjizjuUHuv9_uRq8cog5egS6K_-e9spssgjZQxcdBEBJ6AF625VYN0IMu2pOOemCLvpVaY7DT2jOISKiBCJu0nqfCOUuMs1hx6bcJ9leceUwOiHEERIAL5cX0bbsnbBL6SHUAzmEerVIgXflQ6PiQOY7GRwbrh-ruAFvzxh7CBggJQXtw6JsaByY63dY_i4qIKgIbgaEaKi5hCIOQXVyLHON0BHBrk4h8NpJXf7xdU-vAY42BL70lGjkNkSxQBZFi4NbRm18X-wnn5KHQQq5jLlqqHd-IphwII3I6iS13GIdZlyUnZ_lzdww4alXn4UShMokYP2SMXpL3zAzAlgBygzaJaWiPBD6vvZYVYMFyJ1rJx8AP59G2h6ozkXzuN5_KdpzPrzh6GRNLq4CPRbzjNZ1IX2y8u3-ynYDi2tyLXF5wgDwUFya-F_M=s167-no?authuser=0" />}
                >
                  <Meta title="Withdraw rewards and manage them." description="You can withdraw creator rewards anytime and sell some on uniswap. 
                  Or stake your rewards in other creators to earn even more." />
                </Card>
              </Col>
            </Row>
          </Section>

          <Section style={{ background: '#EBF2F8' }}>
            <Row>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <img src="https://lh3.googleusercontent.com/F6YnsI8EfSGDtEYP0tIGBRM5OCXvjoDpm0XQQ6PNZhns-2cFic48Avt6k16w4g6N8I1x-7-ZQzjx389YEjBi7bA0fC43vSY3R0OUrpzCldWkjZRYdPWetXYYOFi4JaZv4dsLYSk8-4s6TNgXxwwyG0_FCUgMK3SzAFsXeomOG9Me_zHOvvPFYWgsg8dgTmUgCkWPsKY547fgNOOfvMuia7dqk9mD1X7Z7uKrP854QpoHzIT1hHrWFFcQAP0bXFahc00Mk2mIg0KW3nZpyIQlrt0JflYdkhP1cE5PdpJr6Lq2KCXgslv_PmsrfId_MbFANUsDxWcVLxrMObBsJGxc_IR8eNQeMFnT2pUnoaB_5ILmnzP4xFQkfeaBWLJv9M-hzZg0Suo316HNsg6SGW0nkxShtd6mmsXLAOrpDOmpHSCMLnFNiYunBUb_bcrB_OQP7GiUIE-x9_wU_PsAW7qZM9osXyEs-Alw2s_clVplvErrDhGwLOkEgvWjN-VH6yCK2Yygs-ZsMHCK9jPs3dUNdQ4wkeK7Vs1Z9I57yW910J3EsoX_lvgeoN2Pe2YhsXNs3Cfstunw7jmEgVPyi39RQQRYyt6coruyt6bnJnWLHbJWbJZ5v2qzQuD_xMQXS8D6XxbCOvei7q_6DROzDqJ35WIJs1Q7yxvOHGrHT2YPb-vmi2qzoLNq6bbpOcM=w611-h355-no?authuser=0" />
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <div>
                  <div className="text-panel">
                    <Title style={{ fontSize: '1.8rem' }}>Organizations in need of help with COVID-19</Title>
                    <div>
                      Stakes.social offers a sustainable option compared to donations.
                      Contact the Dev Protocol team to discuss how we can help your organization with your cause.
                    </div>
                    <FButton>Contact Us!</FButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Section>

          <TextSection>
            <Row>
              <img style={{ margin: 'auto', marginBottom: '40px', maxWidth: '500px', width: '100%' }} src="https://lh3.googleusercontent.com/0ryBW99ZoUkjNpFqEkb3MkpccUt8WOg3HTTyF12nN6Kms1iSVCedkxzltdm-uiGb_Fv-vEvM0Ws8-b-cKm3e_BpzqOtamkp2jrd9X5fs_rkhH_oTRIlKlL8d2VzdFqjxeoqCduBjDQ0ZjZsuLFcDO4QUUrui6kSto08noWJ_sElrtAa_n82ye_WBvQQpBf2rBLVkd28hGfWYltEZBcj2J3B0g_9DwWUsLqvw6rBuucGWlLaDWSAb5IBmiflphhYxfqw8_ddvuLH7m_GUBHisbBSyTvWed3wkhqh1TmKkiyDNJG5QH7mrYCPNTbSiUW7-rcEgK5EFwIZI_B_D5BIzKQJGG9Nqv5f8KNCTmj00lsno3izgT9VYeF3JuVcjIn661qaLmzs-pwCtuTKYpG19GwdYLJbQYfAUgt67x7pIv22mF5RdzJuP7C697VVgpx4xcDnrGjL_HH1vagpLZ2TkCvHbcFXkhhrj1B9WTEjYEyixMR8ONHBOQsbiCx-3CIo7mYoa5ISdIgh_A0HtJFDfl-3Rrq28RrcyvMPEgzsCN_nnB0A6sCm7rGXyLiOOBa-4xVPPkaPDbmfwL9Yseb_QQXOQJ_Fq_fayEbEMbPcCiiZVTUramGPYYY5wIUyzOO9kJMVeluQajYtLtx6Pn-QJrzjSKcEVMKPC5DP1dgbIcOcywx_IERM3GchvkNc=w660-h398-no?authuser=0" />

              <h3>Connect with us.</h3>
              <div>
                Stakes.social is the first app created by the Dev Protocol team.
                To stay up to date with our progress join our community!
            </div>
            </Row>
          </TextSection>

          <Section>
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <SocialButton>
                <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.085 34.4246H26.6617L25.5835 30.9333C25.7434 31.0727 34.8333 38.8643 34.8333 38.8643V4.78301C34.7257 2.66451 32.9017 0.864258 30.6407 0.864258L4.09292 0.869008C1.8335 0.869008 0 2.67242 0 4.79092V30.5043C0 32.7383 1.83033 34.4246 4.085 34.4246ZM20.786 9.86234L20.7337 9.88134L20.7527 9.86234H20.786ZM8.70358 11.8716C11.6058 9.75942 14.2959 9.86076 14.2959 9.86076L14.5128 10.0745C10.9614 10.9216 9.35117 12.5081 9.35117 12.5081C9.51583 12.4733 16.6867 8.33601 25.3761 12.6126C25.3761 12.6126 23.7627 11.129 20.4297 10.179L20.7242 9.88926C21.185 9.89084 23.6233 9.97634 26.2327 11.8843C26.2327 11.8843 29.1523 16.8718 29.1523 22.9993C29.0557 22.8821 27.341 25.6371 22.9282 25.7321C22.9282 25.7321 22.1809 24.8866 21.6489 24.1488C24.2297 23.4078 25.1956 21.9258 25.1956 21.9258C20.1717 25.0893 15.7684 24.5953 10.5007 22.4578C10.4516 22.4578 10.4294 22.4356 10.4041 22.4103V22.4008C10.3787 22.377 10.3566 22.3533 10.3075 22.3533H10.2125C9.8895 22.1411 9.67417 22.0366 9.67417 22.0366C9.67417 22.0366 10.6384 23.5186 13.1163 24.2596C12.4656 25.0022 11.8212 25.8461 11.8212 25.8461C7.41 25.7416 5.80133 22.9866 5.80133 22.9866C5.80133 16.8496 8.70358 11.8716 8.70358 11.8716Z" fill="#5C6BC0" />
                  <path d="M21.0698 21.085C22.1956 21.085 23.1123 20.135 23.1123 18.9634C23.1123 17.7996 22.2003 16.8496 21.0698 16.8496V16.8544C19.9488 16.8544 19.0305 17.8012 19.0273 18.9729C19.0273 20.135 19.9441 21.085 21.0698 21.085Z" fill="#5C6BC0" />
                  <path d="M13.7573 21.085C14.8831 21.085 15.7998 20.135 15.7998 18.9634C15.7998 17.7996 14.8894 16.8496 13.7637 16.8496L13.7573 16.8544C12.6316 16.8544 11.7148 17.8012 11.7148 18.9729C11.7148 20.135 12.6316 21.085 13.7573 21.085Z" fill="#5C6BC0" />
                </svg>
                <span>Discord </span>
              </SocialButton>

              <SocialButton>
                <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.085 34.4246H26.6617L25.5835 30.9333C25.7434 31.0727 34.8333 38.8643 34.8333 38.8643V4.78301C34.7257 2.66451 32.9017 0.864258 30.6407 0.864258L4.09292 0.869008C1.8335 0.869008 0 2.67242 0 4.79092V30.5043C0 32.7383 1.83033 34.4246 4.085 34.4246ZM20.786 9.86234L20.7337 9.88134L20.7527 9.86234H20.786ZM8.70358 11.8716C11.6058 9.75942 14.2959 9.86076 14.2959 9.86076L14.5128 10.0745C10.9614 10.9216 9.35117 12.5081 9.35117 12.5081C9.51583 12.4733 16.6867 8.33601 25.3761 12.6126C25.3761 12.6126 23.7627 11.129 20.4297 10.179L20.7242 9.88926C21.185 9.89084 23.6233 9.97634 26.2327 11.8843C26.2327 11.8843 29.1523 16.8718 29.1523 22.9993C29.0557 22.8821 27.341 25.6371 22.9282 25.7321C22.9282 25.7321 22.1809 24.8866 21.6489 24.1488C24.2297 23.4078 25.1956 21.9258 25.1956 21.9258C20.1717 25.0893 15.7684 24.5953 10.5007 22.4578C10.4516 22.4578 10.4294 22.4356 10.4041 22.4103V22.4008C10.3787 22.377 10.3566 22.3533 10.3075 22.3533H10.2125C9.8895 22.1411 9.67417 22.0366 9.67417 22.0366C9.67417 22.0366 10.6384 23.5186 13.1163 24.2596C12.4656 25.0022 11.8212 25.8461 11.8212 25.8461C7.41 25.7416 5.80133 22.9866 5.80133 22.9866C5.80133 16.8496 8.70358 11.8716 8.70358 11.8716Z" fill="#039BE5" />
                  <path d="M21.0698 21.085C22.1956 21.085 23.1123 20.135 23.1123 18.9634C23.1123 17.7996 22.2003 16.8496 21.0698 16.8496V16.8544C19.9488 16.8544 19.0305 17.8012 19.0273 18.9729C19.0273 20.135 19.9441 21.085 21.0698 21.085Z" fill="#039BE5" />
                  <rect x="3" y="5.86426" width="27" height="22" fill="#039BE5" />
                  <path d="M6.07094 16.7082L26.4682 8.9591C27.4149 8.62211 28.2417 9.18666 27.935 10.5972L27.9367 10.5954L24.4637 26.7172C24.2063 27.8602 23.517 28.1381 22.5527 27.5996L17.2639 23.7589L14.7129 26.1804C14.4308 26.4583 14.1928 26.6928 13.6463 26.6928L14.0218 21.3896L23.8238 12.6643C24.2504 12.2943 23.7286 12.0858 23.1662 12.4541L11.053 19.9686L5.83118 18.3636C4.69761 18.0092 4.67293 17.2467 6.07094 16.7082Z" fill="white" />
                  <path d="M13.7573 21.085C14.8831 21.085 15.7998 20.135 15.7998 18.9634C15.7998 17.7996 14.8894 16.8496 13.7637 16.8496L13.7573 16.8544C12.6316 16.8544 11.7148 17.8012 11.7148 18.9729C11.7148 20.135 12.6316 21.085 13.7573 21.085Z" fill="#039BE5" />
                </svg>

                <span>Telegram </span>
              </SocialButton>

              <SocialButton>
                <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.085 34.4246H26.6617L25.5835 30.9333C25.7434 31.0727 34.8333 38.8643 34.8333 38.8643V4.78301C34.7257 2.66451 32.9017 0.864258 30.6407 0.864258L4.09292 0.869008C1.8335 0.869008 0 2.67242 0 4.79092V30.5043C0 32.7383 1.83033 34.4246 4.085 34.4246ZM20.786 9.86234L20.7337 9.88134L20.7527 9.86234H20.786ZM8.70358 11.8716C11.6058 9.75942 14.2959 9.86076 14.2959 9.86076L14.5128 10.0745C10.9614 10.9216 9.35117 12.5081 9.35117 12.5081C9.51583 12.4733 16.6867 8.33601 25.3761 12.6126C25.3761 12.6126 23.7627 11.129 20.4297 10.179L20.7242 9.88926C21.185 9.89084 23.6233 9.97634 26.2327 11.8843C26.2327 11.8843 29.1523 16.8718 29.1523 22.9993C29.0557 22.8821 27.341 25.6371 22.9282 25.7321C22.9282 25.7321 22.1809 24.8866 21.6489 24.1488C24.2297 23.4078 25.1956 21.9258 25.1956 21.9258C20.1717 25.0893 15.7684 24.5953 10.5007 22.4578C10.4516 22.4578 10.4294 22.4356 10.4041 22.4103V22.4008C10.3787 22.377 10.3566 22.3533 10.3075 22.3533H10.2125C9.8895 22.1411 9.67417 22.0366 9.67417 22.0366C9.67417 22.0366 10.6384 23.5186 13.1163 24.2596C12.4656 25.0022 11.8212 25.8461 11.8212 25.8461C7.41 25.7416 5.80133 22.9866 5.80133 22.9866C5.80133 16.8496 8.70358 11.8716 8.70358 11.8716Z" fill="#31193B" />
                  <path d="M26.2446 9.97973L28 8.24415V7.86426H21.9188L17.5848 19.0129L12.6541 7.86426H6.27775V8.24415L8.32833 10.7954C8.52817 10.9839 8.63267 11.2596 8.60608 11.5372V21.5632C8.66933 21.9242 8.55567 22.2955 8.31 22.5579L6 25.4512V25.8264H12.5496V25.4465L10.2396 22.5579C9.98933 22.2946 9.87108 21.9298 9.9215 21.5632V12.891L15.6708 25.8311H16.3391L21.2827 12.891V23.1993C21.2827 23.4712 21.2827 23.5271 21.1103 23.7052L19.332 25.4834V25.8643H27.9597V25.4844L26.2455 23.7497C26.0952 23.6323 26.0173 23.4352 26.0493 23.2438V10.4856C26.0173 10.2933 26.0942 10.0963 26.2446 9.97973Z" fill="white" />
                </svg>

                <span>Medium </span>
              </SocialButton>

              <SocialButton>
                <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.085 34.4246H26.6617L25.5835 30.9333C25.7434 31.0727 34.8333 38.8643 34.8333 38.8643V4.78301C34.7257 2.66451 32.9017 0.864258 30.6407 0.864258L4.09292 0.869008C1.8335 0.869008 0 2.67242 0 4.79092V30.5043C0 32.7383 1.83033 34.4246 4.085 34.4246ZM20.786 9.86234L20.7337 9.88134L20.7527 9.86234H20.786ZM8.70358 11.8716C11.6058 9.75942 14.2959 9.86076 14.2959 9.86076L14.5128 10.0745C10.9614 10.9216 9.35117 12.5081 9.35117 12.5081C9.51583 12.4733 16.6867 8.33601 25.3761 12.6126C25.3761 12.6126 23.7627 11.129 20.4297 10.179L20.7242 9.88926C21.185 9.89084 23.6233 9.97634 26.2327 11.8843C26.2327 11.8843 29.1523 16.8718 29.1523 22.9993C29.0557 22.8821 27.341 25.6371 22.9282 25.7321C22.9282 25.7321 22.1809 24.8866 21.6489 24.1488C24.2297 23.4078 25.1956 21.9258 25.1956 21.9258C20.1717 25.0893 15.7684 24.5953 10.5007 22.4578C10.4516 22.4578 10.4294 22.4356 10.4041 22.4103V22.4008C10.3787 22.377 10.3566 22.3533 10.3075 22.3533H10.2125C9.8895 22.1411 9.67417 22.0366 9.67417 22.0366C9.67417 22.0366 10.6384 23.5186 13.1163 24.2596C12.4656 25.0022 11.8212 25.8461 11.8212 25.8461C7.41 25.7416 5.80133 22.9866 5.80133 22.9866C5.80133 16.8496 8.70358 11.8716 8.70358 11.8716Z" fill="#000C18" />
                </svg>

                <span>Spectrum </span>
              </SocialButton>

              <SocialButton>
                <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.085 34.4246H26.6617L25.5835 30.9333C25.7434 31.0727 34.8333 38.8643 34.8333 38.8643V4.78301C34.7257 2.66451 32.9017 0.864258 30.6407 0.864258L4.09292 0.869008C1.8335 0.869008 0 2.67242 0 4.79092V30.5043C0 32.7383 1.83033 34.4246 4.085 34.4246ZM20.786 9.86234L20.7337 9.88134L20.7527 9.86234H20.786ZM8.70358 11.8716C11.6058 9.75942 14.2959 9.86076 14.2959 9.86076L14.5128 10.0745C10.9614 10.9216 9.35117 12.5081 9.35117 12.5081C9.51583 12.4733 16.6867 8.33601 25.3761 12.6126C25.3761 12.6126 23.7627 11.129 20.4297 10.179L20.7242 9.88926C21.185 9.89084 23.6233 9.97634 26.2327 11.8843C26.2327 11.8843 29.1523 16.8718 29.1523 22.9993C29.0557 22.8821 27.341 25.6371 22.9282 25.7321C22.9282 25.7321 22.1809 24.8866 21.6489 24.1488C24.2297 23.4078 25.1956 21.9258 25.1956 21.9258C20.1717 25.0893 15.7684 24.5953 10.5007 22.4578C10.4516 22.4578 10.4294 22.4356 10.4041 22.4103V22.4008C10.3787 22.377 10.3566 22.3533 10.3075 22.3533H10.2125C9.8895 22.1411 9.67417 22.0366 9.67417 22.0366C9.67417 22.0366 10.6384 23.5186 13.1163 24.2596C12.4656 25.0022 11.8212 25.8461 11.8212 25.8461C7.41 25.7416 5.80133 22.9866 5.80133 22.9866C5.80133 16.8496 8.70358 11.8716 8.70358 11.8716Z" fill="#03A9F4" />
                  <path d="M30 10.9952C29.1075 11.3566 28.1565 11.5961 27.165 11.7124C28.185 11.1503 28.9635 10.2669 29.3295 9.2021C28.3785 9.72549 27.3285 10.0952 26.2095 10.3015C25.3065 9.41395 24.0195 8.86426 22.6155 8.86426C19.8915 8.86426 17.6985 10.9052 17.6985 13.4072C17.6985 13.7672 17.7315 14.1133 17.8125 14.4429C13.722 14.2587 10.1025 12.449 7.671 9.69226C7.2465 10.3721 6.9975 11.1503 6.9975 11.988C6.9975 13.5609 7.875 14.9552 9.183 15.7624C8.3925 15.7486 7.617 15.5367 6.96 15.203C6.96 15.2169 6.96 15.2349 6.96 15.2529C6.96 17.46 8.6655 19.2932 10.902 19.7155C10.5015 19.8166 10.065 19.865 9.612 19.865C9.297 19.865 8.979 19.8484 8.6805 19.7875C9.318 21.5861 11.127 22.9084 13.278 22.9513C11.604 24.1601 9.4785 24.8884 7.1775 24.8884C6.774 24.8884 6.387 24.8718 6 24.8261C8.1795 26.1235 10.7625 26.8643 13.548 26.8643C22.602 26.8643 27.552 19.9412 27.552 13.9403C27.552 13.7395 27.5445 13.5456 27.534 13.3532C28.5105 12.7135 29.331 11.9146 30 10.9952Z" fill="white" />
                </svg>

                <span>Twitter </span>
              </SocialButton>
            </div>
          </Section>

          <Section style={{ background: 'transparent' }}>
            <Row>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <div style={centerAlign}>
                  <div style={{ color: 'white' }}>
                    <h3 style={{ textAlign: 'left', fontSize: '2rem' }}>Join us</h3>
                    Stakes.social helps your community grow.
                    Let's keep your creative activity going.
                  </div>
                </div>
              </Col>
              <Col style={{ textAlign: 'right' }} sm={{ span: 24 }} md={{ span: 14 }}>
                <img style={{ maxWidth: '356px' }} src="https://lh3.googleusercontent.com/RUu9yeb7jfUQ1-inT-a1QVdPZvfPN-0B5g8mIz9NS_w7k4sNiRwgRmZG-qSLeKB5s4gr2EsvjbovS1VooBRsbkRM6X7BDeRSHgl8DHyrkmir2j_xkUY4V9vTonC8oA5s200jmqPKkXE9Sn4Q8V1sJVHnIFl3X1ghnuGMxjVnB26gRh_7tnd4AVF59Ypd-YK0hkbeXxHC_UCtaJwikNqpe1uqHkYZnuJcz6y2x_tnz9dwwoS0fwfuEvGUXGm4ADUq3ZCVHiFevm1Cp71feSLMwHjayy4VPtBYEljkqxshU7ONWhtbctQhuBhyKSGmok6QOW0FAHJNcwH3o0xqljyEL7sZF-x62lfPbZMchA3cVtRcQO_8VJxveU29AVuaVPxeiI9BE_k4QKwwPRcZVslpGxGIRDDs6nzw7djWA0GWHXTLdX8I4hieaRE5VQhjjEdOcTswqOqYThncfLOw5AgtwpS0Aoe7E0o16-bfWow2l29IkeRdkkmdZFJajNXsHhWF_bU4_bde0LTohk3OEno-EpQop3yvEWNzrPKiuXbNyKRB0AV84i7igwQuIbBgsO8EleYD3tVHeAdCaoTgaR0zKtW23IjyVoCyjN_vYblh5t2egFJg7ELSsov-Pac8IVTVS-tdg19UY6mTQIra2KHjCwDf7eToTixhsgY28-JEkMRCJl3yYJ-so-vRRLU=w328-h256-no?authuser=0" />
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
