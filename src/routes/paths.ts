function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  EXCHANGE: path(ROOTS_DASHBOARD, '/exchange'),
  MARKET: path(ROOTS_DASHBOARD, '/market'),
  TRADE: path(ROOTS_DASHBOARD, '/trade'),
  STATS: path(ROOTS_DASHBOARD, '/stats'),
  CONVERTER: path(ROOTS_DASHBOARD, '/converter'),
};
