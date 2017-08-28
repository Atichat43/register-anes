<template lang="pug">
  .div#app
    img(src="./assets/logo.png")
    .right.aligned.three.wide.column
      h4 เบอร์ติดต่อ
    .eleven.wide.column
      .ui.input(:class="errors.has('phone') ? 'error': ''")
        input(name="phone", v-model="name", v-mask="'0##-#######'", v-validate.initial="'required|min:10|max:11'", placeholder="099-9999999", :style="errors.has('phone') ? 'border-color:#9f3a38':''") 
    .ui.button(@click="test") test    
    .ui.label {{errors}}
    router-view 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: 'boss'
    }
  },
  methods: {
    test () {
      this.$validator.validateScopes()
    }
  }
}
</script>
