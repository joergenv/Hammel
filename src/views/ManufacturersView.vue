<template>  
<div class="pa-10">
<v-container>
  <v-row>
    <v-col cols="auto" v-align="left">
      <h2>Producenter</h2>
    </v-col>
    <v-col cols="auto" v-align="right">
      <v-btn density="comfortable" icon="mdi-plus" @click="dialog=true"></v-btn>
    </v-col>
  </v-row>
  <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        width="800"
        prepend-icon="mdi-update"
        text="Inddtast oplysninger om fabrikant."
        title="Update in progress"
        class="pa-5"
      >
 
      <v-text-field label="Mærke" variant="outlined" v-model="fornavn"></v-text-field>
      <v-text-field label="Grundlagt" variant="outlined" v-model="fornavn"></v-text-field>
      <v-text-field label="Land" variant="outlined" v-model="fornavn"></v-text-field>

      
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>

        </template>
      </v-card>
    </v-dialog>
</v-container>


  <v-data-table :items="$store.state.manufacturers"></v-data-table>
</div>
</template>
  
<script>
import {onMounted} from "vue"
import {useStore} from 'vuex'

export default {
  data() {
    return {
      dialog: null,
      fornavn: 'Jørgen Vig Jensen'
    }
  },
  methods: {
  
  },
  setup() {    
    onMounted(() => {
      const store = useStore();
      store.dispatch('getManufacturers');
    })
  }
}
</script>
