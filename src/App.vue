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
          <MainView />
        </v-main>
    </v-app>
</template>

<script>
    import MainView from './views/Main';
    export default {
        name: 'App',
        components: {
            MainView,
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
