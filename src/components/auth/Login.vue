<template>
    <div class="container" style="margin-top:150px;">
        <div class="row">
            <div class="col-6 m-auto">
                <div class="card">
                    <div class="card-header">
                        <div class="alert alert-dark" v-if="this.message != ''">
                            {{ message }}
                        </div>
                        <h3 v-else>Login Form</h3>
                    </div>
                    <div class="card-body">
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
                            <button class="btn btn-dark w-100 mb-2" v-on:click="Login">Login</button>
                            <center><router-link to="/sign-up">Go to SignUp Page</router-link></center>
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
                email: '',
                password: '',
                message: ''
            }
        },
        methods:
        {
            async Login() {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );

                if (result.status == 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    // Message
                    this.message = 'You Logged In successfully.';
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