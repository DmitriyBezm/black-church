import React from 'react';
import { MountsIcon, SettingsIcon, PencilIcon } from 'components/icons';
import intro from 'images/intro.png';
import mobile from 'images/intro-mobile-friendly.png';
import video from 'images/intro-video-cover.png';
import {
  Layout,
  Typography,
  Button,
  Feedback,
} from 'components';
import './styles.less';

const INSTRUCTION_LIST = [
  {
    id: 0,
    icon: MountsIcon,
    title: 'Resources',
    note: `
      Select a professionally designed template
      to make your site come to life.
    `,
  },
  {
    id: 1,
    icon: PencilIcon,
    title: 'Add your content',
    note: `
      Post audio and video sermons,
      add an events calendar,
      and set up online givings.
    `,
  },
  {
    id: 2,
    title: 'Optimize your site',
    icon: SettingsIcon,
    note: `
      Whether your have no coding experience
      or you\`re a seasoned pro, 
      make your website look feel the way you want.
    `,
  },
];

export function Main() {
  return (
    <Layout className="main-page">
      <section className="main-page__intro">
        <div className="container row row--full-height">
          <div className="column column--flex column--with-offsets">
            <Typography className="main-page__title" second>
              Create a black church website in minutes
            </Typography>
            <Typography.P className="main-page__description">
              Black ChMS is a new church website builder
              and management software used to create high quality sites in minutes.
              Manage your entire church organization for one low monthly fee. No extra charges ever!
            </Typography.P>
            <Button className="column column--self-start">
              Learn More
            </Button>
          </div>
          <div className="
            column
            column--flex
            column--with-offsets
            column--align-center
            "
          >
            <img className="main-page__main-image" src={intro} alt="intro" />
          </div>
        </div>
      </section>

      <section className="main-page__instruction">
        <div className="container">
          <Typography.H2 second className="main-page__instruction-title">
            Easily create your black church website
          </Typography.H2>
          <ul className="main-page__instruction-list row row--justify-between row--align-start">
            {INSTRUCTION_LIST.map(({
              id,
              title,
              note,
              icon: Icon,
            }) => (
              <li className="main-page__instruction-item column column--with-offsets" key={id}>
                <div className="main-page__instruction-item-icon">
                  <Icon />
                </div>
                <Typography.H6 className="main-page__instruction-item-title">
                  {title}
                </Typography.H6>
                <Typography.P className="main-page__instruction-item-title">
                  {note}
                </Typography.P>
              </li>
            ))}
          </ul>
          <div className="row">
            <div className="column column--with-offsets">
              <Button>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="main-page__features">
        <div className="container">
          <div className="row row--align-start main-page__feature-mobile">
            <div className="column column--with-offsets column--flex column--self-end">
              <img className="main-page__feature-cover" src={mobile} alt="mobile friendly" />
            </div>
            <div className="column column--with-offsets column--flex">
              <div className="main-page__feature-info column column--self-end">
                <Typography.H2 className="main-page__feature-title">
                  Beautiful mobile-friendly templates for your black church website
                </Typography.H2>
                <Typography.P className="main-page__feature-text">
                  Start creating your church’s website with a professionally designed template
                </Typography.P>
              </div>
            </div>
          </div>
          <div className="row row--align-start main-page__feature-mobile">
            <div className="column column--with-offsets column--flex">
              <div className="main-page__feature-info column column--self-start">
                <Typography.H2 className="main-page__feature-title">
                  Effortlessly embed a live stream on your website
                </Typography.H2>
                <Typography.P className="main-page__feature-text">
                  Black ChMS Sites, embedding a live stream on your website with Facebook,
                  YouTube, or Vimeo is easy like Sunday morning.
                </Typography.P>
                <Button>
                  Get Started
                </Button>
              </div>
            </div>
            <div className="column column--with-offsets column--flex">
              <img className="main-page__feature-cover" src={video} alt="stream video cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="main-page__feedback">
        <div className="container">
          <Feedback />
        </div>
      </section>
    </Layout>
  );
}