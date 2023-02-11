import { PATH_DASHBOARD } from 'src/routes/paths';
import SvgColor from 'src/components/svg-color';

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  swap: icon('ic_swap'),
  trading: icon('ic-candle-filled'),
};

const navConfig = [
  {
    subheader: 'Menu',
    items: [      
      { title: 'Swap', path: PATH_DASHBOARD.EXCHANGE, icon: ICONS.dashboard },
      { title: 'Stats', path: PATH_DASHBOARD.STATS, icon: ICONS.analytics },
      { title: 'Market', path: PATH_DASHBOARD.MARKET, icon: ICONS.ecommerce },
      { title: 'Trading', path: PATH_DASHBOARD.TRADE, icon: ICONS.trading },
      { title: 'Converter', path: PATH_DASHBOARD.CONVERTER, icon: ICONS.swap },
    ],
  },
];

export default navConfig;
