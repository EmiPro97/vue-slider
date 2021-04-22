const root = new Vue({
    el: '#root',
    data: {
        imges: [
            './img/groudon.jpg',
            './img/latios.png',
            './img/birds.jpg',
            './img/ohoh.jpg',
            './img/zamazenta.jpg',
            './img/dogs.jpg',
            './img/Mewtwo.jpg'
        ],
        indexImges: 0,
        indexInterval: 0,
    },
    mounted() {
        this.startLoop();
    },
    methods: {
        prevImg() {
            this.indexImges--;
            if (this.indexImges < 0) {
                this.indexImges = (this.imges.length -1);
            }
        },
        nextImg() {
            this.indexImges++;
            if (this.indexImges > (this.imges.length -1)) {
                this.indexImges = 0;
            }
        },
        setImg(index) {
            this.indexImges = index;
        },
        startLoop() {
            this.indexInterval = setInterval( () => {
                this.nextImg();
            }, 3500)
            this.$refs.slider.blur();
        },
        stopLoop() {
            clearInterval(this.indexInterval);
            this.$refs.slider.focus();
        },
    },
});