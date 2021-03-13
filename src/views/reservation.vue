<template>
  <div id="backg">
    <div class="container">
      <b-card id="reservation">
        <h1>reservation</h1>
        <div class="row">
          <b-label class="col-3">First Name : </b-label>
          <input class="col-7 ml-md-5" type="text" v-model="FN" />
        </div>
        <br />
        <div class="row">
        <b-label class="col-3">Last Name : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="LN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Tel : </b-label>
        <b-input class="col-7 ml-md-5" type="text"   v-model="TEL"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">People Unit : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="PU"></b-input>
      </div>
      <br /> 
        <div class="row">
        <b-label class="col-3" for="example-datepicker">Date : </b-label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="DE"
          class="col-7 ml-md-5"
        ></b-form-datepicker>
      </div>
      <br />
        <div class="row">
        <b-label class="col-3">Time : </b-label>
        <b-row class="col-2 ml-md-4" v-for="type in types" :key="type">
          <b-form-input
            :id="`type-${type}`"
            :type="type"
            v-model="TM"
          ></b-form-input>
        </b-row>
      </div>
      <br />
        <div class="row">
        <b-label class="col-3" for="textarea-default">Text : </b-label>
        <b-form-textarea
        class="col-7 ml-md-5" type="text" v-model="TX"
            id="textarea-default"
            placeholder="Textarea"
          ></b-form-textarea>
      </div>
      <br />
        <b-button variant="primary" v-b-modal.modalPopover @click="addData()">SUMMIT</b-button>
         <b-modal id="modalPopover" title="Reservation" ok-only>
    <p> การจอง สำเร็จ</p>
    
  </b-modal>
      </b-card>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import { db } from "@/main.js";
export default {
  data() {
    return {
      data: [],
      types: ["time"],
    };
  },
  methods: {
    addData() {
      const data = {
        FName: this.FN,
        LName: this.LN,
        Tel:this.TEL,
        PeopleUnit: this.PU,
        Date: this.DE,
        Time:this.TM,
        Textetc:this.TX
      };
      db
      .collection("MyForm")
        .doc("user")
        .set(data)
        .then(function () {
          console.log("Document successfully written -> MyForm ");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      const dataText = {
        FName: this.FN,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db
      .collection("mytext")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Document successfully written -> mytext ");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>
<style >
#reservation {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: rgb(70, 70, 70);
}
#backg {
  background: rgb(20, 20, 20);
}
</style>
