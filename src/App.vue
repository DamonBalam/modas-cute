<template>
    <v-app>
        <v-app-bar app :color="colorPrincipal" dark>
            <v-btn text to="/">
                <v-icon left>mdi-storefront</v-icon>
                <span class="font-weight-bold headline">MODA'S CUTE</span>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn href="https://www.facebook.com/ModasCuteOficial/" target="_blank" text>
                <!-- <span class="mr-2">Ir a Facebook</span> -->
                <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn href="https://www.instagram.com/moda.scuteoficial/" target="_blank" text>
                <!-- <span class="mr-2">Ir a Facebook</span> -->
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <!-- <v-row dense justify="center" align-content="center">
                <v-col cols="12" class="text-center d-block my-5">
                    <span class="headline  font-weight-bold">CATÁLOGOS</span>
                </v-col>
            </v-row> -->

            <router-view></router-view>

            <!-- <RamenView />
            <SnacksView />
            <LicorView /> -->
        </v-main>
        <v-footer
            padless
            dark
            :color="colorPrincipal"
            class="font-weight-bold pa-1 text-center d-block"
        >
            2020 - Elaborado por
            <a href="https://twitter.com/DamonBalam" target="_blank">@DamonBalam</a> 💚
        </v-footer>
    </v-app>
</template>

<script>
    // import LicorView from './views/Licor';
    // import SnacksView from './views/Snacks';
    // import RamenView from './views/Ramen';
    export default {
        name: 'App',
        components: {
            // LicorView,
            // RamenView,
            // SnacksView,
        },
        data: () => ({
            //
        }),
        computed: {
            colorPrincipal() {
                return this.$store.state.colorPrincipal;
            },
        },
    };
</script>
