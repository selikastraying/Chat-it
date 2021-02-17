<template>
  <div class="h-100 w-100">
    <div clss="w-100">
      <p>Member</p>
    </div>
    <div
      class="form-check d-flex flex-column w-100 overflow-auto noscrollbar"
      style="height: 90%"
    >
      <div v-for="friend in friends" :key="friend.id">
        <b-list-group-item class="d-flex align-items-left">
          <input
            class="mr-3 my-auto"
            type="checkbox"
            v-model="selected"
            :id="friend.id"
            :value="friend.id"
          />
          <b-avatar class="mr-3"></b-avatar>
          <span class="mr-auto my-auto">{{ friend.id }}</span>
        </b-list-group-item>
      </div>
    </div>
    <b-list-group-item
      class="align-items-center w-75 mx-auto"
      href="#"
      @click="submit"
    >
      加入
    </b-list-group-item>
    <p>{{ selected }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: []
    }
  },
  props: {
    friends: {
      type: Array,
      required: true
    }
  },
  methods: {
    submit: function() {
      this.$emit('update', this.selected)
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
