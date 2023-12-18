<template>
  <div class="approval"></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ApprovalView",
  computed: {
    ...mapState("approvalStore", ["docInfo"]),
    ...mapState("userStore", ["userInfo"]),
  },
  mounted() {
    /* eslint-disable */
    if (!woff.isLoggedIn()) {
      //로그인 유무 확인
      window.alert("네이버웍스 로그인 후 사용 가능합니다.");
      woff.closeWindow();
      return;
    } else {
      woff.openWindow({
        //그룹웨어 인증 및 전결 이동 처리 페이지로 이동
        url:
          "https://test.commmmmmm?userId=" +
          this.userInfo.userId +
          "&displayName=" +
          this.userInfo.displayName +
          "&domainId=" +
          this.userInfo.domainId +
          "&docId=" +
          this.docInfo.docId +
          "&formDocType=" +
          this.docInfo.formDocType +
          "&formURL=" +
          this.docInfo.formURL,
      });
    }
  },
};
</script>
