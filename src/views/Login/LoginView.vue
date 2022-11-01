<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app id="inspire">
       <v-content>
          <v-container class="container" >
            <v-row class="d-flex justify-center align-center">
            <v-col class="" cols="6">
                   <v-card>
                      <v-toolbar dark color="green">
                         <v-toolbar-title>Login Page</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                         <v-form>
                            <v-text-field
                               prepend-icon="person"
                               name="login"
                               label="Login"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               id="password"
                               prepend-icon="lock"
                               name="password"
                               label="Password"
                               type="password"
                            ></v-text-field>
                         </v-form>
                      </v-card-text>
                      <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn class="border " color="green" to="/">Login</v-btn>
                      </v-card-actions>
                   </v-card>
                  </v-col>
                  </v-row>
                  </v-container>
       </v-content>
    </v-app>
 </template>
 
 <script lang="ts">
import { defineComponent } from "@vue/runtime-core"

 export default defineComponent({
    props: {
       source: String,
    },
 });
 </script>
 
 <style>

</style>
 