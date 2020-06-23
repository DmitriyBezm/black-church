import React from 'react';
import ReactSelect, { components } from 'react-select';
import classNames from 'classnames';
import { TriangleIcon } from 'components/icons';
import { Control as DefaultControl } from './control';
import './styles.less';

export function Select({
  label,
  placeholder,
  disabled,
  warning,
  error,
  className,
  control: Control,
  ...props
}) {
  return (
    <ReactSelect
      {...props}
      className={classNames({
        [className]: className,
        'input-select': true,
      })}
      isDisabled={disabled}
      placeholder={placeholder}
      isSearchable={false}
      components={{
        Control: (values) => (
          Control
            ? (
              <Control
                error={error}
                warning={warning}
                label={label}
                {...values}
              >
                <components.Control
                  className="input-select__control"
                  {...values}
                />
              </Control>
            ) : (
              <DefaultControl
                error={error}
                warning={warning}
                label={label}
                {...values}
              />
            )
        ),
        ValueContainer: (props) => (
          <components.ValueContainer
            className="input-select__value-container"
            {...props}
          />
        ),
        IndicatorsContainer: ({ children, ...props }) => (
          <components.IndicatorsContainer
            className="input-select__indicator-container"
            {...props}
          >
            <TriangleIcon />
          </components.IndicatorsContainer>
        ),
        IndicatorSeparator: () => null,
      }}
    />
  );
}
