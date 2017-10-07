<template lang="pug">
  .field
    .ui.search.selection.dropdown(ref="dropdown")
      .text(ref="text") select
      i.dropdown.icon
      .menu
        .item(data-value='', data-text='None') None
        .header.red G General Anesthesia
        .item.red(data-value='GA', data-text='G General Anesthesia') GA
        .item.red(data-value='TIVA', data-text='G TIVA') TIVA
        .item.red(data-value='TIVA', data-text='G GA/ TIVA due to RA failed') GA/ TIVA due to RA failed
        .item.red(data-value='TIVA', data-text='G GA/ TIVA due to RA indadequate') GA/ TIVA due to RA indadequate
        .item.red(data-value='TIVA', data-text='G GA/ TIVA due to RA wear off') GA/ TIVA due to RA wear off
        .item.red(data-value='TIVA', data-text='G GA/ TIVA due to RA high/total block') GA/ TIVA due to RA high/total block
        .header.green R Regional Anesthesia
        .header.small RS Spinal anesthesia
        .item.green(data-value='SB', data-text='RS Spinal Block') Spinal Block
        .item.green(data-value='SB Add narcotic', data-text='RS Spinal Narcotic') Spinal narcotic
        .divider
        .header.small RE Epidural anesthesia
        .item.green(data-value='EB', data-text='RE Epidural Block') Epidural Block
        .item.green(data-value='return', data-text='R option 1') QQQQQe
        .header.blue P PNB
        .item.blue(data-value='Angle NB', data-text='P Angle block') Angle Block
        .item.blue(data-value='Digitaial NB', data-text='P Digitial Nerve Block') Digitial Nerve Block
        .item.blue(data-value='Infraorbital NB', data-text='P Infraorbital Nerve Block') Infraorbital Nerve Block
        .item.blue(data-value='Inquinal NB', data-text='P Inquinal Nerve Block') Inquinal Nerve Block
        .item.blue(data-value='Intercostal NB', data-text='P Intercostal Nerve Block') Intercostal Nerve Block
        .item.blue(data-value='Femeral NB', data-text='P Femeral Nerve Block') Femeral Nerve Block
        .item.blue(data-value='Penile NB', data-text='P Penile Nerve Block') Penile Nerve Block
        .item.blue(data-value='Brachial NB', data-text='P Brachial Block') Brachial Block
        .item.blue(data-value='Ulnar NB', data-text='P Ulnar Nerve Block') Ulnar Nerve Block
        .item.blue(data-value='Popliteal NB', data-text='P Popliteal Nerve Block') Popliteal Nerve Block
        .item.blue(data-value='other NB', data-text='P ..... NB(other)') ..... NB
    .ui.negative.message(:class="err? '':'hidden'")
      .header We're sorry we can't apply that discount
      p That offer has expired

</template>

<style scoped>
  .ui.dropdown .menu>.divider {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .ui.dropdown .menu>.header {
    font-size: 1em;
    margin: 0rem;
    padding: 1rem;
    color: whitesmoke;
  }
  .ui.dropdown .menu>.header.small {
    font-size: 0.75em;
    color: black;
  }
  .ui.dropdown .menu>.item.green {
    color: darkgreen;
  }
  .ui.dropdown .menu>.header.green {
    background: green;
  }
  .ui.dropdown .menu>.item.red {
    color: red;
  }
  .ui.dropdown .menu>.header.red {
    background: red;
  }
  .ui.dropdown .menu>.item.blue {
    color: blue;
  }
  .ui.dropdown .menu>.header.blue {
    background: blue;
  }
  .ui.dropdown .menu>.item.orange {
    color: orange;
  }
  .ui.dropdown .menu>.header.orange {
    background: orange;
  }
</style>

<script>
  export default {
    data () {
      return {
        err: false
      }
    },
    props: {
      value: String,
      seleted: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      setColorText (head) {
        if (head === 'G') {
          head = 'red'
        } else if (head === 'R') {
          head = 'green'
        } else if (head === 'P') {
          head = 'blue'
        } else if (head === 'M') {
          head = 'orange'
        } else { head = 'black' }
        $(this.$refs.text).css('color', head)
      }
    },
    mounted () {
      $(this.$refs.dropdown).dropdown({
        onChange: (value, text) => {
          if (this.seleted !== [] & this.seleted.indexOf(value) === -1) {
            this.err = false
            this.$emit('input', value)
            var head = (text.split(' '))[0]
            this.setColorText(head)
          } else {
            if (value !== this.value) {
              this.err = true
              this.$emit('input', '')
              this.setColorText('b')
            }
          }
        }
      })
    }
  }
</script>
