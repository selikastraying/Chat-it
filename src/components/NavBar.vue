<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/"><b-navbar-brand>Chat-it</b-navbar-brand></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!token" to="/login">Login</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ name }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item v-if="token" @click="SignOut">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState('user', ['name', 'token']),
  methods: {
    SignOut() {
      this.resetState().then(() => {
        this.$router.push({ name: 'LoginForm' })
      })
    },
    ...mapActions('user', ['resetState'])
  }
}
</script>

<style scoped>
#nav {
  position: absolute;
  z-index: 1;
  width: 100%;
}
</style>
