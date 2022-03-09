export const data = {
  "key": "v-7dbf770e",
  "path": "/c-book/spring-security/notes/spring-security.html",
  "title": "spring security",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1.图解",
      "slug": "_1-图解",
      "children": []
    },
    {
      "level": 2,
      "title": "2.身份认证流程",
      "slug": "_2-身份认证流程",
      "children": [
        {
          "level": 3,
          "title": "2.1  登录参数和配置",
          "slug": "_2-1-登录参数和配置",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 用户登录",
          "slug": "_2-2-用户登录",
          "children": []
        },
        {
          "level": 3,
          "title": "2.3  根据用户名查询",
          "slug": "_2-3-根据用户名查询",
          "children": []
        },
        {
          "level": 3,
          "title": "2.4 密码校验",
          "slug": "_2-4-密码校验",
          "children": []
        },
        {
          "level": 3,
          "title": "2.5 登录后请求，校验token",
          "slug": "_2-5-登录后请求-校验token",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3.授权认证流程",
      "slug": "_3-授权认证流程",
      "children": []
    },
    {
      "level": 2,
      "title": "4.核心组件",
      "slug": "_4-核心组件",
      "children": [
        {
          "level": 3,
          "title": "4.1 SecurityContextHolder",
          "slug": "_4-1-securitycontextholder",
          "children": []
        },
        {
          "level": 3,
          "title": "4.2 SecurityContext",
          "slug": "_4-2-securitycontext",
          "children": []
        },
        {
          "level": 3,
          "title": "4.3 Authentication",
          "slug": "_4-3-authentication",
          "children": []
        },
        {
          "level": 3,
          "title": "4.4 GrantedAuthority",
          "slug": "_4-4-grantedauthority",
          "children": []
        },
        {
          "level": 3,
          "title": "4.5 UserDetails",
          "slug": "_4-5-userdetails",
          "children": []
        },
        {
          "level": 3,
          "title": "4.6 UserDetailsService",
          "slug": "_4-6-userdetailsservice",
          "children": []
        },
        {
          "level": 3,
          "title": "4.7 AuthenticationManager",
          "slug": "_4-7-authenticationmanager",
          "children": []
        },
        {
          "level": 3,
          "title": "4.8 DaoAuthenticationProvider",
          "slug": "_4-8-daoauthenticationprovider",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "5.相关注解",
      "slug": "_5-相关注解",
      "children": [
        {
          "level": 3,
          "title": "5.1 @EnableWebSecurity",
          "slug": "_5-1-enablewebsecurity",
          "children": []
        },
        {
          "level": 3,
          "title": "5.2 @EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)",
          "slug": "_5-2-enableglobalmethodsecurity-prepostenabled-true-securedenabled-true",
          "children": []
        },
        {
          "level": 3,
          "title": "5.3  表达式及注解说明",
          "slug": "_5-3-表达式及注解说明",
          "children": []
        },
        {
          "level": 3,
          "title": "表达式控制URL权限",
          "slug": "表达式控制url权限",
          "children": []
        },
        {
          "level": 3,
          "title": "5.3  @PreAuthorize  在方法执行前进行验证",
          "slug": "_5-3-preauthorize-在方法执行前进行验证",
          "children": []
        },
        {
          "level": 3,
          "title": "5.4  @PostAuthorize  在方法执行后进行验证",
          "slug": "_5-4-postauthorize-在方法执行后进行验证",
          "children": []
        },
        {
          "level": 3,
          "title": "5.5  @PreFilter  对参数进行过滤",
          "slug": "_5-5-prefilter-对参数进行过滤",
          "children": []
        },
        {
          "level": 3,
          "title": "5.6  @PostFilter  对返回值进行过滤",
          "slug": "_5-6-postfilter-对返回值进行过滤",
          "children": []
        },
        {
          "level": 3,
          "title": "5.7自定义权限处理",
          "slug": "_5-7自定义权限处理",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1645794513000
  },
  "filePathRelative": "c-book/spring-security/notes/spring-security.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
