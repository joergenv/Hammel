<template>  
<div class="pa-10">
<v-container>
  <v-row>
    <v-col cols="auto" v-align="left">
      <h2>Producenter</h2>
    </v-col>
    <v-col cols="auto" v-align="right">
      <v-btn density="comfortable" icon="mdi-plus" @click.stop="addItem(item)"></v-btn>
    </v-col>
  </v-row>
</v-container>
 <manufacturer-dialog :dialog="doShowDialog" :item="manufacturer"></manufacturer-dialog>

  <v-data-table :items="$store.state.manufacturers" :headers="headers">
    <template v-slot:item.row-icon="{item}">
      <v-icon color="primary" icon="mdi-pencil" @click.stop="editItem(item)"></v-icon>
    </template>
  </v-data-table>
  
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
      doShowDialog: false,
      manufacturer: {},
      headers: [
        {key: 'name', title:'Navn'},
        {key: 'establishyear', title:'Etableret'},
        {key: 'country', title:'Land'},
        {key: 'row-icon', title:'ikon'} ]      
    }
  },
  methods: {
    addItem: function(){
      this.manufacturer = Object.assign({}, {
        name: 'Ferguson',
        establishedyear: 1935,
        country: 'UK'
      });
      this.doShowDialog = true;
    },
    editItem(item){
      //debugger;
      this.manufacturer = Object.assign({},item);
      this.doShowDialog = true;
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
