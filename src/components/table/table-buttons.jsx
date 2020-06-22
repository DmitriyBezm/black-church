import React from 'react';
import { BinIcon, EyeIcon } from 'components/icons';
import { Button } from 'components';

export function ActionButtons({
  onView,
  onDelete,
  onSelect,
  selected,
}) {
  return (
    <div className="row row--justify-end">
      {onView && (
        <div className="column column--with-offsets">
          <Button.Icon onClick={onView}>
            <EyeIcon />
          </Button.Icon>
        </div>
      )}
      {onDelete && (
        <div className="column column--with-offsets">
          <Button.Icon onClick={onDelete}>
            <BinIcon />
          </Button.Icon>
        </div>
      )}
      {onSelect && (
        <div className="column column--with-offsets">
          <Button.Icon onClick={onDelete}>
            <BinIcon />
          </Button.Icon>
        </div>
      )}
    </div>
  );
}
