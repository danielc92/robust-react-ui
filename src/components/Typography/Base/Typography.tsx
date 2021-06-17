import React from 'react';
import Paragraph from 'robust-react-ui/components/Typography/Paragraph';
import Heading from 'robust-react-ui/components/Typography/Heading';
import { TypographyProps } from './Typography.types';

const Typography = ({ children }: TypographyProps) => <>{children}</>;

Typography.Heading = Heading;
Typography.Paragraph = Paragraph;
export default Typography;
