<template>
  <div class="container-poke">
    <div
      style="
        padding: 10px 0;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
      "
    >
      <input
        :placeholder="$t('pokemon.placeholder')"
        v-model="search"
        type="text"
        class="input-search"
        id="input-search"
      /><button id="btn-search" @click="listPokemonIdName(search)">
        {{ $t("pokemon.search") }}
      </button>
      <button
        id="btn-clean"
        style="
          border: solid 1px #2aa7df;
          background: white;
          border-radius: 16px;
          padding: 3px 20px;
          color: #2aa7df;
          font-weight: bold;
          background-color: #f2f5fa;
        "
        @click="clean()"
      >
        {{ $t("pokemon.clean") }}
      </button>
    </div>

    <!--  -->

    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        justify-content: flex-end;
        align-items: center;
      "
    >
      <!-- Help text -->
      <div style="display: flex; justify-content: center">
        <select @change="changePage()" v-model="page" class="select-page">
          <option
            v-for="(item, index) in itemsPerPage"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <span
        v-if="itemsLength > 0"
        style="
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: rgb(55 65 81 / 1);
        "
      >
        {{ $t("pokemon.pagination.text1") }}
        <span style="font-weight: 600; color: rgb(17 24 39 / 1)">{{
          initial
        }}</span>
        {{ $t("pokemon.pagination.text2") }}
        <span style="font-weight: 600; color: rgb(17 24 39 / 1)">{{
          final
        }}</span>
        {{ $t("pokemon.pagination.text3") }}
        <span style="font-weight: 600; color: rgb(17 24 39 / 1)">{{
          itemsLength
        }}</span>
        {{ $t("pokemon.pagination.text4") }}
      </span>
      <div class="inline-flex xs:mt-0">
        <!-- Buttons -->
        <button
          @click="prev()"
          :disabled="pagePrev == null"
          :class="{
            ' btn-disabled': pagePrev == null,
          }"
          class="btn-prev-next"
        >
          <img src="../assets/prev.svg" />
        </button>
        <button
          @click="next()"
          :disabled="pageNext == null"
          :class="{
            'btn-disabled ': pageNext == null,
          }"
          class="btn-prev-next"
        >
          <img src="../assets/next.svg" />
        </button>
      </div>
    </div>

    <!--  -->

    <div class="container-pokemon">
      <div
        id="list-poke"
        v-for="(item, index) in pokemons.results"
        :key="index"
      >
        <CardPokemon
          id="CardPokemon"
          :key="index"
          :idPoke="item.id"
          :name="item.name"
          :showDetailPokemon="showDetailPokemon"
        />
      </div>
    </div>
    <Preloader :preloaderActive="loading" />
    <DetailPokemon
      id="DetailPokemon"
      :pokemonInfo="pokemonInfo"
      :showDetail="showDetail"
      :closeDetailPokemon="closeDetailPokemon"
    />
  </div>
</template>

