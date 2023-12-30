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

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    avatar : '/images/avatar-01.png',
  }
}

export const WithLetter: Story = {
  args: {
    letter : 'D',
  }
}

export const WithIcon: Story = {
  args: {
    icon : 'eyeClosed',
  }
}

export const WithSantaHat: Story = {
  args: {
    avatar : '/images/avatar-05.png',
    isSantaHatShowing: true
  }
}

export const WithIndicator: Story = {
  args: {
    avatar : '/images/avatar-05.png',
    isSantaHatShowing: true,
    indicator: 'success',
  }
}
