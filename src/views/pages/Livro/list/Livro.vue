<template>
  <div class="ui-r-view">
    <h2>Livros</h2>
    <div>
      <div class="ui-btns">
        <Button @click="save(0)" label="Adicionar" class=" p-button-info p-button-rounded p-button-sm"/>
        <Button @click="save(1)" label="Editar" class=" p-button-help p-button-rounded p-button-sm ui-left"/>
        <Button @click="onDelete()"  label="Excluir" class="p-button-danger p-button-rounded p-button-sm ui-left"/>
      </div>
      <div style="margin-top: 20px;">
        <div class="p-fluid">
          <div class="p-field">
              <label for="firstname1">Busca por qualquer parte do texto</label>
              <InputText v-model="busca" @keyup="onFilter(busca)" id="firstname1" type="text"/>
          </div>
        </div>
      </div>
    </div>
    <div class="ui-table">
      <DataTable :value="dados" :scrollable="true" scrollHeight="400px" v-model:selection="select" selectionMode="single" dataKey="id" responsiveLayout="scroll" >
          <Column field="livro" header="Nome do Livro"></Column>
          <Column field="nomeAutor" header="Nome Autor"></Column>
          <Column field="isbn" header="ISBN"></Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import util from '../../../../util/util'
import InputText from 'primevue/inputtext'
export default {
  data: () => ({
    dados: null,
    select: null,
    busca: '',
  }),
  setup () {
    return {}
  },
  mounted () {
    this.getAll()
  },
  methods: {
    getAll () {
      util.get('livro').then(res => {
        this.dados = res
      })
    },
    onFilter (busca) {
      if(busca === '') {
        this.getAll()
      } else {
        util.get('filtrolivro/' + busca).then(res => {
          this.dados = res
        })
      }
    },
    save (id) {
      if(id !== 0 && this.select === null){
        alert("selecione um registro");
      } else {
        if(id !== 0) {
          id = this.select.id
        }
        this.$router.push({name: 'FormLivro', params: { id:  id }})
      }
    },
    onDelete(id){
      if(this.select === null){
        alert("selecione um registro");
      } else {
        id = this.select.id
        util.delet('livro/' + id).then(res => {
          this.dados = res
          this.getAll()
        })
      }
    }
  },
  components: {
    Button,
    DataTable,
    Column,
    InputText
  }
}
</script>

<style lang="scss" scoped>

</style>