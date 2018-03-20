const routers = [
   {
        path: '/',
        meta: {
            title: '个人简历',
        },
        component: r => require.ensure( [], ()=> r( require('./views/index.vue'))),
        children:[
            {
                path:'indexc',
                meta: {
                    title: '个人简历',
                },
                component: r => require.ensure( [], ()=> r(require('./views/indexc.vue')))
            },
            {
                path:'getCode',
                meta: {
                    title: '验证码',
                },
                component: r => require.ensure( [], ()=> r(require('./views/get_code.vue')))
            },
            {
                path:'getRich',
                meta: {
                    title: '富文本',
                },
                component: r => require.ensure( [], ()=> r(require('./views/get_rich.vue')))
            },
        ]
    },
    // {
    //     path:'*',
    //     redirect:'/'
    // }
];
export default routers;