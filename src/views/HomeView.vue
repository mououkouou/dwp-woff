<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {},
  methods: {},
  created() {},
  mounted() {
    const woffId = "ON3IesXcI8cml0qBEipzvw";
    woff
      .init({
        woffId: woffId,
      })
      .then(() => {
        if (woff.getOS() === "web") {
          if (!woff.isLoggedIn()) {
            woff.login({ domain: "aekyung.kr" });
            woff.init({ woffId: woffId });
          } else {
            woff.getProfile().then((v) => {
              alert(v.id);
            });
          }
        } else if (woff.getOS() === "ios" || woff.getOS() === "android") {
          if (!woff.isLoggedIn()) {
            woff.login({ domain: "aekyung.kr" });
            woff.init({ woffId: woffId });
          } else {
            woff.getProfile().then((v) => {
              alert(v.id);
            });
          }
        }
      })
      .catch((e) => {
        // 초기화 처리 중 오류가 발생한 경우
        window.alert(e.code + "\n" + e.message);
        console.log(e.code, e.message);
      });
  },
};
</script>
