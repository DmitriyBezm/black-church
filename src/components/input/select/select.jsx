import React from 'react';
import ReactSelect, { components } from 'react-select';
import classNames from 'classnames';
import { Input } from '../input';
import './styles.less';

const controlStyles = () => ({
  display: 'flex',
  width: '100%',
});

const containerStyles = () => ({ width: '100%' });

export function Select({
  label,
  placeholder,
  name,
  value,
  disabled,
  ...props
}) {
  return (
    <ReactSelect
      {...props}
      isDisabled={disabled}
      isSearchable={false}
      components={{
        Control: ({ getStyles, children, ...values }) => (
          <components.Control
            getStyles={controlStyles}
            {...values}
          >
            {children[0]}
          </components.Control>
        ),
        ValueContainer: ({
          getStyles,
          children,
          getValue,
          ...values
        }) => {
          const [, defaultInput] = children;
          const { props: childProps } = defaultInput;
          const [selected = {}] = getValue();
          const { selectProps: { menuIsOpen } } = values;
          return (
            <components.ValueContainer
              {...values}
              getStyles={containerStyles}
            >
              <div className={
                classNames({
                  'input-select': true,
                  'input-select--open': menuIsOpen,
                })
              }
              >
                <Input
                  {...childProps}
                  disabled={disabled}
                  placeholder={placeholder}
                  label={label}
                  value={selected.value || ''}
                  fake
                />
              </div>
            </components.ValueContainer>
          );
        },
      }}
    />
  );
}