<script>
import {
  getPokemon,
  getPokemonIdName,
  getPokemonUrl,
} from "../services/Api_Pokemon";
import { ref, onMounted } from "vue";
import CardPokemon from "../components/pokemon/CardPokemon.vue";
import Preloader from "../components/Preloader.vue";
import DetailPokemon from "../components/pokemon/DetailPokemon.vue";
export default {
  components: { CardPokemon, Preloader, DetailPokemon },
  setup() {
    const search = ref("");
    const loading = ref(false);
    const showDetail = ref(false);
    const pokemons = ref([]);
    const pokemonInfo = ref({});

    const itemsPerPage = ref([5, 10, 20, 50, 100]);
    const page = ref(20);
    const itemsLength = ref(0);
    const pagePrev = ref(null);
    const pageNext = ref(null);
    const initial = ref();
    const final = ref();

    onMounted(async () => {
      await listPokemons();
    });

    const listPokemons = async () => {
      loading.value = true;
      pokemons.value = await getPokemon(page.value);
      await paginationOnmounted(
        pokemons.value.previous,
        pokemons.value.next,
        pokemons.value.count
      );
      loading.value = false;
      return pokemons.value;
    };

    const listPokemonIdName = async (idName) => {
      loading.value = true;
      const res = await getPokemonIdName(idName);
      pokemonInfo.value = res;
      showDetail.value = true;
      loading.value = false;
      return pokemonInfo.value;
    };

    const clean = async () => {
      search.value = "";
    };

    const showDetailPokemon = async (id) => {
      loading.value = true;
      const res = await getPokemonIdName(id);
      pokemonInfo.value = res;
      showDetail.value = true;
      loading.value = false;
    };

    const closeDetailPokemon = async () => {
      showDetail.value = false;
    };

    const getQuery = (url) => {
      const queryUrl = url.split("?");
      const urlParams = new URLSearchParams(queryUrl[1]);
      return urlParams;
    };

    const paginationOnmounted = async (Prev, Next, count) => {
      pagePrev.value = Prev;
      pageNext.value = Next;
      itemsLength.value = count;
      const urlParams = getQuery(pageNext.value);
      initial.value = page.value - urlParams.get("offset");
      final.value = urlParams.get("offset");
    };

    const next = async () => {
      loading.value = true;
      if (pageNext.value) {
        const urlParams = getQuery(pageNext.value);

        initial.value = urlParams.get("offset");
        final.value = parseInt(urlParams.get("offset")) + page.value;
      }
      const res = await getPokemonUrl(pageNext.value);
      pagePrev.value = res.previous;
      pageNext.value = res.next;
      itemsLength.value = res.count;
      pokemons.value = res;
      loading.value = false;
    };

    const prev = async () => {
      loading.value = true;
      if (pagePrev.value) {
        const urlParams = getQuery(pagePrev.value);
        initial.value = urlParams.get("offset");
        final.value = parseInt(urlParams.get("offset")) + page.value;
      }

      const res = await getPokemonUrl(pagePrev.value);
      pagePrev.value = res.previous;
      pageNext.value = res.next;
      itemsLength.value = res.count;
      pokemons.value = res;
      loading.value = false;
    };

    const changePage = async () => {
      await listPokemons();
    };

    return {
      pokemons,
      search,
      listPokemonIdName,
      clean,
      loading,
      showDetail,
      pokemonInfo,
      showDetailPokemon,
      closeDetailPokemon,
      listPokemons,
      page,
      next,
      prev,
      changePage,
      itemsLength,
      pagePrev,
      pageNext,
      initial,
      final,
      itemsPerPage,
    };
  },
};
</script>

<style scope>
#btn-search {
  border: solid 1px #2aa7df;
  background: white;
  border-radius: 12px;
  padding: 3px 20px;
  color: #2aa7df;
  font-weight: bold;
}

.input-search {
  border-radius: 12px;
  width: 300px;
  padding: 6px 10px;
  border: solid 1px gold;
}
.input-search:focus {
  appearance: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0px 0px 7px 1px #2aa7df;
}

.input-search:hover {
  border: solid 1px #2aa7df;
}

.container-pokemon {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 14px;
  grid-auto-rows: 14rem;
  justify-self: center;
  padding: 10px 0;
  background-image: image-set(
    url("../assets/Backgrounds/Bg_Header.png") 1x,
    url("../assets/Backgrounds/Bg_Header@2x.png") 2x,
    url("../assets/Backgrounds/Bg_Header@3x.png") 3x
  );
  background-position: center;
  background-size: contain;
}

.btn-prev-next {
  display: inline-flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(107 114 128 / 1);
  background: transparent;
  border-width: 0px;
}

.btn-disabled {
  opacity: 0.5;
  color: rgb(107 114 128 / 1);
}

.select-page {
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 0.125rem;
  font-weight: 400;
  color: rgb(55 65 81 / 1);
  background-color: rgb(255 255 255 / 1);
  background-clip: padding-box;
  background-repeat: no-repeat;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(209 213 219 / 1);
  border-radius: 0.25rem;
}

@media (max-width: 600px) {
  .container-poke {
    padding: 40px 10px;
  }
}

@media (min-width: 900px) {
  .container-poke {
    padding-top: 50px;
    padding: 50px 200px;
  }
}
</style>
