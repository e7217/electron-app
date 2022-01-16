<template>
  <div id="sample">
      <button v-on:click="sample1">click me</button>
      <button v-on:click="SeleClick">click sele</button>
    </div>
</template>

<script>
const { sample } = require('@/assets/js/sample.js')
const { sele } = require('@/assets/js/sele.js')

export default {
    name: 'Sample',
    methods: {
        sample1: ()=>{
            sample()
        },
        SeleClick: ()=>{
            sele()
        },

}
}
</script>