<template>
  <div id="app">
    <h3>График загруженности</h3>
   <vue-timeline :data="events"></vue-timeline>
  </div>
</template>

<script>
import VueTimeline from "./components/VueTimeline";
const mounth = 7;
const year = 2023;
export default {
  name: 'App',
  components: {
    VueTimeline
  },
  data() {
    return {
      events: [{
        name: "КИТ АПС",
        start: Date.now(),
        end: new Date(year, mounth, 15),
      }, {
        name: "КИТ АО",
        start: Date.now()+1,
        end: new Date(year, mounth, 10),
      }, {
        name: "ОБЪЕКТ СИСТЕМА",
        start: Date.now()+1,
        end: new Date(year, mounth, 25),
      }]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
