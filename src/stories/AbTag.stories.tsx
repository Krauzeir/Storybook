import { AbTag, AbTagProps } from "../components/AbTag";
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'components/AbTag',
    component: AbTag
} as Meta<typeof AbTag>;

const Template: StoryFn<typeof AbTag> = (args) => <AbTag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Tag'
} as AbTagProps