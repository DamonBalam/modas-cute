<template>
    <v-app>
        <v-app-bar app :color="colorPrincipal" dark>
            <div class="d-flex align-center">
                <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

                <v-icon left>mdi-storefront</v-icon>
                <span class="font-weight-bold headline">MODA'S CUTE</span>
            </div>

            <v-spacer></v-spacer>

            <v-btn href="https://www.facebook.com/ModasCuteOficial/" target="_blank" text>
                <span class="mr-2">Ir a Facebook</span>
                <v-icon>mdi-facebook</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-row dense justify="center" align-content="center">
                <v-col cols="12" class="text-center d-block my-5">
                    <span class="headline  font-weight-bold">CATÁLOGO </span>
                </v-col>
            </v-row>
            <RamenView />
            <SnacksView />
            <MainView />
        </v-main>
        <v-footer
            padless
            dark
            :color="colorPrincipal"
            class="font-weight-bold pa-1 text-center d-block"
        >
            Elaborado por
            <a href="https://twitter.com/DamonBalam" target="_blank">@DamonBalam</a> 💚
        </v-footer>
    </v-app>
</template>

<script>
    import MainView from './views/Main';
    import SnacksView from './views/Snacks';
    import RamenView from './views/Ramen';
    export default {
        name: 'App',
        components: {
            MainView,
            RamenView,
            SnacksView,
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
