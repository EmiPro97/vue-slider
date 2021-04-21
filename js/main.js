const root = new Vue({
    el: '#root',
    data: {
        imges: [
            'https://picsum.photos/id/235/800/1000',
            'https://picsum.photos/id/236/800/1000',
            'https://picsum.photos/id/237/800/1000',
            'https://picsum.photos/id/238/800/1000'
        ],
        indexImges: 0,
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
    },
});