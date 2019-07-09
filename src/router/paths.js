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
    // Relative to /src/views
    view: 'Dashboard',
    meta: {
      'layout': 'default'
    },
    alias: ['/']
  },
  {
    path: '/graph',
    // Relative to /src/views
    view: 'Graph',
    meta: {
      'layout': 'default'
    },
    alias: ['/', '/user/:id']
  },
  {
    path: '/suites',
    view: 'Suites',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/suites/:name',
    view: 'Suite',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/todotsuites',
    view: 'SuitesToDot',
    meta: {
      'layout': 'default'
    }
  },
  {
    path: '/todotsuites/:name',
    name: 'Dot View',
    view: 'DotSuite',
    meta: {
      'layout': 'default'
    }
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
