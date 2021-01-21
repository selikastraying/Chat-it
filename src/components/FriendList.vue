<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="friend in friends"
        :key="friend.id"
        class="d-flex align-items-center"
      >
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">{{ friend.id }}</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    friends: {
      type: Array[String],
      required: true
    }
  }
}
</script>

<style></style>
