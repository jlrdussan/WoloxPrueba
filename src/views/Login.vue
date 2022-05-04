<template>
  <div class="container-login">
    <div class="section-dev">
      <h1>:(</h1>
      <h2>UH OH!</h2>
      <h3 style="font-family: Montserrat">
        {{ $t("login") }}
      </h3>
      <router-link to="/"><button class="btn-home">HOME</button></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-login {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 100vh;
  width: 100%;
  background-image: image-set(
    url("../assets/Backgrounds/Bg_Header.png") 1x,
    url("../assets/Backgrounds/Bg_Header@2x.png") 2x,
    url("../assets/Backgrounds/Bg_Header@3x.png") 3x
  );
  background-position: center;
  background-size: contain;
}

.section-dev {
  font-family: Montserrat-SemiBold;
  width: 60%;
}

.btn-home {
  transform-style: preserve-3d;
  border: none;
  background: #97cf00;
  color: #f2f2f2;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  transition: all 500ms ease;
}

.btn-home:hover {
  transform-origin: center bottom;
  transform: translateY(40%);
}

@media (max-width: 660px) {
  .section-dev {
    font-family: Montserrat-SemiBold;
    width: 90%;
  }
}
</style>
