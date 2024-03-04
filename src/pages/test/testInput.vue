<template>
    <div class="input w-1/2 h-screen shadow-xl">
        <div class="form w-60">
            <label for="">name</label>
            <n-input type="text" v-model:value="name" placeholder="name is request" />
        </div>
    </div>
</template>
<script setup>
import {computed, ref} from "vue"
let name = ref("")
</script>