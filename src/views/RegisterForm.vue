<template>
  <div>
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Register:" label-for="input-2">
          <b-form-input
            id="input-1"
            v-model="form.id"
            placeholder="Enter id"
            required
          ></b-form-input>
          <b-form-input
            id="input-2"
            v-model="form.email"
            placeholder="Enter email"
            type="email"
            required
          ></b-form-input>
          <b-form-input
            id="input-3"
            v-model="form.pass"
            placeholder="Enter password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <p>{{ name }}</p>
        <p>{{ token }}</p>

        <b-form-group id="input-group-2" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-1"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Remember me</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-link :to="{ name: 'LoginForm' }">
        Already have an account? Login
      </b-link>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      form: {
        id: '',
        pass: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.register({
        id: this.form.id,
        pass: this.form.pass,
        email: this.form.email
      }).then(result => {
        if (result) this.$router.push({ name: 'Profile' })
      })
    },
    onReset(event) {
      event.preventDefault()
      this.form.id = ''
      this.form.pass = ''
      this.form.email = ''
      this.form.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    ...mapActions('user', ['register'])
  },
  computed: mapState('user', ['name', 'token'])
}
</script>

<style></style>
