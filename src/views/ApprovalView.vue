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
  },
};
</script>
