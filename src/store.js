import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: '第一周', //活动周数
    itemNum: 1, // 第几题
    allTime: 0,  //总共用时
    timer: '', //定时器
    itemDetail: [{
      "topic_id": 20,
      "active_topic_id": 4,
      "type": "ONE",
      "topic_name": "七七事变是?",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 1,
        "topic_id": 20,
        "answer_name": "芦沟桥事变",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 2,
        "topic_id": 20,
        "answer_name": "芦沟路事变",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 3,
        "topic_id": 20,
        "answer_name": "凯达格兰大道事变",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 4,
        "topic_id": 20,
        "answer_name": "我变我变我变变变",
        "is_standard_answer": 1
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "“三国演义”中,刘备请得诸葛亮,传为美谈的",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 5,
        "topic_id": 21,
        "answer_name": "三顾茅厕 ",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 6,
        "topic_id": 21,
        "answer_name": "姗姗来迟",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 7,
        "topic_id": 21,
        "answer_name": "三顾茅屋 ",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 8,
        "topic_id": 21,
        "answer_name": "三顾茅庐",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "发现新大陆的是?",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 9,
        "topic_id": 21,
        "answer_name": "弟伦布",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 10,
        "topic_id": 21,
        "answer_name": "哥伦布",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 11,
        "topic_id": 21,
        "answer_name": "姐伦布",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 12,
        "topic_id": 21,
        "answer_name": "妹伦布",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "结束战国时代统一中国的是:",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 13,
        "topic_id": 21,
        "answer_name": "秦始皇",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 14,
        "topic_id": 21,
        "answer_name": "秦汉",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 15,
        "topic_id": 21,
        "answer_name": "秦伟",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 16,
        "topic_id": 21,
        "answer_name": "秦祥林",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "最难的一道题",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 17,
        "topic_id": 21,
        "answer_name": "D是错的",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 18,
        "topic_id": 21,
        "answer_name": "我是错的",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 19,
        "topic_id": 21,
        "answer_name": "A说的对",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 20,
        "topic_id": 21,
        "answer_name": "C是对的",
        "is_standard_answer": 0
      }]
    }],
    answerid: [], //答案id
  },
  mutations: {
    //点击进入下一题
    addnext(state, num) {
      state.itemNum += num;
    },
    //记录答案
    saveAnswers(state, id) {
      state.answerid.push(id);
    },
    // /*
    // 记录做题时间
    //  */
    // saveTime(state) {
    //   state.timer = setInterval(() => {
    //     state.allTime++;
    //   }, 1000)
    // },
    // /*
    // 初始化信息，
    //  */
    // startData(state) {
    //   state.itemNum = 1;
    //   state.allTime = 0;
    //   state.answerid = [];
    // },
  },
  actions: {

  }
})
