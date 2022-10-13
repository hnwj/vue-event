import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Select,
  Form,
  Input,
  FormItem,
  Link,
  Message,
  Main,
  Aside,
  Container,
  Header,
  Menu,
  MenuItem,
  Submenu,
  Footer,
  MessageBox,
  MenuItemGroup,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Dialog,
  Option,
  QuillItem
} from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Link)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Header)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Footer)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(QuillItem)

// 将message挂载到vue的原型上
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
