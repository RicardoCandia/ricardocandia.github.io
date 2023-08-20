import { Badge } from "./Badge";

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
};

export const Primary = {
  size: 100,
  color: null,
  primary: true
}

export const Secondary = {
  size: 100,
  color: null,
  primary: false
}