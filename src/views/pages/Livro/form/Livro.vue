<template>
  <div class="ui-r-view">
    <h2>Cadastro de Livros</h2>
    <div class="ui-form">
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-5">
            <label for="firstname1">Nome Livro</label>
            <InputText v-model="form.livro" id="firstname1" type="text"/>
        </div>
        <div class="p-field p-col-4">
            <label for="firstname1">Nome Autor</label>
            <InputText v-model="form.nomeAutor" id="firstname1" type="text"/>
        </div>
        <div class="p-field p-col-3">
            <label for="firstname1">ISBN</label>
            <InputText v-model="form.isbn" id="firstname1" type="text"/>
        </div>
      </div>
    </div>
    <div class="ui-btns-form">
      <Button @click="save()" label="Salvar" class=" p-button-info p-button-rounded p-button-sm"/>
      <Button @click="cancel()" label="Calcelar" class="p-button-danger p-button-rounded p-button-sm ui-left"/>
    </div>
  </div>
</template>
<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import util from '../../../../util/util'
var objForm = {
  id: 0,
  livro: '',
  nomeAutor: '',
  isbn: '',
  nomeUsuario: ''
}
export default {
  data: () => ({
    form: {}
  }),
  setup () {
    return {}
  },
  mounted () {
    this.getbyId()
    this.form = JSON.parse(JSON.stringify(objForm))
  },
  methods: {
    async getbyId () {
      await util.get('livro/'+ this.$route.params.id).then(res => {
        this.form = res
      })
    },
    async save () {
      this.form.nomeUsuario = sessionStorage.getItem('usuario')
      await util.post('livro', this.form).then(res => {
        console.log(res)
        this.$router.push('livro');
      })
    },
    cancel () {
      this.$router.push('livro');
    }
  },
  components: {
    Button,
    InputText
  }
}
</script>

<style lang="scss" scoped>

</style>