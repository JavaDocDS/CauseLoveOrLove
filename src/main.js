import { mount } from 'svelte'
import './common/sass/mixins.sass'
import './common/sass/fonts.sass'
import './common/sass/normalize.sass'
import './common/sass/global.sass'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
