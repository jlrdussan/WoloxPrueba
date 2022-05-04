<template>
  <nav class="nav-bar">
    <div class="nav-img-logo">
      <img style="width: 140px" src="../assets/logo_full_color.svg" />
      <button class="nav-boton" @click="show()">
        <img style="width: 40px" src="../assets/View_Menu.svg" />
      </button>
    </div>
    <ul class="nav-menu hidden">
      <li>
        <a href="/#Home"> {{ $t("navBar.home") }}</a>
      </li>
      <li>
        <a href="/#Benefits"> {{ $t("navBar.benefits") }}</a>
      </li>
      <li>
        <router-link to="/pokemon"> {{ $t("navBar.pokemon") }}</router-link>
      </li>
      <li>
        <router-link to="/login">
          <button class="btn-login">
            {{ $t("navBar.login") }}
          </button></router-link
        >
      </li>
      <li>
        <select v-model="$i18n.locale" class="select-lang">
          <option value="es">
            <p>{{ $t("select.spanish") }}</p>
          </option>
          <option value="en">
            <p>{{ $t("select.english") }}</p>
          </option>
        </select>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  setup() {
    const show = () => {
      var ancla = document.getElementsByClassName("nav-menu");
      for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle("hidden");
      }
    };
    return { show };
  },
};
</script>

<style>
.nav-img-logo {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
}

.select-lang {
  border-bottom: #97cf00 solid 1px;
  padding: 4px 4px;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #2aa7df;
}

.nav-menu {
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  align-items: center;
  margin-right: 50px;
}
a {
  text-decoration: none;
  font-family: Montserrat-Medium;
  color: rgb(49, 47, 47);
}

.btn-login:hover {
  background-position: 0 -50px;
  transition: all 0.3s;
  color: white;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 30;
}

.nav-boton {
  border: none;
  background: none;
  display: none;
}

.btn-login {
  border: solid 1px #2aa7df;
  border-radius: 16px;
  padding: 7px 50px;
  color: #2aa7df;
  font-weight: bold;
  background: linear-gradient(180deg, white 50%, #2aa7df 50%, #97cf00 100%);
  background-size: 1px 100px;
  transition: all 0.3s;
}

@media (max-width: 600px) {
  .nav-img-logo {
    margin-left: 0px;
    width: 100%;
  }

  .nav-bar {
    flex-direction: column;
    background-color: #f2f5fa;
  }
  .nav-menu {
    flex-direction: column;
    gap: 5px;
  }
  .nav-boton {
    display: inline-block;
  }
  .hidden {
    display: none;
  }
}
</style>
