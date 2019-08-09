<template>
    <div>
        <header class="top_tips">
            <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
            <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemId}}</span>
        </header>
        <div  v-if="fatherComponent == 'home'">
            <div class="home_logo item_container_style"></div>
            <router-link to="item" class="start button_style"></router-link>
        </div>
        <div v-if="fatherComponent == 'item'">
            <div class="item_back item_container_style" v-if="this.$store.state.itemNum < 6">
                <div class="item_list_container">
                    <header class="item_title">{{this.lists[this.$store.state.itemNum-1].topic_name}}</header>
                    <ul>
                        <li :key="index"
                                v-for="(item,index) in this.lists[this.$store.state.itemNum-1].topic_answer">
                            <input class="hy-radio" type="radio" :value="item.topic_answer_id"
                                   name="item" ref="abc" v-model="abc">
                            <span class="option_detail">{{item.answer_name}}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="starts button_style" @click="onStarts" v-if="this.$store.state.itemNum<5"></div>
                    <div class="starts2 button_style" @click="onStarts" v-else></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "itemcontainer",
        props: ['fatherComponent'],
        data(){
          return{
              itemId: 1,
              abc:'',
              level: this.$store.state.level,
              lists: this.$store.state.itemDetail
          }
        },
        mounted() {
            this.$store.state.itemNum = 1
            this.itemId = 1
        },
        methods:{
            onStarts(){
                if (this.abc !== ''){
                    // 获取input的值存入数组
                    this.$store.commit('saveAnswers',this.abc)
                    this.$store.commit('addnext',1)
                    this.itemId++
                    this.abc = ''
                    if (this.$store.state.itemNum > 5){
                        this.$router.push('score')
                    }
                } else {
                    alert('不能不选哦！！！')
                }
            }
        }
    }
</script>

<style scoped>
    .top_tips {
        position: absolute;
        height: 7.35rem;
        width: 3.25rem;
        top: -1.3rem;
        right: 1.6rem;
        background: url(../images/WechatIMG2.png) no-repeat;
        background-size: 100% 100%;
        z-index: 10;
    }
    .num_tip{
        position: absolute;
        left: 0.48rem;
        bottom: 1.1rem;
        height: 0.7rem;
        width: 2.5rem;
        font-size: 0.6rem;
        font-family: '黑体';
        font-weight: 600;
        color: #a57c50;
        text-align: center;
    }
    .home_logo{
        background-image: url('../images/1-2.png');
        background-size: 13.142rem 100%;
        background-position: right center;
    }
    .item_container_style{
        height: 11.625rem;
        width: 13.15rem;
        background-repeat: no-repeat;
        position: absolute;
        top: 4.1rem;
        left: 1rem;
    }
    .start{
        background-image: url('../images/1-4.png');
    }
    .starts{
        background-image: url('../images/2-2.png');
    }
    .starts2{
        background-image: url('../images/3-1.png');
    }
    .button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
    }
    .item_back{
        background-image: url(../images/2-1.png);
        background-size: 100% 100%;
    }
    .item_list_container{
        position: absolute;
        height: 7.0rem;
        width: 8.0rem;
        top: 2rem;
        left: 2.6rem;
        -webkit-font-smoothing: antialiased;
    }
    .item_title{
        font-size: 0.65rem;
        color: goldenrod;
        line-height: 0.7rem;
    }
    .option_style{

        /*height: 0.725rem;*/
        /*width: 0.725rem;*/
        /*border: 1px solid #fff;*/
        /*border-radius: 50%;*/
        /*line-height: 0.725rem;*/
        /*text-align: center;*/
        /*margin-right: 0.3rem;*/
        /*font-size: 0.5rem;*/
        /*font-family: 'Arial';*/
    }

    .hy-radio {
        width: 16px;
        height: 0px;
        background-color: #000;
        /*margin-right: 30px;*/
        border-radius: 50%;
        position: relative;
        top: -15px;
    }
    .hy-radio:before,.hy-radio:after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 50%;
        transition: .3s ease;
    }
    .hy-radio:before {
        top: 1px;
        left: 1px;
        width: 12px;
        height: 12px;
        background-color: #fff;
        border: 1px solid #1485FD;
    }
    .hy-radio:after {
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        background-color: #fff;
    }
    .hy-radio:checked:after {
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        background-color: #1485FD;
    }
    .hy-radio:checked:before {
        border-color:#1485FD;
    }
    .option_detail{
        width: 7.5rem;
        font-size: 0.6rem;
        color: #f58c07;
        line-height: 0.7rem;
        padding-top: 0.11rem;
        letter-spacing:2px;
    }
    ul,li{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }
</style>
