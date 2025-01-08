import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // children: {
    //   control: 'button',
    // },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};
