<template lang="pug">
  .ui.container
    .ui.teal.top.fixed.borderless.inverted.menu
      router-link.item(:to="{ name: 'Home' }")
        img(src='../assets/logo.png')
      router-link.item(:to="{ name: 'SearchPatient' }")
        | Patients
      .right.menu
        a.item(@click="signOut") Sign Out
</template>
