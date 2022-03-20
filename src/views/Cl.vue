<template>
  <center>
    <div class="container">
      <center><h1>ประวัติการเข้ารักษาที่คลินิก</h1></center>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="20"
                label="ชื่อ - สกุล"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="tel"
                :rules="telRules"
                :counter="10"
                label="เบอร์โทร"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                label="เพศ"
                dense
                v-model="sex"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="sickness"
                :rules="nameRules"
                :counter="50"
                label="อาการ"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="disease"
                :rules="nameRules"
                label="โรคประจำตัว"
                required
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="item"
                label="การรักษา"
                dense
                v-model="treat"
              ></v-select>
            </v-col>

            <div class="col">
              <div class="mb-3">
                <label for="startDate" class="form-label">Date</label>
                <input
                  id="startDate"
                  class="form-control"
                  type="date"
                  v-model="date"
                  required
                />
              </div>
            </div>
          </v-row>
        </v-container>

        <v-btn elevation="2" large @click="addData" color="green">Add</v-btn>
      </v-form>
      <h1>ตารางแสดงรายชื่อผู้เข้ามารักษาที่คลินิก</h1>
      <div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">วันที่</th>
                <th scope="col">ชื่อ - สกุล</th>
                <th scope="col">เพศ</th>
                <th scope="col">เบอร์โทร</th>
                <th scope="col">E-mail</th>
                <th scope="col">อาการ</th>
                <th scope="col">โรคประจำตัว</th>
                <th scope="col">การรักษา</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in hist" :key="i" align="center">
                <td>{{ i + 1 }}</td>
                <td>{{ item.data.sdate }}</td>
                <td>{{ item.data.sname }}</td>
                <td>{{ item.data.ssex }}</td>
                <td>{{ item.data.stel }}</td>
                <td>{{ item.data.semail }}</td>
                <td>{{ item.data.ssick }}</td>
                <td>{{ item.data.sdisease }}</td>
                <td>{{ item.data.streat }}</td>
                <td>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                    @click="Del(item.id)"
                  >
                    <v-icon dark>mdi-minus</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </center>
</template>
<script type="text/javascript">
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../plugins/firebase";
export default {
  data() {
    return {
      hist: [],
      name: "",
      email: "",
      sex: "",
      tel: "",
      date: "",
      items: ["ชาย", "หญิง"],
      sickness: "",
      disease: "",
      treat: "",
      item: ["รับยา", "ผ่าตัด", "admit", "ฉีดยา", "X-ray", "ทำแผล"],
    };
  },
  beforeMount() {
    this.readData();
  },
  methods: {
    async addData() {
      try {
        this.hist = [];
        const docRef = await addDoc(collection(db, "userdata"), {
          sname: this.name,
          semail: this.email,
          ssex: this.sex,
          stel: this.tel,
          sdate: this.date,
          ssick: this.sickness,
          sdisease: this.disease,
          streat: this.treat,
        });
        this.name = "";
        this.email = "";
        this.sex = "";
        this.tel = "";
        this.date = "";
        this.sickness = "";
        this.disease = "";
        this.treat = "";
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    readData() {
      this.hist = [];
      const q = query(collection(db, "userdata"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.hist.push({ id: doc.id, data: doc.data() });
        });
      });
    },
    async Del(id) {
      this.hist = [];
      console.log("Delete" + id);
      try {
        await deleteDoc(doc(db, "userdata", id));
        window.location.reload(false);
      } catch (e) {
        console.log("delete" + e);
      }
    },
  },
};
</script>