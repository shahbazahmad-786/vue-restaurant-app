<template>
    <Header />
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-dark" v-if="this.message != ''">
                            Record deleted successfully
                        </div>
                        <h3 class="table-head" v-else>
                            <span>All Restaurants</span>
                            <router-link to="/add" class="btn btn-dark">Add Record</router-link>
                        </h3>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Contact</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in restaurants" :key="item.id">
                                    <td>0{{ item.id }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.address }}</td>
                                    <td>{{ item.contact }}</td>
                                    <td>
                                        <router-link :to="'/edit/' + item.id" class="btn btn-dark">Edit</router-link>
                                        <div class="btn btn-outline-dark mx-2" v-on:click="deleteRestaurant(item.id)">Delete
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './inc/Header.vue'
export default
    {
        components:
        {
            Header
        },
        data() {
            return {
                restaurants: [],
                message: ''
            }
        },
        methods:
        {
            async deleteRestaurant(id) {
                let daleteResult = await axios.delete("http://localhost:3000/restaurant/" + id);
                if (daleteResult.status == 200) {
                    this.loadData();
                    // Message
                    this.message = 'Record deleted successfully.';
                    setTimeout(() => {
                        this.message = '';
                    }, 2000);


                }
            },
            async loadData() {
                let Auth = localStorage.getItem('user-info');
                if (!Auth) {
                    this.$router.push({ name: "Login" });
                }

                let result = await axios.get("http://localhost:3000/restaurant");
                this.restaurants = result.data;
            }

        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped>
.table-head {
    display: flex;
    justify-content: space-between;
}
</style>