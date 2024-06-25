<template>
    <div class="container" style="margin-top:150px;">
        <div class="row">
            <div class="col-6 m-auto">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-dark" v-if="this.message != ''">
                            {{ message }}
                        </div>
                        <h3 v-else>Sign UP Form</h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" v-model="name" id="name" placeholder="Enter Name">
                            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
                        </div>
                        <div class="form-group my-2">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="email" id="email" placeholder="Enter Email">
                            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" v-model="password" id="password"
                                placeholder="Enter Password">
                            <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
                        </div>
                        <div class="form-group mt-3">
                            <button class="btn btn-dark w-100 mb-2" v-on:click="signUp">Sign UP</button>
                            <center><router-link to="/login">Go to Login Page</router-link></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default
    {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                message: ''
            }
        },
        methods:
        {
            async signUp() {
                let result = await axios.post("http://localhost:3000/users",
                    {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    });

                if (result.status == 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    // Message
                    this.message = 'Your Registiration successfully.';
                    setTimeout(() => {
                        // Move to other route
                        this.$router.push({ name: 'Index' });
                    }, 2000);
                }
            }
        },
        mounted() {
            let Auth = localStorage.getItem('user-info');
            if (Auth) {
                this.$router.push({ name: "Index" });
            }
        }
    }
</script>