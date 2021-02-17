<template>
  <div class="h-100 w-100">
    <div
      class="d-flex flex-column w-100 overflow-auto noscrollbar"
      style="height: 90%"
    >
      <div v-for="chat in chatlist" :key="chat.id">
        <b-list-group-item
          href="#"
          @click="openchat(chat)"
          class="d-flex align-items-left"
        >
          <b-avatar class="mr-3"></b-avatar>
          <span class="mr-auto">{{ chat.name }}</span>
        </b-list-group-item>
      </div>
      <div>
        <b-list-group-item
          href="#"
          @click="openchat({ id: '', name: '' })"
          class="d-flex align-items-left"
        >
          <span class="mr-auto">new chat</span>
        </b-list-group-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatlist: {
      type: Array[String],
      required: true
    }
  },
  methods: {
    openchat: function(chat) {
      this.$emit('update', chat)
    }
  }
}
</script>

<style scoped>
.noscrollbar::-webkit-scrollbar {
  display: none;
}

.noscrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
