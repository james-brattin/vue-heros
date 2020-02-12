<template>
<div>
  <ul v-if="heros && heros.length">
    <li v-for="hero of heros" v-bind:key="hero.id">
      <p><strong>{{hero.name}}</strong></p>
      <p>{{hero.description}}</p>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.id">
      {{error.message}}
    </li>
  </ul>
</div>
</template>

<script>
import {HTTP} from './http-common';

export default {
    name: 'Dashboard',
    data() {
        return {
            heros: [],
            errors: []
        }
    },
    created() {
        HTTP.get(`heros`)
            .then(response => {
                this.heros = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>

<style>

</style>