
<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Cercador Pel·licules"></v-app-bar>

    <!--<v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-main class="d-flex align-center justify-center" style="min-height: 300px ">


      <v-container class="">
        <v-row>
          <v-col>
            <v-sheet width="1600" class="mx-auto">
              <v-form @submit.prevent>
                <v-text-field v-model="this.cercar" :rules="rules" label="Cercar"></v-text-field>
              </v-form>
            </v-sheet>
          </v-col>
          <v-col>
            <v-btn class="my-custom-button" @click="llamada">Button</v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters="">
          <v-col v-for="n in pelicules.Search" :key="n" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-sheet width="300" height="" class="mx-auto">
                <v-form disabled>
                  <v-card class="mx-auto" max-width="344">
                    <v-img :src="n.Poster" height="500px" cover></v-img>

                    <v-card-title >
                      {{ n.Title }}
                    </v-card-title>

                    <v-card-subtitle>
                      
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn color="orange-lighten-2" variant="text">
                        Info
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                          Titol: {{ n.Title }}
                          <br>
                          Any: {{ n.Year }}
                          <br>
                          Tipus: {{ n.Type }}
                          <br>
                          ImdbID: {{ n.imdbID }}
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-form>
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-layout>
</template>

<style scoped>
.my-custom-button {
  background-color: #3498db; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Quita el borde */
  border-radius: 5px; /* Bordes redondeados */
  padding: 10px 20px; /* Espaciado interno */
  font-size: 16px; /* Tamaño de fuente */
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
  transition: background-color 0.3s; /* Transición suave del color de fondo */

  /* Estilos al pasar el ratón sobre el botón */
  &:hover {
    background-color: #2577a1; /* Cambia el color de fondo al pasar el ratón */
  }
}
</style>
<script >
import { getPelicules } from "./comunicationsManager.js";

export default {
  data() {
    return {
      show: false,
      pelicules: [],
      cercar: "",
    }


  },
  methods:{
    llamada(){
      console.log("llamada");
      getPelicules(this,this.cercar)
    }
  }
}

</script>
