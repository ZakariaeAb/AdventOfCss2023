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

import InviteCard from './InviteCard'

const meta: Meta<typeof InviteCard> = {
  component: InviteCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InviteCard>

export const Primary: Story = {
  args: {
    avatar: {
      avatar: "/images/avatar-01.png",
      indicator: 'success'
    },
    email: 'zakariaeabassioff@gmail.com',
    name: 'Zakariae Abassi',
    isCloseShowing: true
  }
}
