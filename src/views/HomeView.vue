<template>
  <div class="home"></div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState("approvalStore", ["docInfo"]),
    ...mapState("userStore", ["userInfo"]),
  },
  data: () => ({
    service: "",
    webUrl: "",
  }),
  methods: {
    ...mapMutations("approvalStore", ["set_doc_info"]),
    ...mapMutations("userStore", ["set_user_info"]),
  },
  created() {
    /* eslint-disable */
    this.service = this.$route.query.service;

    switch (this.service) {
      case "approval":
        this.set_doc_info({
          docId: this.$route.query.docId,
          formDocType: this.$route.query.formDocType,
          formURL: this.$route.query.formURL,
        });

        this.webUrl =
          "https://gw.aekyung.kr/myoffice/ezApproval/formContainer/contDocView_Cross.aspx?DocID=" +
          this.docInfo.docId +
          "&DocHref=" +
          this.docInfo.formURL +
          "&formID=2021000191&orgDocid=&DocState=" +
          this.docInfo.formDocType;

        break;
      case "calendar":
        this.webUrl = "https://gw.aekyung.kr?ownerId=";
        break;
      default:
        window.alert(this.service);
        window.alert(this.$route.query.service);
        window.alert("잘못된 url 형식입니다.");
        woff.closeWindow();
    }
  },
  mounted() {
    const connectOS = woff.getOS();

    if (connectOS === "web") {
      woff.openWindow({
        url: this.webUrl,
      });
      return;
    } else if (connectOS === "ios" || connectOS === "android") {
      woff
        .init({
          woffId: "6M4D9iS1o3oATtHNVJjS8w", // 발행된 WOFF ID
        })
        .then(() => {
          if (!woff.isLoggedIn()) {
            //로그인 유무 확인
            window.alert("네이버웍스 로그인 후 사용 가능합니다.");
            woff.closeWindow();
            return;
          } else {
            woff.getProfile().then((v) => {
              this.set_user_info({
                userId: v.userId,
                domainId: v.domainId,
                displayName: v.displayName,
              });
              this.$router.push(this.service);
            });
          }
        })
        .catch((err) => {
          // 초기화 처리 중 오류가 발생한 경우
          console.log(err.code, err.message);
        });
    }
  },
};
</script>
