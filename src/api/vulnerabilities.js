import Api from './Api'

export default {
  fetchVulnerabilities () {
    return Api.get('api/vulnerabilities');
  }
}

