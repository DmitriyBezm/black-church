import React from 'react';
import {
  Layout,
  Typography,
  Button,
  Input,
  Card,
} from 'components';
import { TwitterIcon, FacebookIcon } from 'components/icons';
import invite from 'images/invite.png';
import './styles.less';

export function Invite() {
  return (
    <Layout
      className="invite-page"
    >
      <Layout.Wrapper>
        <div className="container">
          <div className="row invite-page__head">
            <div className="column column--align-center column--flex">
              <Typography.H2 className="invite-page__title" second>
                Invite your Friends by email!
              </Typography.H2>
              <Typography.P className="invite-page__subtitle">
                For every friend who signs up, we’ll give you both 30 days free!
              </Typography.P>
            </div>
          </div>
          <Card className="
            invite-page__form-wrap
            invite-page__card
            row row--sm-reverse
          "
          >
            <Card.Content className="
              column--flex column
              column--align-center
              invite-page__form-column
              invite-page__column
              "
            >
              <div className="invite-page__form-inner">
                <form className="invite-page__form">
                  <Input
                    label="Enter friend's email"
                    className="invite-page__email"
                    placeholder="Email"
                  />
                  <Button
                    type="submit"
                    className="invite-page__submit-button"
                  >
                    Submit
                  </Button>
                </form>
                <Typography.H5
                  className="invite-page__invite-title"
                  normal
                >
                  Other ways to invite your friends
                </Typography.H5>
                <Input.Clipboard
                  readonly
                  label="Copy Link"
                  className="invite-page__invite-link"
                  value="https://efderfigdpurffgdpd3456456jpjhp"
                />
                <div className="row row--justify-between">
                  <div className="column column--with-offsets">
                    <button className="invite-page__social">
                      <TwitterIcon />
                      <span className="invite-page__social-text">Share on Twitter</span>
                    </button>
                  </div>
                  <div className="column column--with-offsets">
                    <button className="invite-page__social">
                      <FacebookIcon />
                      <span className="invite-page__social-text">Share on Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card.Content>
            <Card.Content className="
              column column--flex
              column--self-stretch
              column--align-center
              column--justify-between
              invite-page__banner
              invite-page__column
              invite-page__form-column
            "
            >
              <div className="
                column
                column--flex
                column--align-center
              "
              >
                <Typography.H3
                  className="invite-page__banner-title"
                  second
                  normal
                >
                  You’ve earned
                  <span className="invite-page__banner-count"> 0 </span>
                  days in Total
                </Typography.H3>
                <Typography.H6
                  className="invite-page__banner-subtitle"
                  second
                  normal
                >
                  Invite Friends to earn more!
                </Typography.H6>
              </div>
              <img
                className="invite-page__invite-image"
                src={invite}
                alt="invite"
              />
            </Card.Content>
          </Card>
        </div>
      </Layout.Wrapper>
    </Layout>
  );
}
