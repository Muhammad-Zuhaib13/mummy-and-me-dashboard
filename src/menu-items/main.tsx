// third-party
import { FormattedMessage } from 'react-intl';
// assets
import { Icons } from '../assets';
import {
  BuildOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
// type
import { NavItemType } from 'types/menu';
// icons
const icons = {
  BuildOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
  HomeOutlined,
  PlusCircleOutlined
};
// ==============================|| MENU ITEMS - PAGES ||============================== //
const main: NavItemType = {
  id: 'main-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="Dashboard" />,
      type: 'item',
      url: '/dashboard',
      icon: icons.HomeOutlined,
      outlinedIcon: Icons.HomeOutlined,
      filledIcon: Icons.HomeFilled,
      breadcrumbs: false
    },
    {
      id: 'partners',
      title: <FormattedMessage id="Partners" />,
      type: 'item',
      url: '/partners',
      icon: icons.UserOutlined,
      outlinedIcon: Icons.UsersOutlined,
      filledIcon: Icons.UsersFilled,
      breadcrumbs: false
    },
    {
      id: 'services',
      title: <FormattedMessage id="Services" />,
      type: 'item',
      url: '/partners',
      icon: icons.UserOutlined,
      outlinedIcon: Icons.UsersOutlined,
      filledIcon: Icons.UsersFilled,
      breadcrumbs: false
    },
    {
      id: 'tips',
      title: <FormattedMessage id="Tips" />,
      type: 'item',
      url: '/tips',
      icon: icons.UserOutlined,
      outlinedIcon: Icons.UsersOutlined,
      filledIcon: Icons.UsersFilled,
      breadcrumbs: false
    },
    {
      id: 'marketing',
      title: <FormattedMessage id="Marketing" />,
      type: 'collapse',
      // url: '/marketing',
      icon: icons.UserOutlined,
      outlinedIcon: Icons.UsersOutlined,
      filledIcon: Icons.UsersFilled,
      breadcrumbs: false,
      children: [
        {
          id: 'advertisements',
          title: <FormattedMessage id="Advertisements" />,
          type: 'item',
          url: '/advertisements',
          target: true
        },
        {
          id: 'promotions',
          title: <FormattedMessage id="Promotions" />,
          type: 'item',
          url: '/promotions',
          target: true
        }
      ]
    },
    {
      id: 'users',
      title: <FormattedMessage id="Users" />,
      type: 'item',
      url: '/users',
      icon: icons.UserOutlined,
      outlinedIcon: Icons.UsersOutlined,
      filledIcon: Icons.UsersFilled,
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: <FormattedMessage id="Settings" />,
      type: 'collapse',
      // url: '/settings',
      icon: icons.UserOutlined,
      outlinedIcon: Icons.UsersOutlined,
      filledIcon: Icons.UsersFilled,
      breadcrumbs: false,
      children: [
        {
          id: 'categories',
          title: <FormattedMessage id="Categories" />,
          type: 'item',
          url: '/categories',
          target: true
        },
        {
          id: 'upload',
          title: <FormattedMessage id="Upload" />,
          type: 'collapse',
          // url: '/upload',
          target: true,
          children: [
            {
              id: 'sponsor',
              title: <FormattedMessage id="Sponsor" />,
              type: 'item',
              url: '/sponsor',
              target: true
            },
          ]
        },
        {
          id: 'faq',
          title: <FormattedMessage id="Faq" />,
          type: 'item',
          url: '/faq',
          target: true
        }
      ]
    },
  ]
};
export default main;