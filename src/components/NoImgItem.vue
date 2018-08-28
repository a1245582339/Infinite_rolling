<template>
    <div class="item-wrap">
        <div class="item border-b">
            <h3>{{noImgData.title}}</h3>
            <span class="time">{{noImgData.time}}</span>
            <span class="dept">{{noImgData.dept}}</span>
            <span class="status">{{noImgData.status}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["noImgData"]
    };

</script>
<style lang="scss" scoped>
    .item-wrap {
        box-sizing: border-box;
        padding: 0 15px;
        background-color: #fff;
        .item {
            padding: 20px 0;
            &>div {
                display: inline-block;
                box-sizing: border-box;
                font-size: 0;
            }

            h3 {
                font-size: 17px;
                font-weight: normal;
                margin-bottom: 3px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
            span {
                display: inline-block;
                font-size: 12px;
                color: rgb(147, 153, 165);
                margin-top: 5px;
            }
            span.time {
                float: right;
            }
            span.dept {
                width: 120px;
                vertical-align: top;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
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
