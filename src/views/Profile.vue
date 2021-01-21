<template>
  <div class="d-flex h-100">
    <b-col>
      <FriendList :friends="friends" />
    </b-col>
    <b-col cols="10">
      <Chat :chats="chats" />
    </b-col>
  </div>
</template>

<script>
import FriendList from '@/components/FriendList.vue'
import Chat from '@/components/Chat.vue'

export default {
  data() {
    return {
      chats: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k'
      ]
    }
  },
  props: {
    friends: {
      type: Array,
      required: true
    }
  },
  components: {
    FriendList,
    Chat
  }
}
</script>

<style></style>
