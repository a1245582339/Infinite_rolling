<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    </swiper>
</template>

<script>
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    loop: true,
                    on:{
                        slideNextTransitionStart: () =>  {
                            this.toNext()
                        },
                        slidePrevTransitionStart: () => {
                            this.toPre()
                        },
                    },
                },
                swiperSlides: [0, 1, 2],
                swiperData: [],
                timestamp: [],
                currentIndex: -1 //当前页面在数组里的序号
            }
        },
        methods: {
            fetchData(timestamp) {
                // 调接口
            },
            toNext() {
                var preIndex = this.currentIndex
                this.currentIndex = this.filterIndex(this.currentIndex + 1)
                if (preIndex == -1) { //swiper的问题，第一次进来会执行一次
                    return false
                }
                var reqIndex = this.filterIndex(this.currentIndex + 1)
                this.timestamp[reqIndex] = this.timestamp[this.currentIndex] + 604800000
            },
            toPre() {
                this.currentIndex = this.filterIndex(this.currentIndex - 1)
                var reqIndex = this.filterIndex(this.currentIndex - 1)
                this.timestamp[reqIndex] = this.timestamp[this.currentIndex] - 604800000
            },
            filterIndex(index) {
                // 控制当前index
                if(index > 2) {
                    index = 0
                } else if (index < 0) {
                    index = 2
                }
                return index
            }
        },
        created() {
            var current = new Date().getTime()
            this.timestamp = [current, current + 604800000, current - 604800000]
            this.fetchData()
        }
    }

</script>
