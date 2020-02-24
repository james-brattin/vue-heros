<template>
<div>
  <div v-if="heros && heros.length">
    <div v-for="hero of heros" v-bind:key="hero.id">
      <v-card
      class="mx-auto"
      max-width="344"
      outlined
      >
      <v-card-title>{{hero.name}}</v-card-title>
      <v-card-text>{{hero.description}}</v-card-text>

      <v-card-actions>
        <v-btn text>Edit</v-btn>
        <v-btn text>Delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
  </div>

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