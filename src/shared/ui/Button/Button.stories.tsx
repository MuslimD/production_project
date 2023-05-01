import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: "Text"
  },
};

export const Clear: Story = {
  args: {
   children: "Text",
   theme: ButtonTheme.CLEAR
  },
};
export const Outline: Story = {
  args: {
   children: "Text",
   theme: ButtonTheme.OUTLINE
  },
 
};


