import React, { Fragment } from 'react';

import TwitterIcon from '../../components/ui/TwitterIcon';
import { appString } from '../../utils';

const Title = () => (
  <h3 className="cards__title">
    <TwitterIcon className="cards__icon"/>
      {appString.FEED_CARDS_TITLE} 
  </h3>
);

export default Title;