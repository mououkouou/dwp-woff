<template>
  <div class="home"></div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState("approvalStore", ["docInfo"]),
  },
  methods: {
    ...mapMutations("approvalStore", ["set_doc_info"]),
  },
  created() {
    this.set_doc_info({
      docId: this.$route.query.docId,
      formDocType: this.$route.query.formDocType,
      formURL: this.$route.query.formURL,
    });

    this.$router.push("/approval");
  },
};
</script>
