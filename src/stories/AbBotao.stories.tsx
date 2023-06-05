import { AbButton, AbButtonProps } from "../components/AbButton";
import { Meta, StoryFn } from '@storybook/react'

export default {
   title: 'Components/AbBotao',
   component: AbButton,
   tags: ['autodocs']
} as Meta<typeof AbButton>

const Template: StoryFn<typeof AbButton> = (args)=> <AbButton {...args}/> 

export const Primario = Template.bind({})

Primario.args = {
   text: "Ab Primary Button",
   tipo: 'primary'
} as AbButtonProps

export const Secundario = Template.bind({})

Secundario.args = {
   text: "Ab Secondary Button",
   tipo: 'secondary'
} as AbButtonProps