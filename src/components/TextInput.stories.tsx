import { Meta, StoryObj } from "@storybook/react";
import { Envelope, Lock } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Input placeholder="Type your e-mail address" />,
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const IconEnvelope: StoryObj<TextInputRootProps> = {};

export const WithoutEnvelope: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />,
  },
};
export const IconLock: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder="********" />,
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
    ],
  },
};

export const WithoutLock: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="********" />,
  },
};
