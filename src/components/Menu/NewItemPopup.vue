<script setup>
import { ref } from "vue";
import AdminServices from "../../axios/AdminServices";

const name = ref("");
const description = ref("");
const photo = ref("");

const rules = [
  (value) => {
    return value ? true : "You must enter a first name.";
  },
];

const handleSubmit = () => {
    if (name.value !== "" && description.value !== "" && photo.value!== ""){
        AdminServices.addItem({
            name: name.value,
            description: description.value,
            photo: photo.value
        })
    }
}
</script>

<template>
  <v-card class="mx-auto form" max-width="344" title="Add new item">
    <v-form @submit.prevent>
      <v-container>
        <v-text-field v-model="name" :rules="rules" label="Name"></v-text-field>
        <v-text-field
          v-model="description"
          :rules="rules"
          label="Description"
        ></v-text-field>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Photo"
          variant="outlined"
          v-model="photo"
        ></v-file-input>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn type="submit" @click="handleSubmit" color="success">
          Add
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
      <v-btn
  
        class="close-button"
        icon="$close"
        density="comfortable"
        variant="plain"
      ></v-btn>
    </v-form>
  </v-card>
</template>


<style lang="scss" scoped>
.form {
  position: relative;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
