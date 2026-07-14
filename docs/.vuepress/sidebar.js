import autoSidebar from './auto-sidebar.js'
import utilseGuava from '../utilse/guava/sidebar.js'
import utilseSpringUtils from '../utilse/spring-utils/sidebar.js'
import utilseElse from '../utilse/else/sidebar.js'
import utilseGist from '../utilse/gist/sidebar.js'
import utilseDocker from '../utilse/docker/sidebar.js'
import oneStageJavathread from '../one-stage/javathread/sidebar.js'
import oneStageJava8 from '../one-stage/java8/sidebar.js'
import oneStageJava from '../one-stage/java/sidebar.js'
import oneStageMyjdbc from '../one-stage/myjdbc/sidebar.js'
import oneStageThreadsafe from '../one-stage/threadsafe/sidebar.js'
import oneStageMysql from '../one-stage/mysql/sidebar.js'
import twoStageHtml from '../two-stage/html/sidebar.js'
import twoStageJs from '../two-stage/js/sidebar.js'
import twoStageAjax from '../two-stage/ajax/sidebar.js'
import twoStageServlet from '../two-stage/servlet/sidebar.js'
import twoStageNpm from '../two-stage/npm/sidebar.js'
import threeStageJunit from '../three-stage/junit/sidebar.js'
import threeStageMybatis from '../three-stage/mybatis/sidebar.js'
import pascalBasics from '../pascal/basics/sidebar.js'
import demoJava from '../demo/Java/sidebar.js'
import demoFrame from '../demo/frame/sidebar.js'
import demoDatabases from '../demo/databases/sidebar.js'
import demoServer from '../demo/server/sidebar.js'
import demoWeb from '../demo/web/sidebar.js'
import cBookGof23 from '../c-book/gof23/sidebar.js'
import cBookSpringSecurity from '../c-book/spring-security/sidebar.js'
import cBookKafka from '../c-book/kafka/sidebar.js'

const sidebar = (route, items) => autoSidebar(route, items)

export default {
    //对多模块的管控
    '/utilse/guava': sidebar('/utilse/guava', utilseGuava),
    '/utilse/spring-utils': sidebar('/utilse/spring-utils', utilseSpringUtils),
    '/utilse/else': sidebar('/utilse/else', utilseElse),
    '/utilse/gist': sidebar('/utilse/gist', utilseGist),
    // '/utilse/markdown': require('../utilse/markdown/sidebar'),
    '/utilse/docker': sidebar('/utilse/docker', utilseDocker),

    '/one-stage/javathread': sidebar('/one-stage/javathread', oneStageJavathread),
    '/one-stage/java8': sidebar('/one-stage/java8', oneStageJava8),
    '/one-stage/java': sidebar('/one-stage/java', oneStageJava),
    '/one-stage/myjdbc': sidebar('/one-stage/myjdbc', oneStageMyjdbc),
    '/one-stage/threadsafe': sidebar('/one-stage/threadsafe', oneStageThreadsafe),
    '/one-stage/mysql': sidebar('/one-stage/mysql', oneStageMysql),

    '/two-stage/html': sidebar('/two-stage/html', twoStageHtml),
    '/two-stage/js': sidebar('/two-stage/js', twoStageJs),
    '/two-stage/ajax': sidebar('/two-stage/ajax', twoStageAjax),
    '/two-stage/servlet': sidebar('/two-stage/servlet', twoStageServlet),
    '/two-stage/npm': sidebar('/two-stage/npm', twoStageNpm),

    '/three-stage/junit': sidebar('/three-stage/junit', threeStageJunit),
    '/three-stage/mybatis': sidebar('/three-stage/mybatis', threeStageMybatis),

    '/pascal/basics': sidebar('/pascal/basics', pascalBasics),

    '/demo/Java': sidebar('/demo/Java', demoJava),
    '/demo/frame': sidebar('/demo/frame', demoFrame),
    '/demo/databases': sidebar('/demo/databases', demoDatabases),
    '/demo/server': sidebar('/demo/server', demoServer),
    '/demo/web': sidebar('/demo/web', demoWeb),

    '/c-book/gof23': sidebar('/c-book/gof23', cBookGof23),
	'/c-book/spring-security': sidebar('/c-book/spring-security', cBookSpringSecurity),
    '/c-book/kafka': sidebar('/c-book/kafka', cBookKafka),
}
