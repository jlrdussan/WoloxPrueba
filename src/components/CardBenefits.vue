<template>
  <div class="card-benefits">
    <div class="card-header">
      <img style="width: 60px" :src="require('../assets/' + benefitImg)" />
    </div>
    <div class="card-footer">
      <span>{{ $t(`benefits.benefits.${benefitName}`) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    benefitImg: { type: String, defaul: {} },
    benefitName: { type: String, defaul: {} },
  },
  setup() {},
};
</script>

<style>
.card-benefits {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  justify-items: center;
}

.card-benefits .card-header {
  align-self: center;
}

.card-benefits .card-footer {
  display: flex;
  align-self: center;
  max-width: 90%;
}

@media all and (max-width: 600px) {
  .card-header img {
    width: 45px;
  }
}
</style>
