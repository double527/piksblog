import Vue from 'vue'
// import Element from 'element-ui'

// Vue.use(Element, { size: 'small', zIndex: 3000 });
import {
  Card,
  Aside,
  Button,
  Form,
  Upload,
  Image,
  Input,
  Row,
  Col,
  Menu,
  FormItem,
  MenuItem,
  Dialog,
  RadioGroup,
  RadioButton,
  Container,
  Header,
  Main,
  Footer,
  Message,
  Alert,
  Notification,
} from 'element-ui'

Vue.use(Upload)
Vue.use(Input)
Vue.use(Form)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Alert)
Vue.use(FormItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(RadioButton)
Vue.use(RadioGroup)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification