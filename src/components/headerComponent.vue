<template>
  <v-card>
    <v-layout>
      <v-app-bar color="green" prominent>
        <v-btn to="/">
            CRYPTO PROJECT           
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/stars"><v-icon>mdi-thumb-up</v-icon></v-btn>
        <v-btn variant="text"  to="/login">Login</v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
      <v-main />
    </v-layout>
  </v-card>
</template>