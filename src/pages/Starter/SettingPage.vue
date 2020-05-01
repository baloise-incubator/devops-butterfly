<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <card>
          <h3>โลโก้</h3>
          <image-upload class="w-100" @change="onImageChange" select-text="Select Image" />
        </card>
      </div>
      <div class="col-md-6">
        <card>
          <h3>ชื่อระบบ</h3>
          <base-input type="text" placeholder="กรุณากรอกชื่อระบบ" />
        </card>
      </div>
      <div class="col-md-3">
        <card>
          <h3>สีระบบ</h3>
          <el-select
            class="select-danger w-100"
            placeholder="เลือกธีมหลัก"
            v-model="selects.simple"
          >
            <el-option
              v-for="option in selects.languages"
              class="select-danger"
              :value="option.value"
              :label="option.label"
              :key="option.label"
            >
            </el-option>
          </el-select>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Select, Option } from "element-ui";
import { Card, ImageUpload } from "src/components";
export default {
  components: {
    Card,
    ImageUpload,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      selects: {
        simple: "",
        languages: [
          { value: "Bahasa Indonesia", label: "Bahasa Indonesia" },
          { value: "Bahasa Melayu", label: "Bahasa Melayu" },
          { value: "Català", label: "Català" },
          { value: "Dansk", label: "Dansk" },
          { value: "Deutsch", label: "Deutsch" },
          { value: "English", label: "English" },
          { value: "Español", label: "Español" },
          { value: "Eλληνικά", label: "Eλληνικά" },
          { value: "Français", label: "Français" },
          { value: "Italiano", label: "Italiano" },
          { value: "Magyar", label: "Magyar" },
          { value: "Nederlands", label: "Nederlands" },
          { value: "Norsk", label: "Norsk" },
          { value: "Polski", label: "Polski" },
          { value: "Português", label: "Português" },
          { value: "Suomi", label: "Suomi" },
          { value: "Svenska", label: "Svenska" },
          { value: "Türkçe", label: "Türkçe" },
          { value: "Íslenska", label: "Íslenska" },
          { value: "Čeština", label: "Čeština" },
          { value: "Русский", label: "Русский" },
          { value: "ภาษาไทย", label: "ภาษาไทย" },
          { value: "中文 (简体)", label: "中文 (简体)" },
          { value: 'W">中文 (繁體)', label: 'W">中文 (繁體)' },
          { value: "日本語", label: "日本語" },
          { value: "한국어", label: "한국어" },
        ],
      },
    };
  },
};
</script>
