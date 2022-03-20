<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="green">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <p>
                    <v-icon aria-hidden="false"> mdi-account </v-icon>
                    User name :
                    <v-text-field
                      name="login"
                      label="User name"
                      type="email"
                      v-model="email"
                    ></v-text-field>
                  </p>
                  <p><v-icon>mdi-key</v-icon>Password :</p>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import mdiAccount from "@mdi/js";
import mdikey from "@mdi/js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      icons: {
        mdiAccount,
        mdikey,
      },

    };
  },

  methods: {
    login() {
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User = " + user);
          // ...
          this.$router.replace("/clinic");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    },
  },
};
</script>

<style>
</style>