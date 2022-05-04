import { mount } from "@vue/test-utils";
import Pokemon from "../../../src/views/Pokemon.vue";

import { config } from "@vue/test-utils";

config.global.mocks.$t = (phrase) => phrase;

describe("Render view", () => {
  const wrapper = mount(Pokemon);
  it("should render 20 pokemon card", async () => {
    await wrapper.vm.listPokemons();
    const list = wrapper.findAll("#CardPokemon");
    expect(list).toHaveLength(20);
  });
  it("renders boton search", async () => {
    const btnSearch = wrapper.find("#btn-search");
    expect(btnSearch.exists()).toBe(true);
  });
  it("renders boton clean", async () => {
    const btnClean = wrapper.find("#btn-clean");
    expect(btnClean.exists()).toBe(true);
  });
  it("renders input", async () => {
    const input = wrapper.find("#input-search");
    expect(input.exists()).toBe(true);
  });
});
