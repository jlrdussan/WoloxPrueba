<template>
  <div style="width: 100%" v-if="preloaderActive">
    <div class="container-pre">
      <div class="img-pre">
        <div style="display: flex; border-radius: 9999px" class="lds-ellipsis">
          <span> </span>
          <span></span>
          <span style=""></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    preloaderActive: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
};
</script>

<style>
.img-pre span {
  --tw-bg-opacity: 1;
  background-repeat: no-repeat;
  background-image: url("../assets/pokeball.svg");
}
.img-pre {
  margin: auto;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-radius: 0.5rem /* 8px */;
  width: 10rem /* 160px */;
  height: 4rem /* 64px */;
  height: 4rem /* 64px */;
  border-left-width: 4px;
  border-right-width: 4px;
}

.container-pre {
  margin: auto;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
}

.lds-ellipsis {
  margin: 0 auto;
  position: relative;
  top: 50%;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 84px;
  text-align: center;
  z-index: 1;
}
.lds-ellipsis span {
  padding: 10px;
  display: inline-flex;
  margin: 4px;
  width: 15px;
  height: 15px;
  border-radius: 9999px;
  -webkit-animation: ball-pulse-sync 1s 0s infinite ease-in-out;
  animation: ball-pulse-sync 1 s 0s infinite ease-in-out;
}
.lds-ellipsis span:nth-child(1) {
  -webkit-animation: ball-pulse-sync 1s -0.14s infinite ease-in-out;
  animation: ball-pulse-sync 1s -0.14s infinite ease-in-out;
}
.lds-ellipsis span:nth-child(2) {
  -webkit-animation: ball-pulse-sync 1s -70ms infinite ease-in-out;
  animation: ball-pulse-sync 1s -70ms infinite ease-in-out;
}
@-webkit-keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
