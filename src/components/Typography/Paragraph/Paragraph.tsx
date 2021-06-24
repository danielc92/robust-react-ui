// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'robust-react-ui/utils/getClassNames';
import { IParagraphProps } from './Paragraph.types';
import './Paragraph.scss';

const Paragraph = ({
  children,
  id,
  size = 'medium',
  bolded = false,
}: IParagraphProps) => (
  <p
    className={getClassNames({
      'rrui-para': true,
      'rrui-para--small': size === 'small',
      'rrui-para--medium': size === 'medium',
      'rrui-para--large': size === 'large',
      'rrui-para--bolded': bolded,
    })}
    id={id || null}
    data-testid="Paragraph"
  >
    {children}
  </p>
);

export default Paragraph;
