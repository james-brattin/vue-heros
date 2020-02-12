<template>
  <ul v-if="heros && heros.length">
    <li v-for="hero of heros" v-bind:key="hero.id">
      <p><strong>{{hero.name}}</strong></p>
      <p>{{hero.description}}</p>
    </li>
  </ul>
</template>

<script>
import {HTTP} from './http-common';

export default {
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