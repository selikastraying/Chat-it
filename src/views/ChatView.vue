<template>
  <div class="d-flex h-100">
    <div class="h-100 w-25 px-3 d-none d-sm-flex">
      <ChatList :chatlist="chatlist" @update="openchat" />
    </div>
    <div class="h-100 w-50 px-auto d-none d-md-flex">
      <Chat :chat="chat" :friends="friends" @update="openchat" />
    </div>
    <div class="h-100 w-75 px-auto d-none d-sm-flex d-md-none">
      <Chat :chat="chat" :friends="friends" @update="openchat" />
    </div>
    <div class="h-100 w-25 px-3 d-none d-md-flex">
      <ChatStatus />
    </div>
    <div class="h-100 w-100 px-1 d-flex d-sm-none" v-if="showChats">
      <ChatList :chatlist="chatlist" @update="openchat" />
    </div>
    <div class="h-100 w-100 px-1 d-flex d-sm-none" v-if="chating">
      <Chat :chat="chat" :friends="friends" @update="openchat" />
    </div>
    <div class="h-100 w-100 px-1 d-flex d-sm-none" v-if="showStatus">
      <ChatStatus />
    </div>
  </div>
</template>

<script>
import UserServices from '@/services/UserServices.js'
import { mapState } from 'vuex'

import ChatStatus from '@/components/ChatStatus.vue'
import ChatList from '@/components/ChatList.vue'
import Chat from '@/components/Chat.vue'

export default {
  data() {
    return {
      showFriends: true,
      showChats: false,
      showStatus: false,
      chating: false,
      chat: { id: '', name: '' },
      friends: [],
      chatlist: [],
      timeid: null
    }
  },
  methods: {
    openchat: function(chat) {
      this.chat = chat
      this.chating = true
    },
    updateList: function() {
      UserServices.getFriends(this.token).then(friends => {
        this.friends = friends
      })
      UserServices.getChats(this.token).then(chatlist => {
        this.chatlist = chatlist
      })
    }
  },
  components: {
    ChatStatus,
    ChatList,
    Chat
  },
  computed: mapState('user', ['name', 'token']),
  mounted: function() {
    this.timeid = setInterval(this.updateList, 100)
  },
  destroyed: function() {
    clearInterval(this.timeid)
  }
}
</script>

<style></style>
