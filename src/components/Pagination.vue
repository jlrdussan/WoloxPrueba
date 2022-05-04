<template>
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
      Showing
      <span style="font-weight: 600; color: rgb(17 24 39 / 1)">{{
        initial
      }}</span>
      to <span class="font-semibold text-gray-900">{{ final }}</span> of
      <span class="font-semibold text-gray-900">{{ itemsLength }}</span>
      Entries
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
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  setup(props, { emit }) {
    const itemsPerPage = ref([5, 10, 50]);
    const page = ref(itemsPerPage.value[0]);
    const data = ref("");
    const itemsLength = ref(0);
    const pagePrev = ref(null);
    const pageNext = ref(null);
    const initial = ref();
    const final = ref();

    onMounted(() => {
      consultar();
    });

    const consultar = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${page.value}&offset=0`
      );
      data.value = res.data;
      pagePrev.value = data.value.previous;
      pageNext.value = data.value.next;
      itemsLength.value = data.value.count;

      const queryUrl = pageNext.value.split("?");
      const urlParams = new URLSearchParams(queryUrl[1]);
      initial.value = page.value - urlParams.get("offset");
      final.value = urlParams.get("offset");

      emit("update:modelValue", data.value.results);
    };

    const next = async () => {
      if (pageNext.value) {
        const queryUrl = pageNext.value.split("?");
        const urlParams = new URLSearchParams(queryUrl[1]);
        initial.value = urlParams.get("offset");
        final.value = parseInt(urlParams.get("offset")) + page.value;
      }
      const res = await axios.get(data.value.next);
      data.value = res.data;
      pagePrev.value = data.value.previous;
      pageNext.value = data.value.next;
      itemsLength.value = data.value.count;

      emit("update:modelValue", data.value.results);
    };

    const prev = async () => {
      if (pagePrev.value) {
        const queryUrl = pagePrev.value.split("?");
        const urlParams = new URLSearchParams(queryUrl[1]);
        initial.value = urlParams.get("offset");
        final.value = parseInt(urlParams.get("offset")) + page.value;
      }
      const res = await axios.get(data.value.previous);
      data.value = res.data;
      pagePrev.value = data.value.previous;
      pageNext.value = data.value.next;
      itemsLength.value = data.value.count;

      emit("update:modelValue", data.value.results);
    };
    const changePage = async () => {
      await consultar();
    };
    return {
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

<style>
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
</style>
