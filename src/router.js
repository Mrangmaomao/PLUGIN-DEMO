const routers = [
   {
        path: '/',
        meta: {
            title: '首页',
        },
        component: r => require.ensure( [], ()=> r( require('./views/index.vue'))),
        children:[
            {
                path:'indexc',
                meta: {
                    title: '首页',
                },
                component: r => require.ensure( [], ()=> r(require('./views/indexc.vue')))
            }
        ]
    },
    // {
    //     path:'*',
    //     redirect:'/'
    // }
];
export default routers;