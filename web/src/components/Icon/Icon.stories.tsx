// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Icon>

export const Calendar: Story = {
  args : {
    id: 'calendar',
    size: 24
  }
}

export const Check: Story = {
  args : {
    id: 'check',
    size: 24
  }
}

export const Chevron: Story = {
  args : {
    id: 'chevron',
    size: 24
  }
}

export const Close: Story = {
  args : {
    id: 'close',
    size: 24
  }
}

export const EyeClosed: Story = {
  args : {
    id: 'eyeClosed',
    size: 24
  }
}

export const EyeOpened: Story = {
  args : {
    id: 'eyeOpened',
    size: 24
  }
}

export const Logout: Story = {
  args : {
    id: 'logout',
    size: 24
  }
}

export const Minus: Story = {
  args : {
    id: 'minus',
    size: 24
  }
}

export const Plus: Story = {
  args : {
    id: 'plus',
    size: 24
  }
}

export const Question: Story = {
  args : {
    id: 'question',
    size: 24
  }
}

export const ThumbsDown: Story = {
  args : {
    id: 'thumbsDown',
    size: 24
  }
}

export const ThumbsUp: Story = {
  args : {
    id: 'thumbsUp',
    size: 24
  }
}

export const Upload: Story = {
  args : {
    id: 'upload',
    size: 24
  }
}

export const User: Story = {
  args : {
    id: 'user',
    size: 24
  }
}