<template>
  <div class="navbar navbar-transparent navbar-fixed-top">
    <div class="container e_p_0 e_xt_right">
      <div class="pc-style">
        <div style="position: absolute; left: 0; top: 0;">
          <a href="">
          <img src="@/assets/icon/svg/logo_128_34.svg" alt="logo" style="width: 167px; height: 44px">
        </a>
        </div>

        <a-menu mode="horizontal" @select="handleClick1">

          <template v-for="(submenu, index) in menuData">
            <a-menu-item :key="submenu.key" :to="{ path: submenu.path }" v-if="!submenu.children">
              <span :class="[
                'submenu-title',
                'submenu-has-children',
                { 'submenu-expanded': isSubMenuExpanded(submenu) },
              ]">
                <span>{{ submenu.title }}</span>
                <!--                <a-icon type="down" v-if="submenu.children && submenu.children.length > 0" class="icon-rotate" />-->
              </span>
            </a-menu-item>
            <a-sub-menu v-else @titleClick="toggleSubMenu(submenu.key)" class="parent-sub-menu">
              <span slot="title" :class="[
                'submenu-title',
                { 'submenu-expanded': isSubMenuExpanded(submenu) },
                { 'submenu-has-children': submenu.children && submenu.children.length > 0 },
              ]">
                <span>{{ submenu.title }}</span>
<!--                <a-icon type="down" v-if="submenu.children && submenu.children.length > 0" class="icon-rotate" />-->
              </span>
              <template v-for="(group, groupIndex) in submenu.children">
                <a-sub-menu v-if="group.children" :title="group.title" :key="group.key">
                  <a-menu-item v-for="(item, itemIndex) in group.children" :key="item.key">
                    <router-link :to="{ path: item.path }">
                      {{ item.title }}{{ item.path }}
                    </router-link>
                  </a-menu-item>
                </a-sub-menu>
                <a-menu-item :key="submenu.key" :to="{ path: group.path }" v-else>
                  <span>
                    <a-icon type="appstore" /><span>{{ group.title }}</span>
                  </span>
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </a-menu>



      </div>

      <div class="mobile-style">
        <div class="mobile-nav">
          <div>logo</div>
          <div>
            <img :src="require('@/assets/icon/nav.png')" @click="isMobile = !isMobile" />
          </div>
        </div>
        <!-- :open-keys="openKeys" @openChange="onOpenChange" -->
        <a-menu style="width: 100%;" mode="inline" @click="handleClick" v-if="isMobile">
          <a-sub-menu v-for="(submenu, index) in menuData" :key="submenu.key">
            <span slot="title"><a-icon type="appstore" /><span>{{ submenu.title }}</span></span>
            <a-sub-menu :title="group.title" v-for="(group, groupIndex) in submenu.children" :key="group.key">
              <a-menu-item v-for="(item, itemIndex) in group.children" :key="item.key">
                <router-link :to="{ path: item.path }">
                  {{ item.title }}{{ item.path }}
                </router-link>
              </a-menu-item>

            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<script>
// import path from 'path'

export default {
  data() {
    return {
      isMobile: false,
      menuData: [
        {
          title: '首 页（点我是Home下面的index组件）',
          key: 'Home',
          path: '/Home',
        },
        {
          title: '点我是demo下面的index',
          key: 'sub5',
          path: 'demo',
          children: [
            {
              title: '点我是demo下面的modules下面的page1',
              key: 'children5',
              path: '/demo/demo',
            }
          ]
        },
        {
          title: '点我是demo1下面的index',
          key: 'sub1',
          path: 'demo',
          children: [
            {
              title: '点我是demo1下面的modules下的page1',
              key: 'children1',
              children: [
                {
                  title: '点我是demo1下面的modules下的page11_1',
                  key: 1,
                  path: '/demo/demo',
                },
                {
                  title: '点我是demo1下面的modules下的page11_2',
                  key: 2,
                  path: '/login',
                },
                {
                  title: '点我是demo1下面的modules下的page11_3',
                  key: 3,
                  path: 'demo',
                }
              ]
            },
            {
              title: '点我是demo1下面的modules下的page2',
              key: 'children2',
              children: [
                {
                  title: '点我是demo1下面的modules下的page22_1',
                  key: 4,
                  path: 'demo',
                },
                {
                  title: '点我是demo1下面的modules下的page22_2',
                  key: 5,
                  path: 'demo',
                },
                {
                  title: '点我是demo1下面的modules下的page22_3',
                  key: 6,
                  path: 'demo',
                }
              ]
            }
          ]
        },
      ],
      /**/
      expandedKeys: [],
      // ... other data properties
    }
  },
  methods: {
    /**/
    toggleSubMenu(key) {
      if (this.expandedKeys.includes(key)) {
        this.expandedKeys = this.expandedKeys.filter((k) => k !== key);
      } else {
        this.expandedKeys.push(key);
      }
    },
    isSubMenuExpanded(submenu) {
      return (
        this.expandedKeys.includes(submenu.key) ||
        (submenu.children &&
          submenu.children.some((group) => this.expandedKeys.includes(group.key)))
      );
    },
    // ... other methods


    resolvePath(...paths) {
      return path.resolve(this.basePath, ...paths)
    },
    submenuClick(item) {
      console.log('item ', item);
    },
    handleClick(e) {
      console.log('click ', e);
      this.isMobile = false
    },
    handleClick1(e) {
      console.log('click ', e);

    }
  },
}
</script>

<style scoped>
.mobile-style {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ccc;
  z-index: 9;
}

.mobile-nav {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 18px;
}

.mobile-nav img {
  width: 30px;
  height: 30px;
}

@media screen and (max-width: 768px) {

  /* 当屏幕宽度小于等于 768px 时应用移动端样式 */
  .pc-style {
    display: none;
  }

  .mobile-style {
    display: block;
    text-align: left !important;
  }
}




.submenu-title{
  display: flex!important;
  align-items: center!important;
  text-align: center!important;
}
.ant-menu{
  font-size: 18px;
}



/*header*/
.navbar-transparent {
  background: #fff;
  padding: 15px 0;
  border: 0;
  transition: background-color 0.3s ease-in;
  box-sizing: border-box;
  -webkit-box-shadow: 0 2px 5px -2px rgb(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 5px -2px rgb(0, 0, 0, 0.1);
  box-shadow: 0 2px 5px -2px rgb(0, 0, 0, 0.1);
}

.navbar-fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
.navbar {
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

.container{
  position: relative;
  width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/*内边距*/
.e_p_0{
  padding: 0!important;
}

/*右对齐*/
.e_xt_right{
  text-align: right;
}







.icon-rotate {
  font-size: 10px;
  margin: 0 4px;
  justify-content: center!important;
  transition: transform 0.3s;
}

.parent-sub-menu:hover .icon-rotate,
.parent-sub-menu:hover .icon-rotate .submenu-title.submenu-expanded::after,
.submenu-expanded .icon-rotate{
  transform: rotate(180deg);
}

.ant-menu-item,
.ant-menu-item:hover,
.ant-menu-item-selected,
.ant-menu-submenu-title,
.ant-menu-submenu-selected,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-submenu,
.ant-menu-horizontal{
  border-bottom: none;
}
</style>

