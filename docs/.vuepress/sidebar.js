const autoSidebar = require('./auto-sidebar')

const sidebar = (route) => autoSidebar(route, require(`..${route}/sidebar`))

module.exports = {
    //对多模块的管控
    '/utilse/guava': sidebar('/utilse/guava'),
    '/utilse/spring-utils': sidebar('/utilse/spring-utils'),
    '/utilse/else': sidebar('/utilse/else'),
    '/utilse/gist': sidebar('/utilse/gist'),
    // '/utilse/markdown': require('../utilse/markdown/sidebar'),
    '/utilse/docker': sidebar('/utilse/docker'),

    '/one-stage/javathread': sidebar('/one-stage/javathread'),
    '/one-stage/java8': sidebar('/one-stage/java8'),
    '/one-stage/java': sidebar('/one-stage/java'),
    '/one-stage/myjdbc': sidebar('/one-stage/myjdbc'),
    '/one-stage/threadsafe': sidebar('/one-stage/threadsafe'),
    '/one-stage/mysql': sidebar('/one-stage/mysql'),

    '/two-stage/html': sidebar('/two-stage/html'),
    '/two-stage/js': sidebar('/two-stage/js'),
    '/two-stage/ajax': sidebar('/two-stage/ajax'),
    '/two-stage/servlet': sidebar('/two-stage/servlet'),
    '/two-stage/npm': sidebar('/two-stage/npm'),

    '/three-stage/junit': sidebar('/three-stage/junit'),
    '/three-stage/mybatis': sidebar('/three-stage/mybatis'),

    '/pascal/basics': sidebar('/pascal/basics'),

    '/demo/Java': sidebar('/demo/Java'),
    '/demo/frame': sidebar('/demo/frame'),
    '/demo/databases': sidebar('/demo/databases'),
    '/demo/server': sidebar('/demo/server'),
    '/demo/web': sidebar('/demo/web'),

    '/c-book/gof23': sidebar('/c-book/gof23'),
	'/c-book/spring-security': sidebar('/c-book/spring-security'),
    '/c-book/kafka': sidebar('/c-book/kafka'),
}
