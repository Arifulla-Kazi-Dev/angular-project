
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-project"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/login"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/register"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/expenses"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/budget"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/insights"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/profile"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-project",
    "route": "/angular-project/**"
  }
],
  assets: {
    'index.csr.html': {size: 2227, hash: 'f3dec3ed6da3f958a11bab4ac7b6ccdc2b52fd2b82c4e469a20952200c8d1818', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '5216115730a60c6c86136f9edd91fe4eb286757a8e8cf414af055637698613b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10518, hash: '59c9bdff35e4c615a9b3415f63d36116b0d04ff253523bfb27eea36337fcbff7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 2497, hash: '9aba75621eec42ada9497f9c9bcee0af0e03f0d534dc95a551b91173f09ddccc', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 2506, hash: '1bc54d2dff21b533a1bd11acc906821ef4e7a772b07f609c66f70041f7aaae71', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'budget/index.html': {size: 2500, hash: '131bbd133ec3f7633aa9d0f3da4ae9b16a8698d35a7773d40d0098d12a60b56b', text: () => import('./assets-chunks/budget_index_html.mjs').then(m => m.default)},
    'insights/index.html': {size: 8658, hash: 'a5ac73b3fc77cc119f6c1758fea3639b7ebe5cfacbf8d106bece82d675248850', text: () => import('./assets-chunks/insights_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 2503, hash: '87bf93dc255ff8ee1504ec4158ca781f2a585662fdb3c4302cedb84f9bddfb13', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 2506, hash: '7f7183d1f214a0a1da15e26f07b2fd510a856cd84d8024bbe6f1a6852752cce7', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-HM25E456.css': {size: 18583, hash: '711Il6r9crQ', text: () => import('./assets-chunks/styles-HM25E456_css.mjs').then(m => m.default)}
  },
};
