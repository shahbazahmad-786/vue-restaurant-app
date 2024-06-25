<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark px-3">
        <router-link class="navbar-brand" to="/">Restaurant Project</router-link>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav m-auto mt-2 mt-lg-0">
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <router-link class="btn btn-outline-light" to="#" v-on:click="Logout">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default
    {
        data() {
            return {
                AuthName: 'Any User'
            }
        },
        methods:
        {
            Logout() {
                localStorage.clear();
                this.$router.push({ name: 'Login' });
            }
        }
    }
</script>