<template>
  <div class="board"></div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BoardView",
  computed: {
    ...mapState("boardStore", ["boardUrl"]),
  },
  data: () => ({ webURL: "" }),
  mounted() {
    /* eslint-disable */
    if (woff.getOS() === "web") {
      //PC 접근
      woff.openWindow({
        url: this.boardUrl.pc,
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
              "https://axdwp.aekyung.kr/naverworksbots/woff.do?" +
              "service=board" +
              "&userId=" +
              v.userId +
              "&displayName=" +
              v.displayName +
              "&domainId=" +
              v.domainId +
              "&linkUrlMobile=" +
              this.boardUrl.mobile,
          });
        });
      }
    }
  },
};
</script>
