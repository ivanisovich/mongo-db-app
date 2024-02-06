<script setup>
import { ref,defineEmits } from "vue";
import AdminServices from "../../axios/AdminServices";

const emit = defineEmits(["close-popup"])

const name = ref("");
const description = ref("");
const photo = ref("");
const category = ref("");

const rules = [(value) => !!value || "This field is required."];
const fileRules = ref([(v) => (v && v.length > 0) || "File is required."]);

const onFileSelected = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      photo.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  if (
    name.value &&
    description.value &&
    photo.value.length > 0 &&
    category.value
  ) {
    AdminServices.addItem({
      name: name.value,
      description: description.value,
      photo: photo.value,
      category: category.value,
    })
      .then(() => {
        console.log("Item added successfully");
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  }
};
</script>

<template>
  <v-card class="mx-auto form" max-width="344" title="Add new item">
    <v-form class="form__inner" @submit.prevent="handleSubmit">
      <v-container>
        <v-text-field
          variant="outlined"
          v-model="name"
          :rules="rules"
          label="Name"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          v-model="description"
          :rules="rules"
          label="Description"
        ></v-text-field>
        <v-file-input
          :rules="fileRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Photo"
          variant="outlined"
          @change="onFileSelected"
        ></v-file-input>
        <v-select
          :rules="rules"
          v-model="category"
          label="Select"
          :items="['Latte', 'Cappuccino']"
          variant="outlined"
        ></v-select>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="success">
          Add
          <v-icon right>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
      <v-btn
        @click="emit('close-popup')"
        class="close-button"
        icon="$close"
        density="comfortable"
        variant="plain"
      ></v-btn>
    </v-form>
  </v-card>
</template>

<style scoped lang="scss">
.form {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  top: 100px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  &__inner {
    position: relative !important;
  }
}

.close-button {
  position: absolute;
  top: -45px;
  right: 5px;
}
</style>
