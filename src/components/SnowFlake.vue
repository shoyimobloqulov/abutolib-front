<template>
  <!-- Faqat qish bo‘lsa ko‘rinadi -->
  <span
    v-if="isWinter"
    class="cursor-pointer"
    @click="toggleSnow"
    title="Snow effect"
  >
    <Snowflake
      :size="22"
      :class="hasSnow ? 'text-sky-400' : 'text-gray-400'"
      class="transition hover:rotate-12 hover:scale-110"
    />
  </span>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Snowflake } from 'lucide-vue-next'

const month = new Date().getMonth() // 0–11
const isWinter = computed(() => [11, 0, 1].includes(month))

const hasSnow = ref(localStorage.getItem('hasSnow') === 'true')

const toggleSnow = () => {
  hasSnow.value = !hasSnow.value
  localStorage.setItem('hasSnow', hasSnow.value)
  applySnow()
}

const applySnow = () => {
  if (!isWinter.value) return

  if (hasSnow.value) {
    if (!document.getElementById('snow')) {
      const snowDiv = document.createElement('div')
      snowDiv.id = 'snow'
      document.body.appendChild(snowDiv)
    }

    $("#snow").snow({
      intensity: 4 * (window.screen.availWidth / 1000),
      sizeRange: [10, 15],
      opacityRange: [0.5, 1],
      driftRange: [-3, 3],
      speedRange: [25, 70]
    })
  } else {
    $("#snow").empty()
  }
}

onMounted(() => {
  if (isWinter.value && hasSnow.value) {
    applySnow()
  }
})
</script>
