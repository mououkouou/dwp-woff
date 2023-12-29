<template>
  <div class="approval"></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ApprovalView",
  computed: {
    ...mapState("approvalStore", ["docInfo", "service"]),
  },
  data: () => ({ webURL: "" }),
  mounted() {
    /* eslint-disable */
    if (woff.getOS() === "web") {
      //PC 접근
      woff.openWindow({
        url:
          "https://gw.aekyung.kr:11000/LoginToRedirect2.aspx?" +
          "type=ING" +
          "&key=" +
          this.docInfo.key,
      });
      window.close(); //창 안닫힘
      return;
    } else if (woff.getOS() === "ios" || woff.getOS() === "android") {
      //MOBILE 접근
      if (!woff.isLoggedIn()) {
        //로그인 유무 확인
        window.alert("네이버웍스 로그인 후 사용 가능합니다.");
        woff.closeWindow();
        return;
      } else {
        woff.getProfile().then((v) => {
          woff.openWindow({
            url:
              "https://axdwp.aekyung.kr/naverworksbots/woff.do?userId=" +
              v.userId +
              "&displayName=" +
              v.displayName +
              "&domainId=" +
              v.domainId +
              "type=ING" +
              "key=" +
              this.docInfo.key,
          });
        });
      }
    }
  },
};
</script>
