import { AbCard } from "../components/AbCard";
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'Components/AbCard',
    component: AbCard,
    tags: ['autodocs']
} as Meta<typeof AbCard>;


const Template: StoryFn<typeof AbCard> = () => {
    return (<AbCard>
        <h1>Olá, eu sou um card</h1>
    </AbCard>)
}

export const Card = Template.bind({})