import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        login: '',
        senha: ''
      }
    }
  },
  setup () {
    return {}
  },
  methods: {
    login (form) {
      console.log(form)
      axios.post('http://localhost:8089/login', form).then(res => {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('usuario', res.data.usuarioLogado.login)
        this.$router.push('livro')
      }).catch(err => {
        sessionStorage.setItem('token', '')
        console.log(err)
        // this.$toast.add({ severity: 'error', summary: 'SSCOntainer', detail: err.response.data.errors[0], life: 3000 })
      })
    },
    registro () {
      this.$router.push('registro')
    }
  },
  components: {
    InputText,
    Password,
    Button
  }
}
