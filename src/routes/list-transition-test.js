/**
 * @author ghchu
 * @description list-transition-test 测试页
 */

const ListTransitionTest = () =>
  import(/* webpackChunkName:'ListTransitionTest' */ 'Views/ListTransitionTest/ListTransitionTest')

export default [
  {
    path: '/list-transition-test',
    name: 'ListTransitionTest',
    component: ListTransitionTest,
    meta: {
      title: '测试ListTransitionTest'
    }
  }
]