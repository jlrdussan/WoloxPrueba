<template>
  <div class="grid-home">
    <div class="grid-item1">
      <div class="area1">
        <h1 style="font-family: Montserrat" class="title">
          {{ $t("home.section1.text1") }} <br />
          <strong style="font-family: Montserrat-SemiBold">{{
            $t("home.section1.text2")
          }}</strong>
          {{ $t("home.section1.text3") }}<br />
          <span style="color: #97cf00; font-family: Montserrat-SemiBold"
            >Wolox</span
          >
        </h1>
      </div>
      <div class="area2">
        <img
          src="../assets/Img_Hero/Ic_ilustra_Hero.png"
          srcset="
            ../assets/Img_Hero/Ic_ilustra_Hero.png    1x,
            ../assets/Img_Hero/Ic_ilustra_Hero@2x.png 2x,
            ../assets/Img_Hero/Ic_ilustra_Hero@3x.png 3x
          "
        />
      </div>
    </div>
    <div class="grid-item2">
      <div class="area3">
        <img
          id="img-wolox"
          srcset="
            ../assets/img_woloxer.png    1x,
            ../assets/img_woloxer@2x.png 2x,
            ../assets/img_woloxer@3x.png 3x
          "
          src="../assets/img_woloxer.png"
        />
        <h1 class="title-wolox">
          <strong style="color: #97cf00">350 +</strong>
          <strong style="color: #2aa7df">Woloxers</strong>
        </h1>
        <div
          style="
            z-index: 20;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 8px;
            color: white;
          "
        >
          <img style="width: 20px; z-index: 20" src="../assets/Twitter.svg" />
          @wolox
        </div>
        <a
          style="text-decoration: none; z-index: 20"
          href="https://twitter.com/wolox"
          class="follow"
          >{{ $t("home.section3.btn") }}</a
        >
      </div>
      <div class="area4">
        <h1 class="title">
          <span style="font-family: Montserrat">
            {{ $t("home.section4.text1") }}</span
          >
          <br /><span style="color: #2aa7df; font-family: Montserrat-SemiBold">
            {{ $t("home.section4.text2") }}&nbsp;
          </span>
          <span style="color: #97cf00; font-family: Montserrat-SemiBold">
            {{ $t("home.section4.text3") }}
          </span>
          <span style="font-family: Montserrat">{{
            $t("home.section4.text4")
          }}</span>
          <br />
          <span style="font-family: Montserrat">
            {{ $t("home.section4.text5") }}</span
          >
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.title-wolox {
  font-size: 40px;
  z-index: 20;
}

.grid-home {
  height: 100%;
  display: grid;
  grid-template-rows: auto auto;
}

.grid-item1 {
  display: grid;
  width: 100%;
  grid-template-columns: 55% 45%;
  background-image: image-set(
    url("../assets/Backgrounds/Bg_Header.png") 1x,
    url("../assets/Backgrounds/Bg_Header@2x.png") 2x,
    url("../assets/Backgrounds/Bg_Header@3x.png") 3x
  );
  background-position: center;
  background-size: contain;
}
.grid-item2 {
  display: grid;
  width: 100%;
  grid-template-columns: 55% 45%;
}

.area1 {
  justify-self: start;
  align-self: center;
  text-align: left;
  margin-left: 50px;
}

.area2 {
  justify-self: start;
  align-self: flex-end;
}

.area2 img {
  max-width: 70%;
}

.area3 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.area3 #img-wolox {
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
}
.area4 {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f2f5fa;
}

.follow {
  background: transparent;
  border-radius: 16px;
  padding: 7px 60px;
  color: white;
  font-weight: bold;
  border: solid #2aa7df 1px;
}

.follow:hover {
  box-shadow: 0 0 8px 0 #3498db inset, 0 0 8px 4px #3498db;
}

@media all and (max-width: 600px) {
  .grid-item1 {
    grid-template-rows: auto auto;
    grid-template-columns: auto;
  }

  .title-wolox {
    font-size: 29px;
  }

  .area2 img {
    max-width: 60%;
  }

  .area1 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-self: flex-end;
    align-items: center;
    padding-top: 15px;
    margin-left: 0;
  }

  .area2 {
    justify-self: center;
    align-self: center;
  }

  .grid-item2 {
    grid-template-rows: auto auto;
    grid-template-columns: 100%;
  }
}
</style>
