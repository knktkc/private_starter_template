/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

import MyButton from './MyButton'
import Welcome from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}))

storiesOf('Button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    'with text',
    withNotes(
      `
      sizeとcolorはここにあるやつを使ってください
      size: minimum, small, normal, large, full
      color: default, primary, success, info, warning, danger, dark
    `
    )(() => {
      const label = text('Label', 'BUTTON')
      return {
        components: { MyButton },
        template: `<my-button @click="action">${label}</my-button>`,
        methods: { action: action('clicked') }
      }
    })
  )
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))

/* eslint-enable react/react-in-jsx-scope */
