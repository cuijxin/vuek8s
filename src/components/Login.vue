<template>
<el-form :rules="rules" class="login-container" label-position="left" label-width="0px" v-loading="loading">
<h3 class="login_title">登录系统</h3>
<el-form-item prop="account">
    <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
</el-form-item>
<el-form-item prop="checkPass">
    <el-input type="password" v-model="loginForm.password" auto-complete="off" placeolder="密码"></el-input>
</el-form-item>
<el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
<el-form-item style="width: 100%">
    <el-button type="primary" style="width: 100%" @click="submitClick">登录</el-button>
</el-form-item>
</el-form>
</template>