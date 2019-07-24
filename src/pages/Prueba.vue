
<template>
  <div>
    <ul>
    <li v-for= "(evento,index) in eventos" :key="index">
    <h1>{{evento.fecha}}</h1>
    <h2>{{evento.ev}}</h2>

    </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
  return {
  eventos: [

   {fecha: 'August 5', ev:'NYSL Fundraiser'},
    {fecha: 'August 16', ev:'Season Kick-off: Meet the teams'},
    {fecha: 'September 1', ev:'First Game of the Season (Check Game Schedule for details)'}
  ]



    };
  }
};
</script>

<style>
h1 {
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: left;
  background-color: white

}
</style>
