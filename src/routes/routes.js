import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
//import Overview from 'src/pages/Overview.vue'//Home
import UserProfile from 'src/pages/UserProfile.vue'//Registration
import TableList from 'src/pages/TableList.vue'//Game Information
import Typography from 'src/pages/Typography.vue'//Rules
import Icons from 'src/pages/Icons.vue'//Imagen
import Maps from 'src/pages/Maps.vue'//maps
import Notifications from 'src/pages/Notifications.vue'//Upcoming Events
//import Upgrade from 'src/pages/Upgrade.vue'
import Prueba from 'src/pages/Prueba.vue'//Up coming Events
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/prueba'
  },

  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/prueba',
    children: [
     {
                    path: 'prueba',
                    name: 'Prueba',
                    component: Prueba
          },
     // {
      //  path: 'overview',
       // name: 'Overview',
       // component: Overview
      //},
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },

      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      /*{
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }*/
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
