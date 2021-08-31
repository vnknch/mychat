<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
    >
      <v-card class="pa-6" min-width="600">
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="room"
      :rules="roomRules"
      label="Room"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="submit"
    >
      Submit
    </v-btn>
        <nuxt-link
      color="blue"
      class="mr-4"
      to="/registration"
    >
      Registration
    </nuxt-link>
  </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    head: {
      title: 'Welcome to My Chat'
    },
    layout: 'empty',
      sockets: {
  },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      room: '',
      roomRules: [
        v => !!v || 'Enter your room',
      ],
      email: '',
      emailRules: [
          v => !!v || 'Email is required',
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length > 6) || 'Password must be more than 6 characters',
      ],
      checkbox: false,
    }),

    methods: {
      submit () {
        if(this.$refs.form.validate()) {
          const user = {
            name: this.name,
            room: this.room
          }
        }
      },
    },
  }
</script>
<style scoped>
</style>