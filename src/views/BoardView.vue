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
      // const encodeItemID = encodeURIComponent(this.boardUrl.itemID);
      // const encodeBoardID = encodeURIComponent(this.boardUrl.boardID);
      // window.open(
      //   "https://axdwp.aekyung.kr/ezBoard/boardItemView.do?" +
      //     "itemID=" +
      //     encodeItemID +
      //     "&boardID=" +
      //     encodeBoardID
      // );
      window.open(
        "https://axdwp.aekyung.kr/ezBoard/boardItemView.do?itemID=%7BB155EE68-7C16-46BA-AAE7-23D8FD28BF9D%7D&boardID=%7B57cd4ad0-07b2-40fa-8faf-be622e002ea5%7D"
      );
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
