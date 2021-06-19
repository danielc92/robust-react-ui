import React from 'react';
import Paragraph from 'robust-react-ui/components/Typography/Paragraph';
import Heading from 'robust-react-ui/components/Typography/Heading';
import { ITypographyProps } from './Typography.types';

const Typography = ({ children }: ITypographyProps) => <>{children}</>;

Typography.Heading = Heading;
Typography.Paragraph = Paragraph;
export default Typography;
