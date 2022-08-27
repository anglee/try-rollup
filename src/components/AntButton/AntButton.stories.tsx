import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AntButton from './AntButton';

export default {
  title: 'Example/AntButton',
  component: AntButton,
} as ComponentMeta<typeof AntButton>;

const Template: ComponentStory<typeof AntButton> = (args) => <AntButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'FooBar',
};
