// Generated with util/create-component.js
import React from 'react';
import getClassNames from 'utils/getClassNames';
import { ParagraphProps } from './Paragraph.types';
import './Paragraph.scss';

const Paragraph = ({
  children,
  id,
  size = 'medium',
  bolded = false,
}: ParagraphProps) => (
  <p
    className={getClassNames({
      'dcui-para': true,
      'dcui-para--small': size === 'small',
      'dcui-para--medium': size === 'medium',
      'dcui-para--large': size === 'large',
      'dcui-para--bolded': bolded,
    })}
    id={id || null}
    data-testid="Paragraph"
  >
    {children}
  </p>
);

export default Paragraph;
