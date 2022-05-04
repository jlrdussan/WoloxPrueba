<template>
  <div @click="showDetail(idPoke)" class="card-pokemon">
    <div class="header-card">
      <div class="container-card" style="width: 115px; height: 115px">
        <img
          id="img-pokemon"
          style="object-fit: fill; width: 100%; height: 100%"
          :src="urlImg + idPoke + '.png'"
        />
      </div>
    </div>
    <div class="footer-card">
      <span>{{ idPoke }}</span>
      <div
        style="box-shadow: inset 0 0 20px gold; width: 80%; height: 1px"
      ></div>
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    idPoke: { type: String, defaul: 0 },
    name: { type: String, defaul: "" },
    showDetailPokemon: { type: Function },
  },
  setup(props) {
    const urlImg = ref(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    );

    const showDetail = (idPoke) => {
      props.showDetailPokemon(idPoke);
    };

    return { showDetail, urlImg };
  },
};
</script>

<style scoped>
.footer-card {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70%;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  gap: 8px;
}

.header-card {
  width: 100%;
  background-color: #2aa7df;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  justify-content: center;
  height: 35%;
}

.container-card {
  position: relative;
}

.container-card #img-pokemon {
  position: absolute;
  background-color: #f2f5fa;
  border-radius: 9999px;
  z-index: 0;
  top: 30%;
  left: 0;
}

.card-pokemon {
  transition-duration: 500ms;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  height: 100%;
  border-radius: 6px;
  box-shadow: inset 0 0 20px gold;
}

.card-pokemon:hover {
  transform: scale(1.1);
}
</style>
>
