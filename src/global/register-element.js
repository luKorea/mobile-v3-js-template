import { Button } from "vant";
import "vant/lib/index.css"; // 全局引入样式

const components = [Button];

export default function (app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}
