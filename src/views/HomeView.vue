<template>
  <div class="home"></div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState("approvalStore", ["service", "docInfo"]),
  },
  methods: {
    ...mapMutations("approvalStore", ["set_service", "set_doc_info"]),
  },
  created() {
    this.set_service(this.$route.query.service); // 서비스 종류 세팅

    this.set_doc_info({
      //서비스 별로 파라미터로 보낼 정보 세팅 샘플
      type: this.$route.query.type,
      key: this.$route.query.key,
    });
  },
  mounted() {
    /* eslint-disable */
    woff
      .init({
        woffId: "6M4D9iS1o3oATtHNVJjS8w", // 발행된 WOFF ID
      })
      .then(() => {
        this.$router.push(this.service); //서비스 페이지로 이동
      })
      .catch((err) => {
        // 초기화 처리 중 오류가 발생한 경우
        console.log(err.code, err.message);
      });
  },
};
</script>
