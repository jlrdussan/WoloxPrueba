<template>
  <diV class="grid-benefits">
    <div class="item1">
      <div>
        <h1 style="font-size: 28px; font-family: Montserrat">
          {{ $t("benefits.title") }}
          <span style="color: #2aa7df">;)</span>
        </h1>
      </div>

      <div class="benefits">
        <div v-for="(item, index) in benefits" :key="index">
          <CardBenefits :benefitImg="item.img" :benefitName="item.name" />
        </div>
      </div>
    </div>
    <div class="item2"><div class="bar"></div></div>
    <div class="item3">
      <div class="container-tank">
        <h1 class="title">
          <span style="font-family: Montserrat-Semibold">
            {{ $t("benefits.titleTank.text1") }} </span
          ><span style="color: #2aa7df; font-family: Montserrat-Semibold"
            >{{ $t("benefits.titleTank.text2") }} </span
          ><br />
          <span style="font-size: 80%; font-family: Montserrat"
            >{{ $t("benefits.titleTank.text3") }}
          </span>
        </h1>
        <a href="https://www.wolox.com.ar/" class="btn-know">
          <strong>{{ $t("benefits.btnLearnMore") }} </strong>
        </a>
      </div>
      <Footer />
    </div>
  </diV>
</template>

<script>
import { ref } from "vue";
import Footer from "./Footer.vue";
import CardBenefits from "../components/CardBenefits.vue";
export default {
  components: { Footer, CardBenefits },
  setup() {
    const benefits = ref([
      {
        name: "1",
        img: "Ic_Hour.svg",
      },
      {
        name: "2",
        img: "Ic_HomeOffice.svg",
      },
      {
        name: "3",
        img: "Ic_Workshops.svg",
      },
      {
        name: "4",
        img: "Ic_DrinkSnacks.svg",
      },
      {
        name: "5",
        img: "Ic_laptop.svg",
      },
      {
        name: "6",
        img: "Ic_brain.svg",
      },
    ]);
    return {
      benefits,
    };
  },
};
</script>

<style scope>
.benefits {
  display: grid;
  align-content: center;
  align-self: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-auto-rows: 9rem;
  width: 100%;
}

.grid-benefits {
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr auto 1fr;
  grid-auto-columns: 1fr;
}

.item1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.grid-benefits .item2 {
  display: flex;
  justify-content: center;
}

.grid-benefits .item3 {
  background-image: image-set(
    url("../assets/Backgrounds/Bg_Footer.png") 1x,
    url("../assets/Backgrounds/Bg_Footer@2x.png") 2x,
    url("../assets/Backgrounds/Bg_Footer@3x.png") 3x
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.btn-know {
  background: #2aa7df;
  border-radius: 16px;
  padding: 10px 60px;
  color: white;
}

.btn-know:hover {
  border: 3px dotted #2aa7df;
  color: #2aa7df;
  background: #fff;
}

.bar {
  width: 95%;
  height: 2px;
  box-shadow: 2px 2px 5px #999;
}

@media all and (max-width: 600px) {
  .benefits {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-auto-rows: 8rem;
    width: 100%;
  }
}
</style>
