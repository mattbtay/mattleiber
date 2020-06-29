<template>
  <div id="app">
    <p></p>
    <p class="text-white font-weight-light">{{ text.column_2 }}</p>
    <p class="text-white text-center font-italic font-weight-lighter">
      episode {{ text.column_1 }}
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    const sheetData = fetch("https://sheetlabs.com/MBT/mattlieberis")
      .then((response) => response.json())
      .then((data) => {
        var rand = Math.floor(Math.random() * Math.floor(data.length));
        return (this.text = data[rand]);
      });
    sheetData;
  },
};
</script>

<style>
@import url("/node_modules/bootstrap/dist/css/bootstrap.css");
body {
  background: #d32361;
}
</style>
