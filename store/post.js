export const state = () => {
  return {
    createForm:[
      {
        title: '',
        content: '',
        city: '',
        departCity: "广州", 
        departCode: "CAN"
      }
    ]
  }
}

export const mutations = {
  // 草稿数据
  setInfoData(state, data) {
    state.createForm.unshift(data)
    if(state.createForm.length>5){
      state.createForm.length = 5
    }
  },
  // 删除草稿数据
  delInfoData(state, data) {
    state.createForm.splice(data,1)
  },
 
}
