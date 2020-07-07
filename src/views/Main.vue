<template>
    <v-container>
        <v-row dense justify="center" align-content="center" style="height:500px!important">
            <v-col cols="12" class="text-center d-block my-2">
                <span class="headline  font-weight-bold"> 🎎 CATEGORÍAS 👗</span>
            </v-col>
            <v-col cols="12" class="text-center d-block my-2">
                <v-btn
                    color="deep-purple lighten-3"
                    dark
                    depressed
                    block
                    class="pa-8 font-weight-bold headline"
                    to="/catalogos/bolsas"
                    link
                >
                    BOLSAS</v-btn
                >
            </v-col>
            <v-col cols="12" class="text-center d-block my-2">
                <v-btn
                    color="deep-purple lighten-3"
                    dark
                    depressed
                    block
                    class="pa-8 font-weight-bold headline"
                    link
                    to="/catalogos/productos-coreanos"
                >
                    PRODUCTOS COREANOS</v-btn
                >
            </v-col>
            <v-col cols="12" class="text-center d-block my-2">
                <v-btn
                    color="deep-purple lighten-3"
                    dark
                    depressed
                    block
                    class="pa-8 font-weight-bold headline"
                    link
                    to="/catalogos/ropa"
                >
                    ROPA</v-btn
                >
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        components: {},
        methods: {
            back() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style lang="scss" scoped></style>
