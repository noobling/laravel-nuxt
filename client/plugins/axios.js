import axios from 'axios'
import swal from 'sweetalert2'

export default ({ app, store, redirect }) => {
  axios.defaults.baseURL = process.env.apiUrl

  axios.interceptors.request.use(request => {
    request.baseURL = process.env.apiUrl
    
    store.state.loading = true

    return request
  })

  axios.interceptors.response.use(response => {
    store.state.loading = false
    
    return response
  }, error => {

    const { status } = error.response || {}

    if (status >= 500) {
      swal({
        type: 'error',
        title: 'Ooops...',
        text: 'The fabric of space and time has been disturbed and highly trained monkeys are on it.',
      })
    }

    else if (status === 401 && store.getters['auth/check']) {
      swal({
        type: 'error',
        title: 'Ooops...',
        text: 'Your token has expired so you have to login again',
      }).then(() => {
        store.commit('auth/LOGOUT')

        redirect({ name: 'login' })
      })
    }

    else if (status >= 400) {
      swal({
        type: 'error',
        title: 'Oooops...',
        html: `Something went wrong, heres what the server told us: <div><pre style="text-align:left">${JSON.stringify(error.response.data, undefined, 2)}</pre></div>`
      })
    }

    return Promise.reject(error)
  })
}