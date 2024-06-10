<template>
     <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        width="800"
        prepend-icon="mdi-brightness-5"
        text="Inddtast oplysninger om fabrikant."
        title="Fabrikant"
        class="pa-5"
      >
      <div class="pa-5">
        <v-text-field label="Mærke" variant="outlined" v-model="name"></v-text-field>
      <v-text-field label="Grundlagt" variant="outlined" v-model="entity.establishedyear"></v-text-field>
      <v-text-field label="Land" variant="outlined" v-model="entity.country"></v-text-field>
      </div>


      
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="close()"
          ></v-btn>

        </template>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ManufacturerDialog',
    props: {
        value: true,
        item: Object
    },
    data() {
        return {
            dialog: this.value,
            entity: this.item,
            name: this.item.name
        }        
    },
    methods: {
        close: function(){
            this.dialog = false;
        }
    }

}
</script>
