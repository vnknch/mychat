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
          <h1>Registration</h1>
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
    <v-text-field
      v-model="confirmPassword"
      label="Re-Password"
      @blur="$v.confirmPassword.$touch()"
      required
    ></v-text-field>
        <p v-if="!$v.confirmPassword.sameAs">
            Password not match
        </p>
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
      to="/login"
    >
      Login
    </nuxt-link>
  </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
    import { sameAs } from 'vuelidate/lib/validators'
    import { mapActions } from 'vuex'
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
      confirmPassword: '',
      checkbox: false,
    }),
    validations: {
        confirmPassword: {
            sameAs: sameAs('password')
        }
    },
    methods: {
      ...mapActions(['signUp']),
      submit () {
        if(this.$refs.form.validate()) {
          const user = {
            name: this.name,
            room: this.room,
            email: this.email,
            password: this.password
          }
          this.signUp(user)
        }
      },
    },
  }
</script>
<style scoped>
.error {
    border: 1px solid red;
}
</style>