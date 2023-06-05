import { AbGrupoOpcoes } from "../components/AbGrupoOpcoes";
import { Meta, StoryFn } from '@storybook/react'

export default {
   title: 'Components/AbGrupoOpcoes',
   component: AbGrupoOpcoes,
   tags: ['autodocs']
} as Meta<typeof AbGrupoOpcoes>

const Template: StoryFn<typeof AbGrupoOpcoes> = () => <AbGrupoOpcoes /> 

export const Default = Template.bind({})

Default.args = {} 