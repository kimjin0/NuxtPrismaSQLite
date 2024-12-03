<template>
    <div>
      <h1>Add User</h1>
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <button @click="addUser">Add User</button>
      <p>{{ message }}</p>
    </div>
  </template>
<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const addUser = async () => {
  const response = await $fetch('/api/users/add', {
    method: 'POST',
    body: { name: name.value, email: email.value },
  });

  message.value = response.message;
};
</script>


