module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

export default {
  title: "${componentName}",
  component: ${componentName},
  args: {
    // Insert default args here
  },
} as Meta<${componentName}Props>;

const Template: Story<${componentName}Props> = (args) => {
  return <${componentName} {...args} />;
};

export const Basic: Story<${componentName}Props> = Template.bind({});
Basic.args = {}
`,
  extension: `.stories.tsx`,
});
