<template>
    <v-container>
        <v-btn color="blue lighten-3" dark depressed small @click="back">
            <v-icon small left>mdi-arrow-left-drop-circle</v-icon>
            Regresar al Menú</v-btn
        >

        <v-row dense justify="center" align-content="center">
            <v-col cols="12" class="text-center d-block my-2">
                <span class="headline  font-weight-bold">ROPA 👗</span>
            </v-col>
            <v-col cols="12" class="text-center d-block my-2">
                <span class="headline  font-weight-light">Catálogo en Desarrollo 💻⚒</span>
            </v-col>
        </v-row>
    
    </v-container>
</template>

<script>
  
    export default {
        components: {
           
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style lang="scss" scoped></style>
