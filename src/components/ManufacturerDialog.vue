<template>
  <v-dialog v-model="showDialog" width="auto" persistent>
   <v-card
     width="800"
     prepend-icon="mdi-brightness-5"
     text="Inddtast oplysninger om fabrikant."
     title="Fabrikant"
     class="pa-5"
   >
   <div class="pa-5">
     <v-text-field label="Mærke" variant="outlined" v-model="item.name"></v-text-field>
   <v-text-field label="Grundlagt" variant="outlined" v-model="cmpEntity.establishyear"></v-text-field>
   <v-text-field label="Land" variant="outlined" v-model="cmpEntity.country"></v-text-field>
   </div>
     <template v-slot:actions>
       <v-btn
         class="ms-auto"
         text="Ok"
         @click="close"
       ></v-btn>

     </template>
   </v-card>
 </v-dialog>
</template>

<script>
export default {
 name: 'ManufacturerDialog',
 props: {
     dialog: Boolean,
     item: Object
 },
 data() {
     return {
         entity: this.item,
         name: this.item.name
     }        
 },
 computed: {
   showDialog: {
     get(){
       return this.dialog;
     },
     set(value){
       var self = this;
       self.$emit('input', null);
     },
   },
   cmpEntity() {
     return this.item;
   }
 },
 methods: {
     close () {
       this.showDialog = false;
     }
 }

}
</script>
