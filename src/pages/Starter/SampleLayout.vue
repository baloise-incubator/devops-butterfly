<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <sidebar-fixed-toggle-button />
    <side-bar
      :background-color="sidebarBackground"
      short-title="KVC"
      title="Kasem Vet Clinic"
    >
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: $t('แดชบอร์ด'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/dashboard',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('เริ่มการรักษา'),
            icon: 'tim-icons icon-zoom-split',
            path: '/diagnose',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('การรักษาทั้งหมด'),
            icon: 'tim-icons icon-paper',
            path: '/cure',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('คนไข้'),
            icon: 'tim-icons icon-bullet-list-67',
            path: '/patient',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('การนัดหมาย'),
            icon: 'tim-icons icon-email-85',
            path: '/booking',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('หมวดหมู่'),
            icon: 'tim-icons icon-components',
            path: '/category',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('ผู้ใช้งาน'),
            icon: 'tim-icons icon-single-02',
            path: '/user',
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('ตั่งค่าระบบ'),
            icon: 'tim-icons icon-settings-gear-63',
            path: '/setting',
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-panel" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
      <router-view name="header"></router-view>

      <div
        :class="{ content: !$route.meta.hideContent }"
        @click="toggleSidebar"
      >
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </zoom-center-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./SampleNavbar.vue";
import ContentFooter from "./SampleFooter.vue";
import DashboardContent from "../Layout/Content.vue";
import SidebarFixedToggleButton from "../Layout/SidebarFixedToggleButton.vue";
import { SlideYDownTransition, ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    SidebarFixedToggleButton,
    DashboardContent,
    SlideYDownTransition,
    ZoomCenterTransition,
  },
  data() {
    return {
      sidebarBackground: "blue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    initScrollbar() {
      let docClasses = document.body.classList;
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        initScrollbar("sidebar");
        initScrollbar("main-panel");
        initScrollbar("sidebar-wrapper");

        docClasses.add("perfect-scrollbar-on");
      } else {
        docClasses.add("perfect-scrollbar-off");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}

.main-panel .zoomIn {
  animation-name: zoomIn95;
}

@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
