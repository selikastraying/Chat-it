<template>
  <div class="h-100 w-100">
    <div class="d-flex flex-column-reverse h-75 w-100 overflow-auto">
      <p v-for="chat in loadingchats" :key="chat">{{ chat }}</p>
    </div>
    <div class="h-25 w-100">
      <b-input-group class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="info">Sent</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 5
    }
  },
  props: {
    chats: {
      type: Array,
      required: true
    }
  },
  computed: {
    loadingchats: function() {
      return this.chats.slice(this.page * -10)
    }
  }
}
</script>

<style></style>
