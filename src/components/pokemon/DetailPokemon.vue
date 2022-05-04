<template>
  <div style="width: 100%; z-index: 50" v-if="showDetail">
    <div class="container-detail">
      <div class="poke-detail">
        <div style="display: flex; justify-content: end">
          <button class="btn-close" @click="close()">X</button>
        </div>
        <div v-if="pokemonInfo">
          <strong class="">{{ pokemonInfo.name }}</strong>
          <div class="">
            <img
              id="img-pokemon"
              style="width: 90%"
              :src="pokemonInfo.sprites.front_default"
            />
          </div>
          <div class="bar-detail"></div>
          <div style="display: flex; justify-content: space-between">
            <strong>height</strong><span>{{ pokemonInfo.height }}</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <strong>weight</strong><span>{{ pokemonInfo.weight }}</span>
          </div>
          <div class="bar-detail"></div>
          <strong>abilities</strong>

          <li
            v-for="(item, index) in pokemonInfo.abilities"
            :key="index"
            style="display: flex; justify-content: space-between"
          >
            {{ item.ability.name }}
          </li>
          <div class="bar-detail"></div>
          <div style="display: flex; justify-content: space-between">
            <strong>species</strong><span>{{ pokemonInfo.species.name }}</span>
          </div>
        </div>
        <div style="dispaly: flex; padding: 20px 5px; flex-wrap: wrap" v-else>
          <h3>No se en contro ningun pokemon con los parametros enviados :(</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDetail: {
      type: Boolean,
      default: false,
    },
    pokemonInfo: { type: Object, defaul: {} },
    closeDetailPokemon: { type: Function },
  },
  setup(props) {
    const close = () => {
      props.closeDetailPokemon();
    };

    return { close };
  },
};
</script>

<style>
.btn-close {
  background: transparent;
  border-radius: 0.5rem;
  padding: 4px 8px;
  background-color: gold;
  color: red;
  font-weight: bold;
}

.btn-close:hover {
  background-color: red;
  color: gold;
}

.bar-detail {
  margin: 10px 0;
  height: 1px;
  width: 100%;
  border-top: gold solid 1px;
}

.poke-detail {
  --tw-bg-opacity: 1;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-radius: 0.5rem;
  border-left-width: 4px;
  border-right-width: 4px;
  min-width: 20%;
  max-height: 80%;
  box-shadow: inset 0 0 20px gold;
  z-index: 50;
}

.container-detail {
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

@media (max-width: 600px) {
  .poke-detail {
    min-width: 60%;
    max-height: 7 0%;
  }
}

@media (min-width: 600px) {
  .poke-detail {
    min-width: 40%;
    max-height: 7 0%;
  }
}

@media (min-width: 800px) {
  .poke-detail {
    min-width: 25%;
    max-height: 7 0%;
  }
}

@media (min-width: 1000px) {
  .poke-detail {
    min-width: 20%;
    max-height: 7 0%;
  }
}
</style>
