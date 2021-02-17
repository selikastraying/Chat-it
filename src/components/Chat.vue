<template>
  <div class="h-100 w-100">
    <div class="h-100 w-100 friendlist" v-if="showFriends">
      <FriendList :friends="friends" @update="addMember" />
    </div>
    <div>
      <div v-if="chat.name !== ''">{{ chat.name }}</div>
      <div v-if="chat.name === ''">{{ member.join() }}</div>
      <div
        style="text-align:right;cursor:pointer;"
        class="friendbutton"
        v-if="!showFriends"
        @click="showFriends = !showFriends"
      >
        new member
      </div>
    </div>
    <div
      class="d-flex flex-column-reverse w-100 overflow-auto noscrollbar"
      style="height: 80%"
    >
      <div v-for="chat in loadingchats" :key="chat.id">
        <template v-if="chat.who === name">
          <b-card :sub-title="chat.who" align="right">
            <b-card-text>{{ chat.what }}</b-card-text>
          </b-card>
        </template>
        <template v-if="chat.who !== name">
          <b-card :sub-title="chat.who" align="left">
            <b-card-text>{{ chat.what }}</b-card-text>
          </b-card>
        </template>
      </div>
    </div>
    <div class="w-100" style="height: 20%">
      <b-input-group class="mt-3">
        <b-form-input v-model="newchat"></b-form-input>
        <b-input-group-append>
          <template v-if="chat.id !== ''">
            <b-button variant="info" @click="sentChat">Sent</b-button>
          </template>
          <template v-if="chat.id === ''">
            <b-button variant="info" @click="createChat">Sent</b-button>
          </template>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
import UserServices from '@/services/UserServices.js'
import FriendList from '@/components/FriendList.vue'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      page: 5,
      chats: [],
      member: [],
      timeid: null,
      newchat: '',
      showFriends: false
    }
  },
  props: {
    chat: Object,
    friends: Array
  },
  components: {
    FriendList
  },
  methods: {
    updateChat: function() {
      if (this.chat.id === '') {
        this.chats = []
        this.member = []
        clearInterval(this.timeid)
        return
      }
      UserServices.getChat(this.chat.id).then(chat => {
        this.chats = chat.chat.reverse()
        this.member = chat.member
      })
    },
    sentChat: function() {
      if (this.newchat === '') return
      UserServices.sentChat(this.token, this.chat.id, this.newchat)
    },
    createChat: function() {
      if (this.newchat === '') return
      if (this.member.length == 0) return
      UserServices.createChat(
        this.token,
        this.member,
        this.newchat,
        this.chat.name
      ).then(chat => {
        this.newchat = ''
        this.$emit('update', chat)
      })
    },
    addMember: function(member) {
      if (this.chat.id === '') {
        member.forEach(m => {
          this.member.push(m)
        })
        member.push()
        this.showFriends = false
      } else {
        UserServices.addMember(this.chat.id, this.chat.name, member).then(
          () => {
            this.showFriends = false
          }
        )
      }
    }
  },
  computed: {
    loadingchats: function() {
      return this.chats.slice(this.page * -10)
    },
    ...mapState('user', ['name', 'token'])
  },
  watch: {
    chat: function() {
      this.timeid = setInterval(this.updateChat, 100)
    }
  },
  mounted: function() {
    this.timeid = setInterval(this.updateChat, 100)
  },
  destroyed: function() {
    clearInterval(this.timeid)
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

.friendlist {
  z-index: 1;
}

.friendbutton {
  z-index: 1;
  align-items: right;
}
</style>
