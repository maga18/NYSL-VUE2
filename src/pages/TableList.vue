<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Game Information</h4>
              <p class="card-category">All place take place on Saturday</p>
            </template>
            <l-table class="table-hover"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>




      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['Month', 'Teams', 'Location', 'Times']
  const tableData = [
   {
        month: 'SEPTEMBER',
        teams: '',
        location: '',
        times: ''
    },
   {
    month: '09/01',
    teams: 'U1 and U4',
    location: 'AJ Katzenmaier',
    times: '9:30 am'
  },
  {
    month: '',
    teams: 'U3 and U2',
    location: 'Greenbay',
     times: '1:00 pm'
  },

  {
    month: '09/08',
    teams: 'U5 and U6',
    location: 'Howard A Yeager',
    times: '9:30 am'
  },

  {
    month: '',
    teams: 'U6 and U1',
    location: 'Maryorie P Hart',
     times: '1:00 pm'
  },
     {
      month: '09/15',
      teams: 'U2 and U4',
      location: 'North',
      times: '9:30 am'
     },
     {
        month: '',
        teams: 'U3 and U5',
        location: 'AJ Katzeinmaier',
        times: '1:00 pm'
     },
     {
        month: '09/22',
        teams: 'U1 and U3',
        location: 'South',
        times: '9:30 am'
      },
      {
         month: '',
         teams: 'U2 and U6',
         location: 'Howard A Yeager',
          times: '1:00 pm'
       },
       {
          month: '09/29',
          teams: 'U4 and U5',
          location: 'Greenbay',
          times: '09:30 am'
        },
        {
                month: 'OCTOBER',
                teams: '',
                location: '',
                times: ''
            },
           {
            month: '10/06',
            teams: 'U2 and U5',
            location: 'Marjorie P Hart',
            times: '9:30 am'
          },
          {
            month: '',
            teams: 'U1 and U6',
            location: 'South',
             times: '1:00 pm'
          },

          {
            month: '10/08',
            teams: 'U3 and U4',
            location: 'Howard A Yeager',
            times: '9:30 am'
          },

          {
            month: '',
            teams: 'U5 and U1',
            location: 'Greenbay',
             times: '1:00 pm'
          },
             {
              month: '10/20',
              teams: 'U6 and U3',
              location: 'North',
              times: '9:30 am'
             },
             {
                month: '',
                teams: 'U2 and U4',
                location: 'Maryorie P Hart',
                times: '1:00 pm'
             },
             {
                month: '10/27',
                teams: 'U3 and U1',
                location: 'AJ Katzenmaier',
                times: '9:30 am'
              },
              {
                 month: '',
                 teams: 'U5 and U6',
                 location: 'Howard A Yeager',
                 times: '1:00 pm'
               },
              ]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
