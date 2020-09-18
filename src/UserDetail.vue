<template>
  <div class="container">
    <div v-if="profile.user">
      <p>
        Full name: {{ fullName }}
      </p>
      <p>
        Email: {{ email }}
      </p>
    </div>
    <div v-if="profile.error">
      Oops an error occured
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import { ProfileState, User } from "./store/profile/types";
const namespace: string = "profile";
@Component
export default class UserDetail extends Vue {
  // @State("profile")
  // profile: ProfileState;
  @Action("fetchData", { namespace })
  fetchData: any;
  // @Getter("fullName", { namespace })
  // fullName: string;

  mounted() {
    // получение данных после монтирования компонента
    // this.fetchData();
  }

  // вычисляемое свойство email пользователя
  get email() {
    const user = this.profile && this.profile.user;
    return (user && user.email) || "";
  }
}
</script>