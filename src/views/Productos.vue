<template>
    <v-container>
        <v-btn color="blue lighten-3" dark depressed small @click="back">
            <v-icon small left>mdi-arrow-left-drop-circle</v-icon>
            Regresar al Menú</v-btn
        >

        <v-row dense justify="center" align-content="center">
            <v-col cols="12" class="text-center d-block my-2">
                <span class="headline  font-weight-bold">PRODUCTOS COREANOS 🎎</span>
            </v-col>
        </v-row>
        <RamenView />
        <SnacksView />
        <LicorView />
    </v-container>
</template>

<script>
    import LicorView from './Licor';
    import SnacksView from './Snacks';
    import RamenView from './Ramen';
    export default {
        components: {
            LicorView,
            RamenView,
            SnacksView,
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style lang="scss" scoped></style>
