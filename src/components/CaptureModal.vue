<template>
    <div>
        <button @click="captureElement">capturer </button>
    <div id="img-rendered" class="bg-highlight pt-10 rounded-md w-3/5" v-if="showImage">
        <div class="px-10 w-5/5 bg-white mx-10">
        <img :src="imageUrl" alt="Captured Image" />
        </div>
        <p class="text-center text-white p-3 rounded-bl-md rounded-br-md">capture effectué</p>
    </div>
    </div>
</template>

<script>
import domtoimage from 'dom-to-image';

export default {
    data() {
    return {
        showImage: false,
        imageUrl: '',
    };
    },
    methods: {
        captureElement() {
            const elementToCapture = document.querySelector('.canvasContainer');
            if (elementToCapture) {
                domtoimage.toPng(elementToCapture).then((dataUrl) => {
                    this.imageUrl = dataUrl;
                    this.showImage = true;
                    copyToClipboard(dataUrl);
                });
                console.log('Capture button clicked');
            } else {
                alert('Element not found');
            }
        },
    },
};

function copyToClipboard(text) {
    if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard: ' + text);
    }).catch((error) => {
        console.error('Failed to copy to clipboard: ' + error);
    });
    } else {
    console.error('Clipboard API not supported');
    }
}
</script>

<style scoped>

#img-rendered{
    position: absolute;
    z-index: 30;
}

img{
    width: 100%;
    height: auto;
}
</style>