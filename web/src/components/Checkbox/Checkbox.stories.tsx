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

import Checkbox from './Checkbox'
import { Form } from '@redwoodjs/forms'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'silverTree',
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: () => (
    <Form>
      <Checkbox name='checkbox' label="Send out a reminder before event" />
    </Form>
  )
}
