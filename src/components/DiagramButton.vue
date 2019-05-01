<template>
  <button class="button02" @click.end="start" :disabled="isStart">
    <slot></slot>
  </button>
</template>

<script>
import NatoriDiagram from '@/util/NatoriDiagram.js'
export default {
  name: 'DiagramButton',
  data () {
    return {
      isStart: false,
      natoriDiagram: new NatoriDiagram()
    }
  },
  methods: {
    start () {
      if (!this.isStart) {
        this.isStart = true
        this.natoriDiagram.start()
      }
    }
  }
}
</script>

<style scoped>
.button02{
  margin: 8px;
  padding: 4px 16px 4px 16px;
  height:32px;
  color: #FFF;
  text-decoration: none;
  border: none;
  text-align: center;
  background-color: #f39800; /*ボタン色*/
  border-radius: 5px; /*角丸*/
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.button02:hover{
  background-color: #f9c500; /*ボタン色*/
}
.button02:disabled {
  background-color: #888888;
}
</style>
