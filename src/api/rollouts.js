import Api from './Api'

export default {
  fetchRollouts () {
    return Api.get('api/rollouts');
  }
}

