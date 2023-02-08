import SvgIconStyle from 'src/components/SvgIconStyle';
import { EXCHANGE, MARKET, TRADE, STATS, CONVERTER } from './path';

const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  swap: getIcon('ic_swap'),
  trading: getIcon('ic-candle-filled'),
};

const navConfig = [
  {
    subheader: 'General',
    items: [
      { title: 'Swap', path: EXCHANGE, icon: ICONS.dashboard },
      { title: 'Stats', path: STATS, icon: ICONS.analytics },
      { title: 'Market', path: MARKET, icon: ICONS.ecommerce },
      { title: 'Trading', path: TRADE, icon: ICONS.trading },
      { title: 'Converter', path: CONVERTER, icon: ICONS.swap },
    ],
  },
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: '/dashboard/user',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: '/dashboard/user/four' },
  //         { title: 'Five', path: '/dashboard/user/five' },
  //         { title: 'Six', path: '/dashboard/user/six' },
  //       ],
  //     },
  //   ],
  // },
];

export default navConfig;
