import React from 'react';
import { Layout, Typography, Button } from 'components';
import { MountsIcon, SettingsIcon, PencilIcon } from 'components/icons';
import intro from 'images/intro.png';
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
          <ul className="main-page__instruction-list row row--justify-between">
            {INSTRUCTION_LIST.map(({
              id,
              title,
              note,
              icon: Icon,
            }) => (
              <li className="main-page__instruction-item column column--with-offsets column--flex" key={id}>
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
        </div>
      </section>
    </Layout>
  );
}
