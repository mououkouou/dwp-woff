<template>
  <div class="home"></div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState("serviceStore", ["service"]),
    ...mapState("approvalStore", ["docInfo"]),
    ...mapState("boardStore", ["boardInfo"]),
  },
  methods: {
    ...mapMutations("serviceStore", ["set_service"]),
    ...mapMutations("approvalStore", ["set_doc_info"]),
    ...mapMutations("boardStore", ["set_board_url"]),
  },
  created() {
    /* eslint-disable */
    console.log("start");
    // this.set_service(this.$route.query.service); // 서비스 종류 세팅

    // if (this.service) {
    //   switch (this.service) {
    //     case "approval":
    //       this.set_doc_info({
    //         //서비스 별로 파라미터로 보낼 정보 세팅 샘플
    //         key: this.$route.query.key,
    //       });
    //       break;
    //     case "board":
    //       this.set_board_url({
    //         mobile: this.$route.query.linkUrlMobile,
    //         pc: this.$route.query.linkUrl,
    //       });
    //       break;
    //     default:
    //       window.alert("잘못된 url 입니다.");
    //       woff.closeWindow();
    //   }
    // }
  },
  mounted() {
    woff
      .init({
        woffId: "gvJ0nHfADuFV83e-2hZRgw", // 발행된 WOFF ID
      })
      .then(() => {
        woff.getProfile().then((v) => {
          alert(v.userId);
        });
        //this.$router.push(this.service); //서비스 페이지로 이동
      })
      .catch((err) => {
        // 초기화 처리 중 오류가 발생한 경우
        console.log(err.code, err.message);
      });
  },
};
</script>
