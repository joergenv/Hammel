import { createStore } from 'vuex'
import { supabase } from '../lib/supabaseClient'

export default createStore({
  state: {
    
    manufacturers: [{
      id: 1,
      name:'fordson',
      establishyear: 1935
    }],
    tractormodels: [],
    data: {},
    error: {},
    pending: {}
  },
  getters: {

  },
  mutations: {
    listManufacturers (state, manufacturers){
      state.manufacturers = manufacturers;
    },
    setError(state, error) {
      state.error = error;
      state.posts = null;
      state.pending = false;
    }
  },
  actions: {
    async getManufacturers({commit}) { 
      try {
        const res = await supabase.from('manufacturers').select()
        if (res.status == 200) {
          console.log(res);
          commit("listManufacturers", res.data);
        } else {
          //commit("setError", new Error("Something went wrong."));
          console.log(res.status);
        }
      } catch (e) {
        console.log(e);
        //commit("setError", e);
      }
    }

    /*async getManufacturers({commit}) {
      commit ('listManufacturers', await supabase.from('manufacturers').select())
    }*/
  },
  modules: {
  }
})
