<template>
  <van-form ref="form">
    <van-field v-for="item in formData"
               :key="item['query']"
               v-model="form[item['query']]"
               :readonly="item['query'] === 'username' && type==='userInfo'"
               name="用户名"
               :type="item['type']"
               :label="item['label']"
               :placeholder="item['placeholder']"
               :rules="validates[item['query']] | formatRuleTrigger" />
  </van-form>
</template>

<script>
import FORM_DATA from "@/config/form.config";
import VALIDATE_DATE from "@/config/validate.config";
import _ from "lodash";
export default {
  name: "BaseForm",
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      testVal: "",
      form: {}
    };
  },

  created() {
    if (this.type === "userInfo") {
      //筛选排除 vuex中userInfo里不存在 form.config['userInfo']中的项
      this.form = this.formUserInfo;
    }
  },
  computed: {
    formUserInfo() {
      return Object.fromEntries(
        Object.entries(this.$store.getters.userInfo).filter(([key]) => {
          return FORM_DATA["userInfo"].find(item => {
            return key == item["query"];
          });
        })
      );
    },
    formData() {
      return FORM_DATA[this.type].filter(item => {
        return item.query !== "avatar";
      });
    },
    validates() {
      return VALIDATE_DATE;
    },
    userFileAction() {
      return process.env.VUE_APP_USER_UPLOAD_PATH;
    }
  },
  filters: {
    formatRuleTrigger(rules) {
      return rules?.map(item => {
        item.trigger = _.padStart(_.capitalize(item.trigger), 6, "on");
        return item;
      });
    }
  },
  watch: {
    type(newType) {
      this.initForm();
      if (newType === "userInfo") {
        this.form = this.formUserInfo;
      }
    }
  },
  methods: {
    initForm() {
      //重置表单字段 以及校验状态
      this.form = {};
    }
  }
};
</script>

<style lang="stylus" scoped></style>