<template>  
<div class="pa-10">
<v-container>
  <v-row>
    <v-col cols="auto" v-align="left">
      <h2>Producenter</h2>
    </v-col>
    <v-col cols="auto" v-align="right">
      <v-btn density="comfortable" icon="mdi-plus" @click="addItem()"></v-btn>
    </v-col>
  </v-row>
</v-container>
 <manufacturer-dialog v-model="dialog" :item="manufacturer"></manufacturer-dialog>

  <v-data-table :items="$store.state.manufacturers"></v-data-table>
</div>
</template>
  
<script>
import ManufacturerDialog from '../components/ManufacturerDialog'
import {onMounted} from "vue"
import {useStore} from 'vuex'

export default {
  components : {
    ManufacturerDialog
  },  
  data() {
    return {
      dialog: false,
      manufacturer: {
            name: 'Fergusson',
            establishedyear: 1920,
            country: 'ENG'
        }      
    }
  },
  methods: {
    addItem: function(){
      this.dialog = true;
      this.manufacturer = Object.assign({}, {
        name: 'Ferguson',
        establishedyear: 1935,
        country: 'UK'
      })
    }
  },
  setup() {    
    onMounted(() => {
      const store = useStore();
      store.dispatch('getManufacturers');
    })
  }
}
</script>
