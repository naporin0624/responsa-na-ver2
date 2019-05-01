<template>
  <v-btn large block color="#F4CFE2" @click.end="start" :disabled="isStart">
    <slot></slot>
  </v-btn>
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
        this.$emit('diagramClick')
      }
    }
  }
}
</script>
