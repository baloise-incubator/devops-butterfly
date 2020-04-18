<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VulnerabilityOverview vulnerabilites="vulnerabilities"/>
    <ul>
      <li v-for="vulnerability in vulnerabilities" v-bind:key="vulnerability.image.organisation">
        <h4>{{vulnerability.vulnerabilityInfo.maxSeverity}}</h4>
        <h5>{{ vulnerability.image.organisation }}/{{ vulnerability.image.repository }}:{{ vulnerability.image.tag }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
  import VulnerabilityOverview from "@/components/VulnerabilityOverview.vue";
  import Vue from "vue"

  export default {
    name: "ImageVulnerabilities",
    components: {
      VulnerabilityOverview
    },
    data() {
      return {
        vulnerabilities: []
      };
    },
    mounted() {
      Vue.prototype.$http.get("/api/vulnerabilities")
              .then(res => {
                this.vulnerabilities = res.data;
              })
              .catch(error => {
                console.log(error)
              })
    }
  };
</script>
