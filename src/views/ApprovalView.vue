<template>
  <div class="approval"></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ApprovalView",
  computed: {
    ...mapState("approvalStore", ["docInfo"]),
  },
  mounted() {
    /* eslint-disable */
    woff
      .init({
        woffId: "6M4D9iS1o3oATtHNVJjS8w", // 발행된 WOFF ID
      })
      .then(() => {
        console.log(woff.getOS());
        if (!woff.isLoggedIn()) {
          //로그인 유무 확인
          window.alert("네이버웍스 로그인 후 사용 가능합니다.");
          woff.closeWindow();
          return;
        } else {
          woff.getProfile().then((v) => {
            woff.openWindow({
              url:
                "https://test.commmmmmm/userId=" +
                v.userId +
                "&displayName=" +
                v.displayName +
                "&domainId=" +
                v.domainId +
                "&docId=" +
                this.docInfo.docInfo +
                "&formDocType=" +
                this.docInfo.formDocType +
                "&formURL=" +
                this.docInfo.formURL,
            });
          });
        }
      })
      .catch((err) => {
        // 초기화 처리 중 오류가 발생한 경우
        console.log(err.code, err.message);
      });
  },
};
</script>
