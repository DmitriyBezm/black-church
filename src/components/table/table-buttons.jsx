import React from 'react';
import {
  BinIcon,
  EyeIcon,
  CheckboxEmptyIcon,
  CheckboxIcon,
} from 'components/icons';
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
          <Button.Icon onClick={onSelect}>
            {selected
              ? (
                <CheckboxIcon className="table__checkbox-icon" />
              )
              : (
                <CheckboxEmptyIcon className="table__checkbox-icon" />
              )}
          </Button.Icon>
        </div>
      )}
    </div>
  );
}
