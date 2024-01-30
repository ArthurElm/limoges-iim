<template>
    <button
        class="px-8 py-3 w-fit flex items-center justify-center"
        :class="{
            'button-state-1': buttonState === 1,
            'button-state-2': buttonState === 2,
            'button-state-3': buttonState === 3,
            'button-hover': buttonState === 2 && hoverState
        }"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
    >
        <span v-if="buttonState !== 3" class="w-fit">
            <div class="w-5" v-html="getSvgCode(svgFileName)"></div>
        </span>
        <span v-if="(buttonState === 1 || (buttonState === 2 && hoverState))" class="w-full button-text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    props: {
    svgFileName: String,
    buttonState: Number
    },
    data() {
    return {
        state: this.buttonState,
        hoverState: false
    };
    },
    methods: {
        handleMouseOver() {
            if (this.state === 2) {
                this.state = 1;
                this.hoverState = true;
            }
        },
        handleMouseOut() {
            if (this.hoverState = true) {
                this.state = 2;
                this.hoverState = false;
            }
        },
        getSvgCode(iconName) {
            const iconMappings = {
                shop:`<svg viewBox="0 0 95 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.6667 13.7143V31.5714C69.6667 37.2546 67.3254 42.7051 63.1579 46.7237C58.9905 50.7424 53.3381 53 47.4444 53C41.5507 53 35.8984 50.7424 31.731 46.7237C27.5635 42.7051 25.2222 37.2546 25.2222 31.5714V13.7143M3 10.1429V95.8571C3 97.7515 3.78042 99.5684 5.16958 100.908C6.55874 102.247 8.44284 103 10.4074 103H84.4815C86.446 103 88.3301 102.247 89.7193 100.908C91.1085 99.5684 91.8889 97.7515 91.8889 95.8571V10.1429C91.8889 8.24845 91.1085 6.43164 89.7193 5.09209C88.3301 3.75255 86.446 3 84.4815 3H10.4074C8.44284 3 6.55874 3.75255 5.16958 5.09209C3.78042 6.43164 3 8.24845 3 10.1429Z" stroke="white" stroke-width="5"/></svg>`,
                capture:`<svg viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.83337 28.1667V15.6667C2.83337 12.3515 4.15033 9.17212 6.49454 6.82791C8.83874 4.48371 12.0182 3.16675 15.3334 3.16675H27.8334M2.83337 78.1667V90.6667C2.83337 93.982 4.15033 97.1614 6.49454 99.5056C8.83874 101.85 12.0182 103.167 15.3334 103.167H27.8334M77.8334 3.16675H90.3334C93.6486 3.16675 96.828 4.48371 99.1722 6.82791C101.516 9.17212 102.833 12.3515 102.833 15.6667V28.1667M77.8334 103.167H90.3334C93.6486 103.167 96.828 101.85 99.1722 99.5056C101.516 97.1614 102.833 93.982 102.833 90.6667V78.1667M34.0834 53.1667C34.0834 58.1396 36.0588 62.9087 39.5751 66.425C43.0914 69.9413 47.8606 71.9167 52.8334 71.9167C57.8062 71.9167 62.5753 69.9413 66.0916 66.425C69.6079 62.9087 71.5834 58.1396 71.5834 53.1667C71.5834 48.1939 69.6079 43.4248 66.0916 39.9085C62.5753 36.3922 57.8062 34.4167 52.8334 34.4167C47.8606 34.4167 43.0914 36.3922 39.5751 39.9085C36.0588 43.4248 34.0834 48.1939 34.0834 53.1667Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                check:`<svg viewBox="0 0 110 84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 66.2497L8.75 39.9998L0 48.7497L35 83.7497L110 8.74976L101.25 -0.000244141L35 66.2497Z" fill="white"/></svg>`,
                cart:`<svg viewBox="0 0 121 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H21.5429L35.45 80.2727H109.621M35.45 62.0909H107.721C108.257 62.0913 108.777 61.9094 109.191 61.5764C109.606 61.2433 109.89 60.7796 109.995 60.2642L118.34 19.3551C118.407 19.0252 118.399 18.6848 118.316 18.3584C118.232 18.032 118.076 17.7278 117.859 17.4677C117.641 17.2076 117.367 16.9981 117.057 16.8543C116.747 16.7106 116.408 16.6361 116.065 16.6364H26.1786M44.7215 98.4545C44.7215 100.965 42.646 103 40.0857 103C37.5255 103 35.45 100.965 35.45 98.4545C35.45 95.9442 37.5255 93.9091 40.0857 93.9091C42.646 93.9091 44.7215 95.9442 44.7215 98.4545ZM109.621 98.4545C109.621 100.965 107.546 103 104.986 103C102.426 103 100.35 100.965 100.35 98.4545C100.35 95.9442 102.426 93.9091 104.986 93.9091C107.546 93.9091 109.621 95.9442 109.621 98.4545Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            };
    
            return iconMappings[iconName] || '';
        }
    }
};
</script>

<style scoped>

button{
    transition: all .2s ease-in-out;
    background: #00368d;
    background: linear-gradient(to right, #0D57CE 50%, #00368D 50%);
    background-size: 200% 100%;
    background-position:right bottom;
}
.button-state-1 {
  /*background-color: #00368d;*/
  color: #ffffff;
  border-radius: 200px;
}

.button-state-2 {
  color: #ffffff;
  border-radius: 200px;
}

.button-text{
    margin-left: 10px;
    transition: all .2s ease-in-out;
}

.button-hover:hover {
  color: #ffffff;
  border-radius: 200px;
  background-position:left bottom;
}

.button-state-3 {
  color: #00368d;
  border-radius: 200px;
}
</style>
