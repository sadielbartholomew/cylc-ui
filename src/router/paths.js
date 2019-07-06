/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/login',
    name: 'Login',
    view: 'Login',
    meta: {
      'layout': 'empty'
    }
  },
  {
    path: '/dashboard',
    view: 'Dashboard',
    meta: {
      'layout': 'default'
    },
    alias: ['/']
  },
  {
    path: '/suites',
    name: 'My Suites',
    view: 'Suites',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/suites/tree/:name',
    name: 'Tree View',
    view: 'TreeSuite',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/suites/dot/:name',
    name: 'Dot View',
    view: 'DotSuite',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/graph',
    name: 'Graph View',
    view: 'Graph',
    meta: {
      'layout': 'default'
    },
    alias: ['/', '/user/:id']
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/notifications',
    view: 'Notifications',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/about',
    view: 'About',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '*',
    view: 'NotFound',
    meta: {
      'layout': 'empty'
    }
  }
]
