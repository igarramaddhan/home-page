// @flow
import React from 'react';
import {Helmet} from 'react-helmet';
type Props = {
  title: string,
  description: string,
};

const Helm = ({title, description}: Props) => (
  <Helmet>
    <title>{title}</title>
    <meta name="og:title" content={title} />

    <meta name="description" content={description} />
    <meta name="og:description" content={description} />
    <meta name="twitter:description" content={description} />

    <meta name="og:url" content="https://igarramaddhan.now.sh" />
  </Helmet>
);

export default Helm;
