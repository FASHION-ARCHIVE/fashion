<template>
  <mainHeader/>
  <div class="wrapper">
      <ul class="book">
        <li class="book__list-item">
          <div class="book__page book__page--cover front">
            <div class="book__page-face book__page-face--front"></div>
            <div class="book__page-face book__page-face--back"></div>
          </div>
        </li>
        <li class="book__list-item">
          <div class="book__page">
            <div class="book__page-face book__page-face--front">
              <div class="book__text">
                <span class="book__header">Chapter 1</span>
                <hr class="book__divider" />
                <p className="book__paragraph">
                  When Mr. Bilbo Baggins of Bag End announced that he would
                  shortly be celebrating his eleventy-first birthday with a
                  party of special magnificence, there was much talk and
                  excitement in Hobbiton. Bilbo was very rich and very peculiar,
                  and had been the wonder of the Shire for sixty years, ever
                  since his remarkable disappearance and unexpected return. The
                  riches he had brought back from his travels had now become a
                  local legend.
                </p>
                <span class="book__page-number">1</span>
              </div>
            </div>
            <div class="book__page-face book__page-face--back"></div>
          </div>
        </li>
        <li class="book__list-item">
          <div class="book__page">
            <div class="book__page-face book__page-face--front">
              <div class="book__text">
                <span class="book__header">Fellowship of the Ring</span>
                <hr class="book__divider" />
                <p className="book__paragraph">
                  It was popularly believed, whatever the old folk might say,
                  that the Hill at Bag End was full of tunnels stuffed with
                  treasure. And if that was not enough for fame, there was also
                  his prolonged vigour to marvel at. Time wore on, but it seemed
                  to have little effect on Mr. Baggins. At ninety he was much
                  the same as at fifty. At ninety-nine they began to call him
                  well-preserved; but unchanged would have been nearer the mark.
                </p>
                <span class="book__page-number">2</span>
              </div>
            </div>
            <div class="book__page-face book__page-face--back"></div>
          </div>
        </li>
        <li class="book__list-item">
          <div class="book__page">
            <div class="book__page-face book__page-face--front">
              <div class="book__text">
                <span class="book__header">Fellowship of the Ring</span>
                <hr class="book__divider" />
                <p className="book__paragraph">
                  But so far trouble had not come; and as Mr. Baggins was
                  generous with his money, most people were willing to forgive
                  him his oddities and his good fortune. He remained on visiting
                  terms with his relatives (except, of course, the
                  Sackville-Bagginses), and he had many devoted admirers among
                  the hobbits of poor and unimportant families. But he had no
                  close friends, until some of his younger cousins began to grow
                  up.
                </p>
                <span class="book__page-number">2</span>
              </div>
            </div>
            <div class="book__page-face book__page-face--back"></div>
          </div>
        </li>
        <li class="book__list-item">
          <div class="book__page book__page--cover back">
            <div class="book__page-face book__page-face--front"></div>
            <div class="book__page-face book__page-face--back"></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { defineComponent} from 'vue';
import mainHeader from '@/components/TopCategory.vue';

export default defineComponent({
  components: {
    mainHeader // 컴포넌트 등록
  },
  mounted() {
    const pages = document.querySelectorAll(".book__list-item");

    let isFlipping = false;

    (function () {
      // eslint-disable-next-line no-unused-vars
      function flip(e) {
        if (!isFlipping) {
          isFlipping = true;

          if (this.classList.contains("is-flipped")) {
            this.classList.remove("is-flipped");
          } else {
            this.classList.add("is-flipped");
          }

          setTimeout(() => {
            isFlipping = false;
          }, 1500);
        }
      }

      pages.forEach((page) => page.addEventListener("click", flip));
    })();
  }
})

  
</script>

<style>
$dark: #1b1920;
$off_white: #dedede;
$box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
  0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  box-sizing: border-box;
  font-family: 'EB Garamond', serif;
  margin: 0;
  padding: 0;
  position: relative;
}

.wrapper {
  align-items: center;
  background: #ededed;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}

.book {
  align-items: center;
  display: flex;
  height: 406px;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: absolute;
  transform: rotateX(10deg);
  transform-style: preserve-3d;
  width: 270px;
}

.book__list-item {
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  list-style-type: none;
  perspective: 600px;
  position: absolute;
  top: 0;
  transform: translateX(-135px);
  width: 100%;

  &.is-flipped .book__page {
    transform: rotateY(0);
  }

  &:not(:first-child):not(:last-child) {
    .book__page {
      height: 97.5%;
      left: 1.25%;
      top: 1.25%;
      width: 97.5%;
    }
  }
}

@for $i from 1 through 5 {
  .book__list-item:nth-child(#{$i}) {
    transition: z-index 0.1s 0.75s;
    z-index: 6 - $i;

    &.is-flipped {
      transition: z-index 0.1s 0.1s;
      z-index: 20 + $i;
    }
  }
}

.book__page {
  background: #d1d1d1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  transform: rotateY(180deg);
  transition: all 1.5s ease-out;
  transform-style: preserve-3d;
  transform-origin: center right;

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 10px 0 0 10px;
  }

  &--cover div {
    background: black;
    &:first-child {
      border-radius: 0 10px 10px 0;
    }
    &:last-child {
      border-radius: 10px 0 0 10px;
    }
  }

  &--cover.front div:first-child {
    background: url(https://i.postimg.cc/XqyDSGTX/lotr.jpg) center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.book__page-face {
  align-items: center;
  background: white;
  backface-visibility: hidden;
  color: black;
  height: 100%;
  display: flex;
  position: absolute;
  padding: 15px;
  justify-content: center;
  text-align: center;
  width: 100%;

  &--front {
    border-left: 5px solid $dark;
    box-shadow: $box-shadow;
    transform: rotateY(180deg);
  }
}

.book__text {
  height: 100%;
  position: relative;
  width: 100%;
}

.book__header {
  font-size: 20px;
  font-weight: bold;
}

.book__paragraph {
  font-size: 5px;
}

.book__page-number {
  bottom: 0;
  position: absolute;
}

.book__divider {
  width: 50%;
}

</style>