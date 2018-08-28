<template>
    <div class="item-wrap">
        <div class="item border-b" @click="itemClick">
            <div class="left">
                <h3>{{haveImgData.title}}</h3>
                <span class="time">{{haveImgData.time}}</span>
                <span class="scanNum">{{haveImgData.scanNum}}位员工已阅</span>
            </div>
            <div class="right">
                <img src="http://pic.qiantucdn.com/58pic/18/23/90/07v58PICWAT_1024.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["haveImgData"],
    methods: {
        itemClick() {
            const vm = this;
            vm.$emit("itemClickHandle", vm.haveImgData);
        }
    }
};
</script>
<style lang="scss" scoped>
.item-wrap {
    box-sizing: border-box;
    padding: 0 15px;
    background-color: #fff;
    .item {
        padding: 20px 0;
        & > div {
            display: inline-block;
            box-sizing: border-box;
            font-size: 0;
        }

        .left {
            width: 72%;
            vertical-align: top;
            box-sizing: border-box;
            h3 {
                font-size: 17px;
                font-weight: normal;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            span {
                display: inline-block;
                font-size: 12px;
                color: rgb(147, 153, 165);
                margin-top: 5px;
            }
            span.scanNum {
                margin-left: 28px;
            }
        }
        .right {
            width: 26%;
            vertical-align: top;
            img {
                width: 92px;
                height: 62px;
                margin: 0 auto;
                text-align: center;
                float: right;
                position: relative;
                top: 3px;
            }
        }
    }
}
.border-b {
    border-bottom: 1px solid rgb(228, 230, 240);
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border-b {
        border-bottom: 0.5px solid rgb(228, 230, 240);
    }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border-b {
        border-bottom: 0.333333px solid rgb(228, 230, 240);
    }
}
</style>
