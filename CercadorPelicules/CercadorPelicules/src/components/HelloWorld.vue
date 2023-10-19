
<template class="template-background">
  <v-layout class="rounded rounded-md" style="background-color:black;">
    <v-app-bar title="Cercador Pel·licules" style="color: yellow; background-color: black;"></v-app-bar>

    <!--<v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-main class="d-flex align-center justify-center" style="min-height: 300px; ">


      <v-container class="" style="background-color: black;">
        <v-row style="background-color: black;">
          <v-col>
            <v-sheet width="1620" class="mx-auto" >
              <v-form @submit.prevent>
                <v-text-field v-model="this.cercar" :rules="rules" label="Escriu el nom: " class="custom"></v-text-field>
              </v-form>
            </v-sheet>
          </v-col>
          <v-col>
            <v-btn class="my-custom-button" @click="llamada">Buscar</v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters="" style="background-color: black;" >
          <v-col v-for="n in pelicules.Search" :key="n" cols="12" sm="4" style="background-color: black;">
            
            <v-sheet class="ma-2 pa-2" style="background-color: black;">
              <v-sheet width="300" height="" class="mx-auto" style="background-color: black;">
                <v-form disabled>
                  <v-card class="mx-auto" max-width="344" style="background-color: black;">
                    <v-img :src="n.Poster" height="500px" cover></v-img>

                    <v-card-title style="color: #ffffff;">
                      {{ n.Title }}
                    </v-card-title>

                    <v-card-subtitle>
                      
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn color="yellow" variant="text" >
                        Info
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn color="yellow" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="llamadaInfo(n.imdbID)" ></v-btn>
                    </v-card-actions>

                    <v-expand-transition >
                      <div v-if="show && imdbID==n.imdbID" >
                        <v-divider></v-divider>
                        
                        <v-card-text style="color: #ffffff;">
                          <b>Title: </b>{{ info.Title }}
                          <br>
                          <b>Plot:</b> {{ info.Plot }}
                          <br>
                          <b>Director: </b>{{ info.Director }}
                          <br>
                          <b>Writer: </b>{{ info.Writer }}
                          <br>
                          <b>Actors: </b>{{ info.Actors }}
                          <br>
                          <b>Genre: </b>{{ info.Genre }}
                          <br>
                          <b>RunTime: </b>{{ info.Runtime }}
                          <br>
                          <b>Released: </b>{{ info.Released }}
                          <br>
                          <b>Awards: </b>{{ info.Awards }}
                          <br>
                          
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
.template-background {
  background-color: black;
  /* Otros estilos para el elemento <template> si es necesario */
}
.custom {
  color: white; /* Texto en blanco */
  background-color: black; /* Fondo negro */
}
.my-custom-button {
  background-color:yellow; /* Color de fondo */
  color: rgb(0, 0, 0); /* Color del texto */
  border: none; /* Quita el borde */
  border-radius: 55px; /* Bordes redondeados */
  padding: 10px 20px; /* Espaciado interno */
  font-size: 16px; /* Tamaño de fuente */
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
  transition: background-color 0.3s; /* Transición suave del color de fondo */

  /* Estilos al pasar el ratón sobre el botón */
  &:hover {
    background-color: #000000; /* Cambia el color de fondo al pasar el ratón */
    color:yellow
  }
}
</style>
<script >
import { getInfo, getPelicules } from "./comunicationsManager.js";

export default {
  data() {
    return {
      show: false,
      pelicules: [],
      info: [],
      cercar: "",
      imdbID:"",
    }


  },
  methods:{
    llamada(){
      console.log("llamada");
      getPelicules(this,this.cercar)
    },
    llamadaInfo(Id){
      this.imdbID=Id
      this.show = !this.show
      console.log("info")
      getInfo(this,this.imdbID)
    }
  }
}

</script>
