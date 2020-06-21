import React from 'react';
import { CopyIcon } from 'components/icons';
import copy from 'copy-to-clipboard';
import { WithButton } from '../with-button';

export function Clipboard({ placeholder, value, ...rest }) {
  const onClick = () => {
    copy(value);
  };

  return (
    <WithButton
      readOnly
      icon={CopyIcon}
      value={value}
      onClick={onClick}
      {...rest}
    />
  );
}
