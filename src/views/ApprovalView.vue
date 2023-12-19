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

    const connectOS = woff.getOS();
    if (connectOS === "web") {
      woff.openWindow({
        url:
          "https://gw.aekyung.kr/myoffice/ezApproval/formContainer/contDocView_Cross.aspx?DocID=" +
          this.docInfo.docId +
          "&DocHref=" +
          this.docInfo.formURL +
          "&formID=2021000191&orgDocid=&DocState=" +
          this.docInfo.formDocType,
      });
      return;
    }
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
            this.docInfo.docId +
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
