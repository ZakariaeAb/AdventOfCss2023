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

import RsvpButton from './RsvpButton'

const meta: Meta<typeof RsvpButton> = {
  component: RsvpButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RsvpButton>

export const thumbsdown: Story = {
  args: {
    id: "thumbsDown",
    bg: "orangeRed",
    color: "white",
    heading: "Respectfully Decline"
  }
}

export const thumbsup: Story = {
  args: {
    id: "thumbsUp",
    bg: "spanishGreen",
    color: "white",
    heading: "I'll be there!"
  }
}
