<template>
    <Header />
    <div class="container" style="margin-top:100px;">
        <div class="row">
            <div class="col-8 m-auto">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-dark" v-if="this.message != ''">
                            {{ message }}
                        </div>
                        <h3 class="table-head" v-else>
                            <span>Add Restaurant</span>
                            <router-link to="/" class="btn btn-dark">Back</router-link>
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" v-model="restaurant.name" id="name"
                                placeholder="Enter Name">
                            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
                        </div>
                        <div class="form-group my-2">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" v-model="restaurant.address" id="address"
                                placeholder="Enter Address">
                            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
                        </div>
                        <div class="form-group">
                            <label for="contact">Contact</label>
                            <input type="number" class="form-control" v-model="restaurant.contact" id="contact"
                                placeholder="Enter Contact">
                            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
                        </div>
                        <div class="form-group mt-3">
                            <button class="btn btn-dark w-100 mb-2" v-on:click="addRestaurant">Add Restaurant</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '../inc/Header.vue'

export default
    {
        components:
        {
            Header
        },
        data() {
            return {
                restaurant:
                {
                    name: '',
                    address: '',
                    contact: ''
                },
                message: ''
            }
        },
        methods:
        {
            async addRestaurant() {
                let result = await axios.post("http://localhost:3000/restaurant", {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                });
                if (result.status == 201) {
                    // Message
                    this.message = 'Record added successfully.';
                    setTimeout(() => {
                        // Move to other route
                        this.$router.push({ name: 'Index' });
                    }, 2000);
                }
            }
        },
        mounted() {
            let Auth = localStorage.getItem('user-info');
            if (!Auth) {
                this.$router.push({ name: "Login" });
            }
        }
    }
</script>

<style scoped>
.table-head {
    display: flex;
    justify-content: space-between;
}
</style>